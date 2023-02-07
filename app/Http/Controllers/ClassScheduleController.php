<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use StudentSubject;
use App\Models\Assignment;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\ClassSchedule;
use App\Models\StudentTeacher;
use App\Models\TeacherSubject;
use App\Models\TeacherAssignment;
use App\Http\Controllers\BaseController;
use App\Http\Resources\ClassScheduleResource;
use App\Http\Resources\UploadImageOrFileResource;
use App\Models\StudentSubject as ModelsStudentSubject;

class ClassScheduleController extends BaseController
{
    private $classScheduleResource;
    private $imageOrFile;
    public $Model;

    public function __construct()
    {
        $this->classScheduleResource = new ClassScheduleResource(array());
        $this->Model = new ClassSchedule();
        $this->imageOrFile = new uploadImageOrFileController();
    }

    public function getData($allowPagination)
    {
        $subjects = parent::index($allowPagination);

        return $this->classScheduleResource->collection($subjects);
    }

    public function getResourceFile($class_schedule_id)
    {
        $assignmentIds = TeacherAssignment::where('class_schedule_id', $class_schedule_id)->pluck('assignment_id');
        $assignments = Assignment::whereIn('id',$assignmentIds)->get();
        foreach ($assignments as $key => $value) {
            # code...
            $value->resourceFile = $this->imageOrFile->getFile($value->assignment);
        }
        return $assignments;
        return UploadImageOrFileResource::collection($assignments);
    }

    public function saveResourceFile(Request $request)
    {
        if ($request->type == "assignment_answer") {
            parent::createModelObject("App\Models\Assignment_Answer");
            $assignment_answer_info = [
                'assignment_id' => $request->assignment_id,
                'student_id' => $request->student_id,
                'class_schedule_id' => $request->class_schedule_id,
            ];
            $assessment_answer = parent::store($assignment_answer_info);
        } else {
            if ($assessment = $request->file('assessment_file')) {
                $groupId = 0;
                $uploadGroupId = $this->imageOrFile->manageUploads($assessment, $savepath = 'classSchedule', $groupId);
                $assignment_info = [
                    'assignment' => $uploadGroupId,
                    'type' => $request->type
                ];
                parent::createModelObject("App\Models\Assignment");
                $assignmentInfo = parent::store($assignment_info);

                $teacher_assignment_info = [
                    'assignment_id' => $assignmentInfo->id,
                    'teacher_id' => $request->teacher_id,
                    'class_schedule_id' => $request->class_schedule_id,
                    'class_unique_id' => $request->class_unique_id,
                ];
                parent::createModelObject("App\Models\TeacherAssignment");
                $teacher_assignment = parent::store($teacher_assignment_info);
            }
        }
    }
    public function saveZoomLink(Request $request){   
        $timetable = ClassSchedule::find($request->timetable_id);
        $timetable->zoom_link = $request->zoomLink;
        $timetable->save();
        return array(
            "status"  => "ok",
            "message" => "success",
            "result"  => $timetable
        );
        // return parent::index($request);
    }

    public function saveData(Request $request)
    {
        $arrayTemp = array();

        $slotTimes = json_decode($request->class_slot_info['slotTimes'], true);
        $students = json_decode($request->class_student_info['students'], true);
        $session_id = Str::random($length = 10);

        foreach ($slotTimes as $key => $slotTime) {
            parent::createModelObject("App\Models\ClassSchedule");
            $class_schedule_info = [
                'start_date' => $slotTime['startDate'],
                'end_date' => $slotTime['endDate'],
                'duration' => $slotTime['duration'],
                'class_unique_id' => $session_id
            ];

            $arrayTemp = (array)array_merge($request->class_schedule_info, $class_schedule_info);

            $class_schedule = parent::store($arrayTemp);

            // insert into teacher_subject table
            $teacher_subject = TeacherSubject::where([
                'teacher_id' => $class_schedule->teacher_id,
                'subject_id' => $class_schedule->subject_id
            ])->get();

            if (count($teacher_subject) == 0) {
                parent::createModelObject("App\Models\TeacherSubject");
                $teacher_subject_info["teacher_id"] = $class_schedule->teacher_id;
                $teacher_subject_info["subject_id"] = $class_schedule->subject_id;
                parent::store($teacher_subject_info);
            }

            // insert into student_session table
            foreach ($students as $key => $student) {
                parent::createModelObject("App\Models\StudentSession");
                $student_info["student_id"] = $student['id'];
                $student_info["class_schedule_id"] = $class_schedule->id;
                $student_info["class_unique_id"] = $class_schedule->class_unique_id;
                $student_info["teacher_id"] = $class_schedule->teacher_id;
                $student_info["subject_id"] = $class_schedule->subject_id;
                parent::store($student_info);

                // insert into student_subject table
                $student_subject = ModelsStudentSubject::where([
                    'student_id' => $student['id'],
                    'subject_id' => $class_schedule->subject_id
                ])->get();
                if (count($student_subject) == 0) {
                    parent::createModelObject("App\Models\StudentSubject");
                    $student_subject_info["student_id"] = $student['id'];
                    $student_subject_info["subject_id"] = $class_schedule->subject_id;
                    parent::store($student_subject_info);
                }

                // insert into student_teacher table
                $student_teacher = StudentTeacher::where([
                    'student_id' => $student['id'],
                    'teacher_id' => $class_schedule->teacher_id
                ])->get();
                if (count($student_teacher) == 0) {
                    parent::createModelObject("App\Models\StudentTeacher");
                    $student_teacher_info["student_id"] = $student['id'];
                    $student_teacher_info["teacher_id"] = $class_schedule->teacher_id;
                    parent::store($student_teacher_info);
                }
            }
        }
    }

    public function show($id)
    {
        return parent::show($id);
    }

    public function dragUpdate(Request $request, $id)
    {
        $drag_info = array();
        $drag_info['start_date'] = $request['start_date'];
        $drag_info['end_date'] = $request['end_date'];
        return parent::update($drag_info, $id);
    }

    public function destroy($id)
    {
        return parent::destroy($id);
    }
}
