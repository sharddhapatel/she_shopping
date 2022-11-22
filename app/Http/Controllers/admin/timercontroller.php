<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\timer;
use Illuminate\Http\Request;

class timercontroller extends Controller
{
    public function showtimer()
    {
        $data = DB::table('timer')->get();
        return view('admin.showtimer')->with(['data' => $data]);
    }
    public function addtimer()
    {
        return view('admin.addtimer');
    }
    public function inserttimer(Request $request)
    {
        $timer = new timer;
        $timer->day = $request->get('day');
        $timer->hour = $request->get('hour');
        $timer->minute = $request->get('min');
        $timer->second = $request->get('second');

        $timer->save();

        return redirect()->back()->with('message', 'timer added successfully');
    }
}
