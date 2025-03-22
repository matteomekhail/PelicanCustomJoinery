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

// Add Privacy Policy and Terms routes
Route::get('/privacy-policy', function () {
    return Inertia::render('Policies/PrivacyPolicy');
});

Route::get('/terms', function () {
    return Inertia::render('Policies/Terms');
});

// Add specific service routes
Route::get('/services/furniture', function () {
    return Inertia::render('Services/Furniture');
});

Route::get('/services/kitchens', function () {
    return Inertia::render('Services/Kitchens');
});

Route::get('/services/joinery', function () {
    return Inertia::render('Services/Joinery');
});

Route::get('/services/restoration', function () {
    return Inertia::render('Services/Restoration');
});

Route::get('/services/commercial', function () {
    return Inertia::render('Services/Commercial');
});

require __DIR__.'/auth.php';
