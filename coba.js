const logo = document.querySelector(".logo").cloneNode(true);

document.querySelector(".logo-container").appendChild(logo);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form default

        // Ambil nilai dari input form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validasi input
        if (name && email && message) {
            // Menampilkan pesan sukses
            showMessage('Terima kasih, ' + name + '! Pesan Anda berhasil dikirim.', 'success');

            // Mengarahkan ke halaman tujuan setelah 3 detik
            setTimeout(() => {
                window.location.href = 'https://tugas-pemrograman-web-1-lac.vercel.app/'; // Ganti dengan halaman tujuan yang diinginkan
            }, 3000);
        } else {
            // Menampilkan pesan error jika ada bidang kosong
            showMessage('Mohon lengkapi semua bidang!', 'error');
        }
    });
});

function showMessage(text, type) {
    // Hapus pesan lama jika ada
    const existingMessage = document.querySelector('.message');
    if (existingMessage) existingMessage.remove();

    // Membuat elemen pesan
    const message = document.createElement('div');
    message.className = 'message ' + type;
    message.textContent = text;

    // Menambah pesan ke dalam halaman
    document.body.appendChild(message);

    // Menghapus pesan setelah 3 detik
    setTimeout(() => message.remove(), 3000);
}
