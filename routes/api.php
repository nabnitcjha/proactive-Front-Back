<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::group([

    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

// student routes
Route::group([

    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers'

], function ($router) {

    Route::post('addStudent', 'StudentController@saveData');
    Route::get('getStudents/{allowPagination}', 'StudentController@getData');
    // student-detail page route
    Route::get('student/{id}/profileOverview', 'StudentController@profileOverview');
    Route::get('student/{student_id}/teacher/{teacher_id}/class', 'StudentController@getTeacherSlot');
    Route::get('student/{id}/sortedClass', 'StudentController@sortedClass');
    Route::get('student/{id}/class', 'StudentController@allClasses');
    Route::put('student/{id}/changePassword', 'StudentController@changePassword');
});

// teacher routes
Route::group([

    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers'

], function ($router) {
    Route::get('teacher/{id}/profileOverview', 'TeacherController@profileOverview');
    Route::get('getTeachers/{allowPagination}', 'TeacherController@getData');
    Route::get('teacher/{id}/sortedClass', 'TeacherController@sortedClass');
    Route::get('teacher/{id}/class', 'TeacherController@allClasses');
    Route::post('addTeacher', 'TeacherController@saveData');
    Route::get('getTeachers/{allowPagination}', 'TeacherController@getData');
});

// subject routes
Route::group([

    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers'

], function ($router) {

    Route::post('addSubject', 'SubjectController@saveData');
    Route::get('getSubjects/{allowPagination}', 'SubjectController@getData');
});

// class-schedule routes
Route::group([

    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers'

], function ($router) {

    Route::post('addTimetable', 'ClassScheduleController@saveData');
    Route::get('getTimetables/{allowPagination}', 'ClassScheduleController@getData');
    Route::post('timetable/{id}/drag', 'ClassScheduleController@dragUpdate');
    Route::post('timetable/{id}/resourceFile', 'ClassScheduleController@saveResourceFile');
});

// chat routes
Route::group([

    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers'

], function ($router) {
    Route::get('messages/{friend_id}/{my_id}', [App\Http\Controllers\MessageController::class, 'fetchMessages']);
    Route::post('messages', [App\Http\Controllers\MessageController::class, 'sendMessage']);
});
