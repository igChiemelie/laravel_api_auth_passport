<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'name',
        'weight',
        'size/value',
        'location/destination',
        'door_to_door',
        'park_to_door',
        'views',
        'user_id',
    ];

    // public function user(){
    //     return $this->belongsTo(User::class);
    // }
}
