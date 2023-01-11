<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ClassScheduleAdvanceResource extends JsonResource
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
            "id" => $this->id,
            "topic" => $this->topic,
            "duration" => $this->duration,
            "description" => $this->description,
            "zoom_link" => $this->zoom_link,
            "selected_day" => $this->selected_day,
            'subject' => SubjectResource::make($this->subject),
            'teacher' => TeacherResource::make($this->teacher),
            "start_date" => $this->start_date,
            "end_date" => $this->end_date
        ];
    }
}
