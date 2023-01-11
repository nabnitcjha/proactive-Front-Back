<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function subject()
    {
        return $this->belongsToMany(Subject::class, 'teacher_subjects', 'teacher_id', 'subject_id');
    }

    public function student()
    {
        return $this->belongsToMany(Student::class, 'student_teachers','teacher_id', 'student_id');
    }

    public function classSchedule()
    {
        return $this->hasMany(ClassSchedule::class);
    }
}
