<?php

namespace App\Http\Controllers;

use App\Http\Resources\TeacherAdvanceResource;
use App\Http\Resources\TeacherResource;
use App\Models\Teacher;
use Illuminate\Http\Request;

class TeacherController extends BaseController
{
    public $Model;
    private $teacherAdvanceResource;
    
    public function __construct()
    {
        $this->teacherAdvanceResource = new TeacherAdvanceResource(array());
        $this->Model = new Teacher();
    }

    public function getData($allowPagination)
    {
        $subjects = parent::index($allowPagination);

        return $this->teacherAdvanceResource->collection($subjects);
    }

    public function saveData(Request $request)
    {
        // Insert into user table
        parent::createModelObject("App\Models\User");
        $user = parent::store($request->user_info);

        // Insert into teacher table
        parent::createModelObject("App\Models\Teacher");
        $teacher_info['phone'] = $request->teacher_info['phone'];
        $teacher_info['dob'] = $request->teacher_info['dob'];
        $teacher_info['full_name'] = $request->teacher_info['full_name'];
        $teacher_info['country'] = $request->teacher_info['country'];
        $teacher_info['user_id'] = $user->id;
        $teacher = parent::store($teacher_info);

        $this->successResponse($teacher, 'save successfully');
    }

    public function show($id)
    {
        return parent::show($id);
    }

    public function destroy($id)
    {
        return parent::destroy($id);
    }
}
