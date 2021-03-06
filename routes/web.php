<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get("/getList",[TodoController::class,"get"]);

Route::post("/postList",[TodoController::class,"post"]);

Route::post("/deletePost",[TodoController::class,"delete"]);

Route::post("/checkPost",[TodoController::class,"update"]);
