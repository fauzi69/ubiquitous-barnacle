const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Gunakan body-parser untuk mengambil data dari permintaan POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Array untuk menyimpan data siswa
const dataSiswa = [];

// Endpoint untuk menambahkan data siswa
app.post('/tambah-siswa', (req, res) => {
  const { nama, usia } = req.body;
  dataSiswa.push({ nama, usia });
  res.send('Data siswa berhasil ditambahkan!');
});

// Endpoint untuk menghitung jumlah data siswa
app.get('/hitung-siswa', (req, res) => {
  const jumlahSiswa = dataSiswa.length;
  res.json({ jumlahSiswa });
});

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
