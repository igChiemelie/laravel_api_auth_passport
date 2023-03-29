<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Carbon;
use Laravel\Passport\HasApiTokens;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;  // this is for make a Random token in that time User wanna send special Token to his Gmail
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;


class AuthSocialController extends Controller
{
    // 'google' = 'google';
    CONST FACEBOOK_TYPE = 'facebook';

    // Google login
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    // // Google callback
    public function handleGoogleCallback()
    {
        $user = Socialite::driver('google')->user();
        // $user = Socialite::driver($provider)->user();

        // $this->_registerOrLoginUser($user);

        // Return home after login
        // return redirect()->route('home');

        // return response()->json([
        //     'message' => 'success'
        // ],200);
        return response()->json($user);
    }

    // Facebook login
    public function redirectToFacebook()
    {
        return Socialite::driver('facebook')->redirect();
    }

    // Facebook callback
    public function handleFacebookCallback()
    {
        $user = Socialite::driver('facebook')->user();

        $this->_registerOrLoginUser($user);

        // Return home after login
        // return redirect()->route('home');

        return response()->json([
            'message' => 'success'
        ],200);
    }

    protected function _registerOrLoginUser($data)
    {
        $user = User::where('email', '=', $data->email)->first();
        if (!$user) {
            $user = new User();
            $user->name = $data->name;
            $user->email = $data->email;
            $user->provider_id = $data->id;
            $user->avatar = $data->avatar;
            $user->oauth_id = $data->id;
            $user->passowrd = $data->$user->id;
            $user->save();

   
        }

        Auth::login($user);
    }
}
