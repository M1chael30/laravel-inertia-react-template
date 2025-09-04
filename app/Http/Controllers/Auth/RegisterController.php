<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    public function store(Request $request)
    {

        $credentials = $request->validate([
            'name' => 'required|max:255|min:3',
            'email' => 'required|email|unique:users|lowercase|max:255',
            'password' => 'required|confirmed|min:8',
        ]);

        $user = User::create($credentials);

        Auth::login($user);

        return redirect()->route('home');
    }
}
