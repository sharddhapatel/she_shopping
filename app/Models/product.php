<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;
    protected $table= "tblproduct";
    protected $fillable=['cid','tblproductitle','tblproductprice','tblproductcode','color','discripation','tblproductimage'];
}
