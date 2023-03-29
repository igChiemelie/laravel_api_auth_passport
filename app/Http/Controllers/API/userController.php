<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserStore;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Carbon;
use Laravel\Passport\HasApiTokens;
use Illuminate\Support\Facades\Hash;
use App\Models\User;



class userController extends Controller
{

    public function index()
    {
        $user = Auth::guard('api')->user();
        return response()->json([
            'message' => 'auth user',
            'data' => $user
        ]);
    }

    public function store(UserStore $request)
    {

        $request->validated();

        $user = User::create([
            'name' => $request['name'],
            'email' =>  $request['email'],
            'password' => Hash::make($request['password']),
            'psd' => '#'.$request['password'].'^%',
            'phone' => $request['phone'],
            'gender' =>  $request['gender']
            // ,
            // 'userType' =>  $request['userType'],
        ]);

        if ($user) {
            return response()->json([
                'message' => 'Registration Successful.',
                'user' => $user,
            ],201);
        }else {
            return response()->json([
                'message' => 'Something went wrong.',
            ],401);
        }
    }

    public function login(LoginRequest $request)
    {
        $request->validated();

        $credentials = request(['email','password']);
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'status' => 401,
                'message' => 'Unathorized.',
            ],401);
        }

        $user  = $request->user();
        $tokenResut1 = $user->createToken('myApp');

        $token = $tokenResut1->token;
        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeek(1);
        }
        return response()->json([
            'access_token' => $tokenResut1->accessToken,
            'token_type' =>  'Bearer',
            'data' => Auth::user(),
            'expires_at' => Carbon::parse(
                $tokenResut1->token->expires_at
            )->toDateTimeString()
        ],200);
    }



    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();
        return response()->json([
            'message' => 'Succesfully logged out',

        ]);
    }


    public function usersTest(Request $request)
    {
        $request = User::all();
        return response()->json($request);
    }

    public function update(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        // User::update([
        //     'name' => $request->name,

        // ]);
        return response()->json('User updated Successfully');

        // dd($request->name);
        // dd($request->id);
    }


}
