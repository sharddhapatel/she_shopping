<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class rejester extends Model
{
    use HasFactory;
    use Notifiable;
    protected $table= "registration";
    protected $fillable=['id','name','email','password','mobileno','stat','city','type','remember_token'];
}
