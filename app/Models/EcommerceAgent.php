<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EcommerceAgent extends Model
{
    use HasFactory;

    protected $table = 'ecomm_agent_details';
    
    protected $fillable = [
        'companyName',
        'companyAddress',
        'companyRcNumber',
        'companyMobileNum',
        'companyLogo',
        'user_id'
    ];

    // public function user(){
    //     return $this->belongsTo(User::class);
    // }
}
