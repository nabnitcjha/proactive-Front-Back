<?php

namespace App\Http\Resources\student;

use App\Http\Resources\ClassScheduleAdvanceResource;
use App\Http\Resources\GuardianResource;
use App\Http\Resources\SubjectResource;
use App\Http\Resources\TeacherAdvanceResource;
use Illuminate\Http\Resources\Json\JsonResource;

class profileOverview extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "student_info" => [
                'full_name'=>$this->full_name,
                'email'=>$this->user->email,
                'phone'=>$this->phone,
            ],
            "subject_info" => SubjectResource::collection($this->subject),
            "teacher_info" => TeacherAdvanceResource::collection($this->teacher),
            "parent_info" => GuardianResource::collection($this->guardian),
            "class_according_student" => ClassScheduleAdvanceResource::collection($this->classSchedule),
        ];
    }
}
