<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\File;

class imagepembayaran extends Controller
{
    public function getAllImages()
    {
        $directory = public_path('img/pembayaran/'); // Folder tempat gambar disimpan
        $files = File::files($directory);

        $images = [];
        foreach ($files as $file) {
            $images[] = [
                'filename' => $file->getFilename(),
                'url' => url('img/pembayaran/' . $file->getFilename()),
            ];
        }

        return response()->json($images);
    }
}
