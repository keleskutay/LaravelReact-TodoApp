<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function add(Request $request){
        return response()->json([
           $request->weq,
        ]);
    }
}
