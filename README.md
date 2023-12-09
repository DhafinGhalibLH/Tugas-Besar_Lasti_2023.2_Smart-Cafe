<h1 align="center">
  <br>
    Tugas Besar Layanan Sistem dan Teknologi Informasi STI 21
  <br>
</h1>

<h2 align="center">
  <br>
    Website Smart Cafe
  <br>
</h2>

Pengerjaan tugas besar mata kuliah Layanan Sistem dan Teknologi Informasi program studi STI tahun ajaran 2023/2024
Anggota kelompok 1 K3:
1. Khairunnisa Hurun 'Iin       18221004
2. Anindita Putri Paramarta     18221019
3. Dhafin Ghalib Luqman Hakim   18221023
4. Vasya Izza Parsa             18221030
5. Anjani Ibrahim               18221031

## Penjelasan mengenai website
Proyek dirancang untuk membantu cafe untuk memberikan pelayanan terbaik melalui website. Dengan adanya proyek pengembangan layanan melalui website ini, diharapkan cafe dapat memenuhi kebutuhan proses bisnisnya dengan lebih smart. Proses bisnis tersebut yaitu : 
1. Pengadaan bahan baku
2. Mengelola karyawan
3. Operasional harian
4. Pelayanan pelanggan
5. Manajemen Keuangan

Pada implementasi, proyek berfokus pada proses bisnis operasional harian yang memungkinkan pengguna untuk melihat jam operasional cafe, melihat menu, dan melakukan reservasi melalui website.


## Cara menjalankan website
Clone repositori ini dan masuk ke direktori repositori lokal yang telah dibuat
```
    git clone https://github.com/DhafinGhalibLH/Tugas-Besar_Lasti_2023.2_Smart-Cafe.git
```
Kemudian buka direktori di terminal, dan jalankan perintah berikut untuk menginstall semua modul yang dibutuhkan
```
    npm install i
```
Setelah proses instalasi selesai, jalankan perintah berikut untuk memulai server
```
    npm run dev
```
lalu buka [http://localhost:3000/](http://localhost:3000/) di browser kalian untuk mengakses website


## Cara menggunakan website
Website terdiri atas beberapa page dengan penjelasan sebagai berikut :
1. Homepage -> Page ini berisikan jam operasional dari cafe beserta informasi umumnya, seperti penjelasan dan lokasi dari cafe, beserta menu-menu populernya. User dapat melihat menu secara lengkap dan melakukan reservasi dengan button pada homepage yang mengarahkan user ke page menu maupun reservation.
2. Login/Sign Up -> Untuk dapat melakukan reservasi, user perlu melakukan registrasi terlebih dahulu. Pada page sign up, user diminta untuk menginput email, password dan melakukan konfirmasi password, user juga dapat melakukan registraasi dengan menggunakan akun Google. Begitu juga dengan page login, namun pada page login, user tidak perlu melakukan konfirmasi password.
3. Menu -> Seluruh menu akan ditampilkan pada page ini dan akan dibagi menjadi tiga kategori, yaitu food, drink, dan snack.
4. Reservation -> User dapat memesan meja terlebih dahulu sebelum datang ke cafe dengan melakukan reservasi pada page ini, user akan diminta untuk menginput nama, tanggal, dan jumlah orang yang akan mendatangi cafe. 


## Link Deployment
[Klik disini](https://tugas-besar-lasti-2023-2-smart-cafe.vercel.app/)
