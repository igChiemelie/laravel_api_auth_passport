<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryAgent extends Model
{
    use HasFactory;

    protected $table = 'delivery_agents';

    protected $fillable = [
        'firstname',
        'lastname',
        'other_name',
        'address',
        'nin_number',
        'avatar',
        'gender',
        'states_to_cover',
        'cities',
        'views',
        'user_id',
    ];

    // public function user(){
    //     return $this->belongsTo(User::class);
    // }
}
