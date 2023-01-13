<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClassScheduleAdvanceResource;
use App\Http\Resources\ClassScheduleResource;
use App\Http\Resources\student\profileOverview;
use App\Http\Resources\StudentAdvanceResource;
use App\Http\Resources\StudentResource;
use App\Http\Resources\TeacherAdvanceResource;
use App\Models\ClassSchedule;
use App\Models\Student;
use App\Models\StudentSession;
use App\Models\Subject;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudentController extends BaseController
{
    private $studentAdvanceResource;
    private $profileOverviewResource;
    public $Model;
    
    public function __construct()
    {
        $this->studentAdvanceResource = new StudentAdvanceResource(array());
        $this->profileOverviewResource = new profileOverview(array());
        $this->Model = new Student();
    }

    public function getData($allowPagination)
    {
        $students = parent::index($allowPagination);

        return $this->studentAdvanceResource->collection($students);
    }

    public function saveData(Request $request)
    {
        // Insert into user table
        parent::createModelObject("App\Models\User");
        $user = parent::store($request->user_info);

        // Insert into student table
        parent::createModelObject("App\Models\Student");
        $student_info_tmp = array();
        $student_uid = [
            'user_id' => $user->id
        ];
        $student_info_tmp = (array)array_merge($request->student_info, $student_uid);

        $student = parent::store($student_info_tmp);

        // Insert into parent table
        $parent_info = json_decode($request->parent_info, true);
        foreach ($parent_info as $key => $value) {
            parent::createModelObject("App\Models\User");
            $user_info["first_name"] = $value['first_name'];
            $user_info["last_name"] = $value['last_name'];
            $user_info["email"] = $value['email'];
            $user_info["role"] = $value['role'];
            $user = parent::store($user_info);

            parent::createModelObject("App\Models\Guardian");
            $prt_info["full_name"] = $value['full_name'];
            $prt_info["phone"] = $value['phone'];
            $prt_info["user_id"] = $user->id;
            $parent = parent::store($prt_info);

            parent::createModelObject("App\Models\Guardian_Student");
            $grd_std_info["guardian_id"] = $parent->id;
            $grd_std_info["student_id"] = $student->id;
            $guardian_student = parent::store($grd_std_info);
        }

        $this->successResponse($student, 'save successfully');
    }

    public function show($id)
    {
        return parent::show($id);
    }

    public function destroy($id)
    {
        return parent::destroy($id);
    }

    public function profileOverview($id)
    {
        $profile_overview = Student::where('id',$id)->first();

        return  $this->profileOverviewResource->make($profile_overview);

    }

    public function getTeacherSlot($student_id,$teacher_id){
        $student = Student::with(['classSchedule'=>function($query) use($teacher_id){
            $query->where('teacher_id',$teacher_id);
        }])->where('id',$student_id)->first();

        return ClassScheduleResource::collection($student->classSchedule);
    }

    public function allClasses($id){
        $student = Student::where('id',$id)->first();

        return ClassScheduleResource::collection($student->classSchedule);
    }

    public function sortedClass($id)
    {
        $class_unique_ids = StudentSession::where('student_id',$id)->groupBy('class_unique_id')->pluck('class_unique_id');
        $sub = ClassSchedule::with('subject')->orderBy('id', 'DESC');
        $sorted_class = DB::table(DB::raw("({$sub->toSql()}) as sub"))
            ->whereIn('class_unique_id', $class_unique_ids)
            ->groupBy('class_unique_id')
            ->get();
        foreach ($sorted_class as $key => $value) {
            $teacher = Teacher::where('id',$value->teacher_id)->first();
            $subject = Subject::where('id',$value->subject_id)->first();
            $value->teacher=$teacher;
            $value->subject=$subject;
        }

        return  ClassScheduleAdvanceResource::collection($sorted_class);
    }

    public function changePassword(Request $request, $id)
    {
    }
}


// code for learning

// $timetableIds = StudentSession::where('student_id',$id)->pluck('class_schedule_id');
// $sub = ClassSchedule::orderBy('id','DESC');
// $timetables = DB::table(DB::raw("({$sub->toSql()}) as sub"))
// ->whereIn('id',$timetableIds)
// ->groupBy('class_unique_id')
// ->get();
// $student = Student::where('id',$id)->first();

// foreach ($timetables as $key => $value) {
//     $subject = Subject::where('id',$value->subject_id)->first();
//     $teacher = Teacher::where('id',$value->teacher_id)->first();
//     $value->subject = $subject->name;
//     $value->teacher = $teacher->full_name;

// }

// return $this->successResponse($timetables, 'fetch record successfully');