<?php

namespace App\Http\Controllers;
use App\Models\Message;
use App\Events\MessageSent;

use Illuminate\Http\Request;

class ChatsController extends Controller
{
    public function index()
    {
        return ['status' => 'Message Sent!'];
    }

    public function fetchMessages()
    {
        return Message::with('user')->get();
    }

    public function sendMessage(Request $request)
    {
        $user = auth()->user();
        $message = $user->messages()->create([
            'message' => $request->message,
            'user_id' => 1
        ]);
        broadcast(new MessageSent($user, $message));
        // event(new MessageSent($user, $message));

        return ['status' => 'Message Sent!'];
    }
}
