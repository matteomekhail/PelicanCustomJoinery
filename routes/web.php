<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/services', function () {
    return Inertia::render('Services');
});

Route::get('/portfolio', function () {
    return Inertia::render('Portfolio');
});

Route::get('/process', function () {
    return Inertia::render('Process');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

// Project-specific routes
Route::get('/projects/yowie-bay', function () {
    return Inertia::render('Projects/YowieBay');
});

Route::get('/projects/sylvania', function () {
    return Inertia::render('Projects/Sylvania');
});

require __DIR__.'/auth.php';
