<?php

namespace App\Http\Resources\student;

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
        // dd($this['subject']);
        return [
            "student_info" => $this['student'],
            "subject_info" => $this['subject'],
            "teacher_info" => $this['teacher'],
            "parent_info" => $this['guardian'],
            "class_schedule_info" => $this['class_schedule'],
        ];
    }

    // return [
    //     "student_info" => [
    //         'full_name'=>$this->full_name,
    //         'email'=>$this->user->email,
    //         'phone'=>$this->phone,
    //     ],
    //     "subject_info" => SubjectResource::collection($this->subject),
    //     "teacher_info" => TeacherAdvanceResource::collection($this->teacher),
    //     "parent_info" => GuardianResource::collection($this->guardian),
    //     "class_schedule_info" => ClassScheduleAdvanceResource::collection($this->class_schedule),
    // ];
}
