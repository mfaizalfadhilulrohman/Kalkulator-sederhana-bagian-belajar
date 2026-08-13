let angka="";
let pertama = 0;
let kedua=0;
let kal="";
let hasil = 0;

function s(){
    angka+="1";
    pertama = parseInt(angka);
    document.getElementById("hasil").value = angka;
}

function n(){
    angka+="0";
    pertama = parseInt(angka);
    document.getElementById("hasil").value = angka;
}

function d(){
    angka+="2";
    pertama = parseInt(angka);
    document.getElementById("hasil").value = angka;
}

function t(){
    angka+="3";
    pertama = parseInt(angka);
    document.getElementById("hasil").value = angka;
}
function empat(){
    angka+="4";
    pertama = parseInt(angka);
    document.getElementById("hasil").value = angka;
}
function lima(){
    angka+="5";
    pertama = parseInt(angka);
    document.getElementById("hasil").value = angka;
}
function enam(){
    angka+="6";
    pertama = parseInt(angka);
    document.getElementById("hasil").value = angka;
}
function tujuh(){
    angka+="7";
    pertama = parseInt(angka);
    document.getElementById("hasil").value = angka;
}
function delapan(){
    angka+="8";
    pertama = parseInt(angka);
    document.getElementById("hasil").value = angka;
}
function sembilan(){
    angka+="9";
    pertama = parseInt(angka);
    document.getElementById("hasil").value = angka;
}

function tambah(){
    kal = document.getElementById("tambah").value;
    kedua=pertama;
    angka="";
}
function kurang(){
    kal = document.getElementById("kurang").value;
    kedua=pertama;
    angka="";
}
function kali(){
    kal = document.getElementById("kali").value;
    kedua=pertama;
    angka="";
}
function dibagi(){
    kal = document.getElementById("bagi").value;
    kedua=pertama;
    angka="";
}

function samadengan(){
    if (kal=="+"){
        hasil = kedua+pertama;
        angka="";
        pertama = hasil;
    }
    else if (kal=="-"){
        hasil = kedua-pertama;
        angka="";
        pertama = hasil;
    }
    else if (kal=="*"){
        hasil = kedua*pertama;
        angka="";
        pertama = hasil;
    }
    else if (kal=="/"){
        hasil = kedua/pertama;
        angka="";
        pertama = hasil;
    }
    // document.getElementById("hasil").value = "Hidup Jokowi!";
    document.getElementById("hasil").value = hasil;
    kal="";
}

function delet(){
    angka="";
    hasil=0;
    document.getElementById("hasil").value = hasil;
}