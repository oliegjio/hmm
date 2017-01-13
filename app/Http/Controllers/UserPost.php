<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserPost extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Return all post for authenticated user
     * 
     * @return \Illuminate\Http\Response 
     */
    public function index()
    {
        return view('posts.posts-index');
    }

    /**
     * Return edit view for this post
     *
     * @param Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $id = $request->id;
        return view('posts.posts-edit', compact('id'));
    }

    /**
     * Destroy post with given id
     * 
     * @param  \Illuminate\Http\Response $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        // ...
    }
}
