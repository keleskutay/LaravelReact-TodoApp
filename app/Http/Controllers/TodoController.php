<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\todo;

class TodoController extends Controller
{
    public function get(Request $request){
        return(todo::all());
    }

    public function post(Request $request){
       $todo =new todo;
       $todo->todoText = $request->todoValue;
       $todo->checked = $request->checked;
       $saved = $todo->save();

        return(response()->json([$todo]));
    }

    public function delete(Request $request){
        $todo = $request->id;
        $find = todo::find($todo);
        $find->delete();


    }

}
