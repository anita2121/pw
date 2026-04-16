Point :
DOM Selector digunakan untuk mengambil dan mengakses elemen HTML menggunakan JavaScript agar bisa dimanipulasi.

Reason :
JavaScript tidak bisa langsung mengubah HTML kalau tidak “menemukan” elemennya dulu.
Karena itu, DOM Selector berfungsi sebagai jembatan antara HTML dan JavaScript.

Tanpa DOM Selector:
JS tidak tahu elemen mana yang mau diubah

Example :
<input type="text" id="nama">
<p id="hasil"></p>
<button onclick="proses()">Klik</button>
function proses() {
    let input = document.getElementById("nama"); // ambil elemen
    let isi = input.value; // ambil nilai
    document.getElementById("hasil").innerHTML = isi; // tampilkan
}
Point (Penegasan) :
Jadi, DOM Selector = alat untuk mengambil elemen HTML agar bisa diproses oleh JavaScript.

Tambahan penting :
Jenis selector yang sering dipakai:
getElementById() → 1 elemen (paling sering)
querySelector() → fleksibel (pakai CSS)
querySelectorAll() → banyak elemen
2. Event Listener (onclick, onsubmit, dll)
Point :

Event Listener digunakan untuk menjalankan kode JavaScript saat terjadi aksi dari user.

Reason :
Web itu interaktif. User:
klik tombol
isi form
kirim data

Tanpa event:
halaman jadi statis (tidak bisa merespon)
Example :
<button id="btn">Klik Saya</button>
<p id="teks"></p>
document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("teks").innerHTML = "Tombol ditekan!";
});
  Contoh onsubmit:
<form id="formku">
    <input type="text">
    <button type="submit">Kirim</button>
</form>
document.getElementById("formku").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form berhasil dikirim");
});
Point (Penegasan)
Event Listener = pemicu aksi yang membuat halaman web menjadi hidup dan responsif.
Tambahan penting:
Jenis event umum:
click → klik
submit → kirim form
input → saat mengetik
change → saat nilai berubah

3. Manipulasi Data (Mengubah Elemen Berdasarkan Value)
Point :
Manipulasi data adalah proses mengubah isi atau tampilan elemen HTML berdasarkan input user.

Reason :
Tujuan utama web interaktif adalah:
merespon input user dan menampilkan hasilnya

Contoh :
input nama → tampilkan sapaan
input angka → tampilkan hasil perhitungan
Example
<input type="text" id="nama">
<button onclick="tampil()">Tampilkan</button>
<p id="output"></p>
function tampil() {
    let nama = document.getElementById("nama").value;
    document.getElementById("output").innerHTML = "Halo " + nama;
}
Point (Penegasan)
Manipulasi data = mengubah tampilan web berdasarkan data yang dimasukkan user.
Tambahan penting:
Properti yang sering dipakai:
.value → ambil isi input
.innerHTML → ubah isi HTML
.textContent → lebih aman (tanpa HTML)

4. Integrasi (Semua Digabung)
Point
Ketiga konsep ini bekerja bersama untuk membuat web interaktif.

Reason :
Alur logisnya selalu sama:
Ambil elemen (DOM)
Tunggu aksi (Event)
Proses data
Tampilkan hasil (Manipulasi)

Example :
<input type="number" id="nilai">
<button id="cek">Cek</button>
<p id="hasil"></p>
document.getElementById("cek").addEventListener("click", function() {
    let nilai = document.getElementById("nilai").value;
    if (nilai >= 75) {
        document.getElementById("hasil").innerHTML = "Lulus";
    } else {
        document.getElementById("hasil").innerHTML = "Tidak Lulus";
    }
});
Point (Penegasan) :
Web interaktif = DOM Selector + Event Listener + Manipulasi Data bekerja bersama.
