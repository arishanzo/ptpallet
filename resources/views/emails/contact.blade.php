<p><strong>Nama:</strong> {{ $data['name'] }}</p>
<p><strong>Email:</strong> {{ $data['email'] }}</p>
<p><strong>Pesan:</strong></p>
<p>{!! nl2br(e($data['message'])) !!}</p>
