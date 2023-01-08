<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "message" => $this->message,
            "message_sender_info" => $this->friend,
            "message_reciver_info" => $this->me
        ];
    }
}
