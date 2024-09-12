//fungsi untuk menghitung luas segitiga
function validateLuas() {
    let panjangAlas = document.getElementById('panjang-alas').value;
    let tinggi = document.getElementById('tinggi').value;

    //memberi notifikasi apabila nilai input kosong atau belum diisi atau salah karena nilai berupa eksponensial
    if (panjangAlas == '' || tinggi =='' || panjangAlas.includes('e') || tinggi.includes('e')) {
        alert('Isi nilai dengan benar');
    }

    //rumus untuk menghitung luas
    let luas = 0.5 * panjangAlas * tinggi;

    //menampilkan hasil perhitungan luas
    document.getElementById('hasil-1').value = luas;
}

//fungsi tombol reset untuk luas
function resetLuas() {
    //reset semua input di dalam form id = 'luas-segitiga-form'
    document.getElementById("luas-segitiga-form").reset();
}

//fungsi untuk menghitung keliling segitiga
function validateKeliling() {
    let panjangSisi = document.getElementById('panjang-sisi').value;

    //memberi notifikasi apabila nilai input kosong atau belum diisi atau salah karena nilai berupa eksponensial
    if (panjangSisi == '' || panjangSisi.includes('e')) {
        alert('Isi nilai dengan benar');
    }

    //rumus untuk menghitung keliling
    let keliling = 3 * panjangSisi;

    //menampilkan hasil perhitungan keliling
    document.getElementById('hasil-2').value = keliling;
}

//fungsi tombol reset untuk keliling
function resetKeliling() {
    //reset semua input di dalam form id = 'keliling-segitiga-form'
    document.getElementById("keliling-segitiga-form").reset();
}