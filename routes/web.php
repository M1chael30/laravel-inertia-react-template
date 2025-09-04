<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;


// product
Route::middleware('auth')->group(function () {

 //products
 Route::get('/', [ProductController::class, "index"])->name('home');
 Route::resource('product', ProductController::class)->only(['update', 'destroy', 'store']);


 // auth logout
 Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

 // profile
 Route::get('/profile', [ProfileController::class, "index"])->name('profile');
 Route::patch('/profile', [ProfileController::class, "updateInfo"])->name('profile.update.info');
 Route::put('/profile', [ProfileController::class, "updatePassword"])->name('profile.update.password');
 Route::delete('/profile', [ProfileController::class, "destroy"])->name('profile.delete');
});


// auth
Route::middleware('guest')->group(
 function () {
  Route::get('/register', [RegisterController::class, 'create'])->name('register');
  Route::post('/register', [RegisterController::class, 'store']);

  Route::get('/login', [LoginController::class, 'create'])->name('login');
  Route::post('/login', [LoginController::class, 'store']);
 }
);

