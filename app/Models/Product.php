<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    use HasUlids;
    /** @use HasFactory<\Database\Factories\ProductsFactory> */
    // use HasFactory;

    protected $fillable = [
        'name',
        'category',
        'price',
        'stock',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function scopeSearch($query, array $filters)
    {
        if ($filters['search'] ?? false) {
            $query->whereAny(['name', 'category'], 'like', '%' . request('search') . '%');
        }

        if ($filters['status'] ?? false) {
            $query->where('status', request('status'));
        }
    }
}
