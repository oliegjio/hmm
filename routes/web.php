<?php

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

// Auth::routes();

Route::group(['prefix' => 'api'], function() {
    // Route::resource(
    //     'authenticate',
    //     'AuthenticateController',
    //     ['only' => 'index']
    // );
    // Route::post('authenticate', 'AuthenticateController@authenticate');

    Route::post('/signup', 'UserController@signup');
    Route::post('/signin', 'UserController@signin');
});

// REMOVE IN FUTURE
// Route::get('{any}', 'HomeController@index')
//     ->where('any', '.*');

Route::get('/', 'HomeController@index');
Route::get('/home', 'HomeController@index');

Route::get('/feed', 'UserPost@index');
Route::get('/feed/{id}/edit', 'UserPost@edit');
Route::delete('feed/{id}', 'UserPost@destroy');
