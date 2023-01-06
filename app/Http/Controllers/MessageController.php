<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Events\MessageSent;

use Illuminate\Http\Request;

class MessageController extends BaseController
{

    public function fetchMessages($friend_id,$my_id)
    {
        $messageInfo = Message::with(['friend','me'])->where([
            ['my_id',$my_id],
            ['friend_id',$friend_id]
        ])->get();

        $this->successResponse($messageInfo, 'fetch record successfully');
    }

    public function sendMessage(Request $request)
    {
        // Insert into message table
        parent::createModelObject("App\Models\Message");
        parent::store($request->message_info);

        $messageInfo = Message::with(['friend','me'])->where([
            ['my_id',$request->message_info['my_id']],
            ['friend_id',$request->message_info['friend_id']]
        ])->get();

        broadcast(new MessageSent($messageInfo));
    }
}
