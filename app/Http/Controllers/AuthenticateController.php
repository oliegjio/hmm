<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuthExceptions\JWTException;
use App\User;

class AuthenticateController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['authenticate']]);
    }

    public function index()
    {
        $users = User::all();
        return $users;
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            // Verify credentials and create token for the user.
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $exception) {
            // Something bad happend.
            return response()->json(['error' => 'could_not_generate_token'], 500);
        }

        // No errors are encountered, we can return JWT token.
        return response()->json(compact('token'));
    }
}
