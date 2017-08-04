<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{

    public function signup(Request $request) {
        $this->validate($request, [
            'password' => 'required',
            'email' => 'required',
            'name' => 'required'
        ]);

        $user = new User([
            'name' => $request->input('name'),
            'password' => bcrypt($request->input('password')),
            'email' => $request->input('email')
        ]);

        $user->save();

        return response()->json([
            'message' => 'User successfully created'
        ], 201);
    }

    public function signin(Request $request) {
        $this->validate($request, [
            'password' => 'required',
            'email' => 'required',
            'name' => 'required'
        ]);

        $credentials = $request->only('email', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'error' => 'Invalid Credentials' 
                ], 401); 
            }
        } catch (JWTException $exception) {
            return response()->json([
                'error' => 'Could not craete token' 
            ], 500);
        }

        return response()->json([
            'token' => $token
        ], 200);
    }
}
