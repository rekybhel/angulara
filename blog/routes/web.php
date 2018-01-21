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

Route::get ( '/', function () {
    return view ( 'customauth' );
} );


Route::post ( '/mylogin', 'MainController@mylogin' );
Route::post ( '/registers', 'MainController@registers');
Route::get ( '/logouts', 'MainController@logouts' );
Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();



// Authentication routes...
/* Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout'); */
 
// Registration routes...
/* Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister'); */