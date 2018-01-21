<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Hash;
use Auth;
use Redirect;
use Session;
use Validator;
use Illuminate\Support\Facades\Input;
class MainController extends Controller
{
   public function registers(Request $request) {
    
        $user = new User ();
        $user->name = $request->get ( 'name' );
        $user->email = $request->get ( 'email' );
        $user->password = Hash::make ( $request->get ( 'password' ) );
        $user->remember_token = $request->get ( '_token' );
        $user->save ();
        return redirect ( '/home' );
    }



public function mylogin(Request $request) {
	  if ($request->ajax()){

           if (Auth::attempt ( array (
                'name' => $request->get ( 'username' ),
                'password' => $request->get ( 'password' ) 
        ) )) {
            session ( [ 
                    'name' => $request->get ( 'name' ) 
            ] );
			return Auth::user();
           // return Redirect::back ();
        }/*  else {
            Session::flash ( 'message', "Invalid Credentials , Please try again." );
			  return redirect ( '/home' );
          //  return Redirect::back ();
        }  
 */
    }

     
    }


public function logouts() {

        Session::flush ();
        Auth::logout ();
        return Redirect::back ();
    }
}