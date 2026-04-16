1. DOM Selector
- Point
DOM Selector digunakan untuk mengambil atau memilih elemen HTML agar bisa dimanipulasi dengan JavaScript.

- Reason
JavaScript tidak bisa langsung mengubah HTML tanpa “mengetahui” elemen mana yang ingin diubah.
Karena itu, kita perlu selector sebagai jembatan antara HTML → JavaScript.

- Example
<input id="nama" type="text">
<p id="output"></p>
const input = document.getElementById("nama");
const output = document.querySelector("#output");

Penjelasan:
getElementById() → ambil elemen berdasarkan id
querySelector() → lebih fleksibel (pakai CSS selector)
Point (Reinforce)
Tanpa DOM Selector, kita tidak bisa melakukan manipulasi apa pun pada elemen HTML.

2. Event Listener (Callback Function)
- Point
Event Listener digunakan untuk menangkap interaksi user seperti klik, submit, ketik, dll.

- Reason
Website bersifat interaktif. Kita butuh cara agar sistem bisa merespons aksi user secara real-time.
Event Listener bekerja dengan:
Event (kejadian) → misalnya click
Callback → fungsi yang dijalankan saat event terjadi

- Example
<button id="btn">Klik</button>
<p id="output"></p>

const button = document.getElementById("btn");

button.addEventListener("click", function() {
    console.log("Tombol diklik!");
});

Point (Reinforce)
Event Listener adalah inti interaktivitas—tanpanya, website hanya statis.

3. Manipulasi Data (Value → DOM)
- Point
Manipulasi data berarti mengambil value dari input lalu mengubah tampilan HTML berdasarkan value tersebut.

- Reason
Data dari user (input) harus diproses agar:
bisa ditampilkan
bisa divalidasi
bisa diubah menjadi informasi yang berguna
Ini sering disebut data-driven UI (UI berdasarkan data).

- Example
<input id="nama">
<button id="btn">Submit</button>
<p id="output"></p>

const input = document.getElementById("nama");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", function() {
    let nilai = input.value;

  if (nilai === "") {
        output.textContent = "Input kosong!";
    } else {
        output.textContent = "Halo " + nilai;
    }
});

Penjelasan alur:
User isi input
Klik tombol
Event listener jalan
Ambil value
Ubah isi elemen (textContent)

- Point (Reinforce)
Manipulasi data adalah inti dari aplikasi web modern—menghubungkan input user dengan tampilan.

4. Manipulasi Elemen (Style & Struktur)
- Point
JavaScript bisa mengubah isi, style, dan struktur HTML secara dinamis.

- Reason
Agar tampilan bisa:
berubah sesuai kondisi
lebih interaktif
lebih responsif terhadap data

- Example
 output.textContent = "Hello";
output.innerHTML = "<b>Hello</b>";
output.style.color = "blue";

Perbedaan:
textContent → hanya teks
innerHTML → bisa HTML
style → ubah CSS langsung

- Point (Reinforce)
Manipulasi elemen membuat halaman web menjadi dinamis dan tidak kaku.

[Kesimpulan Besar (Big Picture)]

- Point
DOM + Event + Data = Fondasi utama JavaScript di frontend

- Reason
Semua aplikasi web bekerja dengan pola:
Ambil elemen (DOM)
Tunggu aksi user (Event)
Proses data (Logic)
Update tampilan (DOM Manipulation)

- Example Alur Lengkap

button.addEventListener("click", function() {
    let data = input.value;
    output.textContent = data;
});

- Point (Final Reinforce)
Jika kamu sudah paham 3 hal ini:
DOM Selector
Event Listener
Manipulasi Data
