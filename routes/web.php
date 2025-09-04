<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//render home page
Route::get('/', function() {
 return Inertia::render('Home');
});


