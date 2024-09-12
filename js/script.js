function validateLuas() {
    let panjangAlas = document.getElementById('panjang-alas').value;
    let tinggi = document.getElementById('tinggi').value;
    if (panjangAlas == '' || tinggi =='' || panjangAlas.includes('e') || tinggi.includes('e')) {
        alert('Isi nilai dengan benar');
    }
    let luas = 0.5 * panjangAlas * tinggi;
    document.getElementById('hasil-1').value = luas;
}

function validateKeliling() {
    let panjangSisi = document.getElementById('panjang-sisi').value;
    if (panjangSisi == '' || panjangSisi.includes('e')) {
        alert('Isi nilai dengan benar');
    }
    let keliling = 3 * panjangSisi;
    document.getElementById('hasil-2').value = keliling;
}