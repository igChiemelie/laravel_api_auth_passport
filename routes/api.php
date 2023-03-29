<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\userController;
use App\Http\Controllers\API\ForgotController;
use App\Http\Controllers\API\AuthSocialController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::controller(userController::class)->group(function(){
    Route::post('/register', 'store');
    Route::post('/login', 'login');
});


// Below mention routes are available only for the authenticated users.
Route::middleware('auth:api')->group(function () {
    // Get user info
    Route::get('/auth-user', [userController::class , 'index']);

    // Logout user from application
    Route::post('/logout', [userController::class , 'logout']);
});

Route::controller(ForgotController::class)->group(function(){
    Route::post('/forgot', 'forgotPassword');
    Route::post('/reset', 'reset');
});


// //GOOGLE LOGIN

// php artisan route:cache
Route::post('login/{provider}', [App\Http\Controllers\API\AuthSocialController::class, 'redirectToGoogle']);
Route::get('login/{provider}/callback', [App\Http\Controllers\API\AuthSocialController::class, 'handleGoogleCallback'])->where('provider', '.*');

// Route::get('login/google', [App\Http\Controllers\API\AuthSocialController::class, 'redirectToGoogle']);
// Route::get('login/google/callback', [App\Http\Controllers\API\AuthSocialController::class, 'handleGoogleCallback']);

// Facebook login
Route::get('login/facebook', [App\Http\Controllers\API\AuthSocialController::class, 'redirectToFacebook'])->name('login.facebook');
Route::get('login/facebook/callback', [App\Http\Controllers\API\AuthSocialController::class, 'handleFacebookCallback']);

// Github login
Route::get('login/github', [App\Http\Controllers\API\AuthSocialController::class, 'redirectToGithub'])->name('login.github');
Route::get('login/github/callback', [App\Http\Controllers\API\AuthSocialController::class, 'handleGithubCallback']);


