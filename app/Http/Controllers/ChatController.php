<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
 use Illuminate\Support\Facades\Log;

class ChatController extends Controller
{

public function generate(Request $request)
{
        set_time_limit(0);

  $request->validate([
    'prompt' => 'required|string|max:2000',
]);

$prompt = $request->input('prompt');

try {
    $response = Http::withOptions(['stream' => true])->post('http://localhost:11434/api/generate', [
        'model' => 'mistral',
        'prompt' => $prompt,
        'stream' => true,
    ]);
} catch (\Exception $e) {
    return response()->json(['error' => 'Gagal menghubungi API internal'], 500);
}

return response()->stream(function () use ($response) {
    $body = $response->getBody();
    $buffer = '';

    while (!$body->eof()) {
        $chunk = $body->read(512);
        $buffer .= $chunk;

        while (($pos = strpos($buffer, "\n")) !== false) {
            $line = substr($buffer, 0, $pos);
            $buffer = substr($buffer, $pos + 1);

            if (trim($line) === '') continue;

            $json = json_decode($line, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                // Jika bukan JSON valid, skip atau logging (tergantung kebutuhan)
                continue;
            }

            if (isset($json['response'])) {
                echo json_encode(['response' => $json['response']]) . "\n";
                ob_flush();
                flush();
            }
        }
    }
}, 200, [
    'Content-Type' => 'application/json',
    'Cache-Control' => 'no-cache',
    'Connection' => 'keep-alive',
]);
}

}
