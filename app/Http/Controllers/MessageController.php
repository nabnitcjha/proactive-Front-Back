<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Events\MessageSent;
use App\Http\Resources\MessageResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MessageController extends BaseController
{
    private $messageResource;

    public function __construct()
    {
        $this->messageResource = new MessageResource(array());
    }

    public function fetchMessages($friend_id,$my_id)
    {
        $messageInfo = Message::
        with(['friend' => function ($query) {
            $query->select('id',DB::raw("CONCAT(first_name, ' ', last_name) as full_name"));
        }])->
        with(['me' => function ($query) {
            $query->select('id',DB::raw("CONCAT(first_name, ' ', last_name) as full_name"));
        }])
        ->where([
            ['my_id',$my_id],
            ['friend_id',$friend_id]
        ])->get(['id','message','my_id','friend_id']);

        // return $messageInfo;

       return    $this->successResponse(
        $this->messageResource->collection($messageInfo),
        'fetch all record successfully'
    );
    }

    public function sendMessage(Request $request)
    {
        // Insert into message table
        parent::createModelObject("App\Models\Message");
        parent::store($request->message_info);

        $messageInfo = Message::
        with(['friend' => function ($query) {
            $query->select(DB::raw("CONCAT(first_name, ' ', last_name) as full_name"));
        }])->
        with(['me' => function ($query) {
            $query->select(DB::raw("CONCAT(first_name, ' ', last_name) as full_name"));
        }])
        ->where([
            ['my_id',$request->message_info['my_id']],
            ['friend_id',$request->message_info['friend_id']]
        ])->get();

        broadcast(new MessageSent($messageInfo));
    }
}
