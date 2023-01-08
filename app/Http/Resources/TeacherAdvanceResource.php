<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TeacherAdvanceResource extends JsonResource
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
            "name" => $this->full_name,
            "phone" => $this->phone,
            "email" => $this->user->email,
            'student' => StudentResource::collection($this->student),
            'subject' => SubjectResource::collection($this->subject),
        ];
    }
}
