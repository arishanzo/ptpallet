<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
     public function send(Request $request)
    {
        try {
            $validated = $request->validate([
                'name'    => 'required|string|max:255',
                'email'   => 'required|email|max:255',
                'message' => 'required|string|max:5000',
            ]);

            // Cegah email header injection
            if (preg_match('/[\r\n]/', $validated['email'])) {
                return response()->json(['error' => 'Invalid email'], 400);
            }

            // Log untuk debugging
            Log::info('Attempting to send email', $validated);

            $emailContent = "New Contact Message\n\n";
            $emailContent .= "Name: " . $validated['name'] . "\n";
            $emailContent .= "Email: " . $validated['email'] . "\n";
            $emailContent .= "Message: " . $validated['message'] . "\n";

            Mail::raw($emailContent, function ($message) use ($validated) {
                $message->to('company@indonesiapallet.co.id')
                        ->subject('New Contact Message dari' . $validated['name'])
                        ->replyTo($validated['email'], $validated['name']);
            });

                        Log::info('Email sent successfully');
            return response()->json(['success' => true, 'message' => 'Email sent successfully']);
        } catch (\Exception $e) {
            Log::error('Email failed: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to send email: ' . $e->getMessage()], 500);
        }
    }
}
