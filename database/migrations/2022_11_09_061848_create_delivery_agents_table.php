<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeliveryAgentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delivery_agents', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('other_name')->nullable();
            $table->string('address')->nullable();
            $table->string('nin_number');
            // $table->string('provider')->nullable();
            // $table->string('provider_id')->nullable();
            $table->string('avatar')->nullable();
            $table->enum('gender', ['M', 'F']);
            $table->text('states_to_cover');
            $table->text('cities');
            $table->integer('views')->nullable()->default(1);
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('delivery_agents');
    }
}
