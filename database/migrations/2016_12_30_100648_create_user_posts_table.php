<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_posts', function(Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->longText('content');
            $table->integer('user_id')->unsigned()->default(0);
            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');
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
        Schema::dropIfExists('user_posts');
    }
}
