<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $products = $request
            ->user()
            ->products()
            ->search(request(['search', 'status']))
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render("Home/Home", [
            "products" =>  $products,
        ]);
    }

    public function store(Request $request)
    {

        $fields = $request->validate([
            "name" => "required|min:3",
            "category" => "required",
            "price" => "required|numeric",
            "stock" => "required|numeric",
            "status" => "required",
        ]);

        $request->user()->products()->create($fields);

        return redirect()->route('home');
    }

    public function update(Request $request, Product $product)
    {

        $fields = $request->validate([
            "name" => "required|min:3",
            "category" => "required",
            "price" => "required|numeric",
            "stock" => "required|numeric",
            "status" => "required",
        ]);

        $product->fill($fields);

        $product->save();

        // $product->update($fields);

        return redirect()->route('home');
    }

    public function destroy(Product $product)
    {

        $product->delete();

        return redirect()->route('home');
    }
}
