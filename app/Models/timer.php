<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class timer extends Model
{
    use HasFactory;
    protected $table="timer";
    protected $fillable=['day','hour','minute','second'];
}
