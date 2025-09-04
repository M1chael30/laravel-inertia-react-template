<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

use function Pest\Laravel\delete;

class ProfileController extends Controller
{
    public function index()
    {

        $user = auth()->user();
        $productTotal = $user->products()->count();

        return Inertia::render(
            'Profile/Profile',
            [
                'productTotal' => $productTotal,
                'user' => $user,
            ]
        );
    }

    public function updateInfo(Request $request)
    {

        $fields = $request->validate([
            'name' => ['required'],
            'email' => [
                'required',
                'email',
                'lowercase',
                'max:255',
                Rule::unique(User::class)->ignore($request->user()->id)
            ],
        ]);

        $request->user()->fill($fields);

        $request->user()->save();

        return redirect()->route('profile');
    }

    public function updatePassword(Request $request)
    {
        $fields = $request->validate([
            'current_password' => 'required|current_password',
            'password' => 'required|min:8|max:255|confirmed',
        ]);

        $request->user()->update([
            'password' => Hash::make($fields['password'])
        ]);

        return redirect()->route('profile');
    }

    public function destroy(Request $request)
    {
        $fields = $request->validate([
            'password' => ['required', 'current_password']
        ]);

        $user = auth()->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('login');
    }
}
