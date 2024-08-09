const readline = require('readline-sync');

function tambah(a, b) {
    return a + b;
}

function kurang(a, b) {
    return a - b;
}

function kali(a, b) {
    return a * b;
}

function bagi(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: Pembagian dengan nol tidak diperbolehkan.";
    }
}

function kalkulator() {
    const num1 = parseFloat(readline.question('Masukkan angka pertama: '));
    const operator = readline.question('Masukkan operator (+, -, *, /): ');
    const num2 = parseFloat(readline.question('Masukkan angka kedua: '));

    let hasil;
    switch (operator) {
        case '+':
            hasil = tambah(num1, num2);
            break;
        case '-':
            hasil = kurang(num1, num2);
            break;
        case '*':
            hasil = kali(num1, num2);
            break;
        case '/':
            hasil = bagi(num1, num2);
            break;
        default:
            hasil = "Error: Operator tidak valid.";
    }

    console.log(`Hasil: ${hasil}`);
}

kalkulator();
