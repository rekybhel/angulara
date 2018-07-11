<?php

namespace App\Http\Controllers;

use App\Property;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Hash;
use Auth;
use Redirect;
use Session;
use Validator;
use Illuminate\Support\Facades\Input;
class AnpropertyController extends Controller
{
	public function __construct(Property $property)
	{
		$this->property = $property;
	}
	
	public function store(Request $request){
	  return $request->all();
    }
  
}



