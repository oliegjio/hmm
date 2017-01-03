<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserPost extends Model
{
    /**
     * Return user for this task
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo 
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
