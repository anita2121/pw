<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dear Space</title>

<style>
body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #f5f0eb;
    color: #5a4a42;
}

/* HEADER */
.header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.title {
    font-size: 28px;
    font-weight: bold;
}

.menu-btn {
    font-size: 24px;
    cursor: pointer;
}

/* LOGO */
.logo {
    text-align: center;
}

.logo img {
    width: 150px;
    margin-top: 10px;
}

/* DESKRIPSI */
.desc {
    text-align: center;
    padding: 20px;
    font-size: 14px;
}

/* SECTION */
.section {
    padding: 20px;
}

.section h2 {
    text-align: center;
    margin-bottom: 10px;
}

.section ul {
    padding-left: 20px;
}

/* SIDE MENU */
.side-menu {
    position: fixed;
    top: 0;
    right: -250px;
    width: 250px;
    height: 100%;
    background-color: #d2b48c;
    transition: 0.3s;
    padding-top: 60px;
}

.side-menu a {
    display: block;
    padding: 15px;
    text-decoration: none;
    color: black;
}

.side-menu a:hover {
    background-color: #c19a6b;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
}
</style>
</head>

<body>

<!-- HEADER -->
<div class="header">
    <div class="title">Dear Space</div>
    <div class="menu-btn" onclick="openMenu()">☰</div>
</div>

<!-- LOGO -->
<div class="logo">
    <img src="dearspace_logo.png" alt="Logo Dear Space">
</div>

<!-- DESKRIPSI -->
<div class="desc">
    Dear Space adalah jasa dekorasi ruang yang menciptakan suasana nyaman, estetik, dan penuh makna.
</div>

<!-- VISI MISI -->
<div class="section">
    <h2>Visi & Misi</h2>
    <p><b>Visi:</b><br>
    Menjadi jasa dekorasi ruang yang kreatif, inovatif, dan terpercaya dalam menciptakan ruang yang nyaman, estetik, serta memiliki nilai emosional.</p>

    <p><b>Misi:</b></p>
    <ul>
        <li>Memberikan desain yang menarik dan sesuai tren</li>
        <li>Mengutamakan kenyamanan dan kepuasan pelanggan</li>
        <li>Menyediakan konsep dekorasi yang personal</li>
        <li>Menggunakan elemen dekorasi berkualitas</li>
    </ul>
</div>

<!-- LAYANAN -->
<div class="section">
    <h2>Layanan Kami</h2>
    <ul>
        <li>Dekorasi Kamar Tidur</li>
        <li>Dekorasi Ruang Kerja</li>
        <li>Dekorasi Ruang Tamu</li>
        <li>Dekorasi Acara</li>
        <li>Custom Dekorasi</li>
    </ul>
</div>

<!-- KONSEP -->
<div class="section">
    <h2>Konsep Desain</h2>
    <ul>
        <li>Minimalis</li>
        <li>Aesthetic</li>
        <li>Korean Style</li>
        <li>Earth Tone</li>
    </ul>
</div>

<!-- KONTAK -->
<div class="section">
    <h2>Kontak</h2>
    <p>📱 WhatsApp: 08xxxxxxxxxx</p>
    <p>📷 Instagram: @dearspace.id</p>
</div>

<!-- SIDE MENU -->
<div id="menu" class="side-menu">
    <span class="close-btn" onclick="closeMenu()">✖</span>
    <a href="#layanan">Layanan</a>
    <a href="#konsep">Konsep</a>
</div>

<script>
function openMenu() {
    document.getElementById("menu").style.right = "0";
}

function closeMenu() {
    document.getElementById("menu").style.right = "-250px";
}
</script>

</body>
</html>
