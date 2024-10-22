let aktualnaLiczba = 0;
let wynik = 0;
let najwyzszyWynik = 0; 
let interwalGry;
let predkosc = 1000;
let polePredkosc = document.getElementById("predkosc");

let uruchomGre = function() {
    aktualnaLiczba = 0;
    wynik = 0;
    predkosc = parseInt(polePredkosc.value);
    document.getElementById("wynik").innerHTML = "Twoj wynik: " + wynik;
    document.getElementById("komunikat").innerHTML = ""; 
    interwalGry = setInterval(nastepnaLiczba, predkosc);
}

let nastepnaLiczba = function() {
    aktualnaLiczba += 1;
    document.getElementById("liczba").innerHTML = "Aktualna liczba: " + aktualnaLiczba;
}

let czyLiczbaDzika = function(liczba) {
    return liczba % 7 === 0 || liczba.toString().includes('7');
}

let dzik = function() {
    if (czyLiczbaDzika(aktualnaLiczba)) {
        wynik += 1;
        document.getElementById("komunikat").innerHTML = "Brawo! To liczba dzika.";
    } else {
        wynik -= 1;
        document.getElementById("komunikat").innerHTML = "Zle! To nie jest liczba dzika.";
    }
    
    document.getElementById("wynik").innerHTML = "Twoj wynik: " + wynik;

 
    if (wynik > najwyzszyWynik) {
        najwyzszyWynik = wynik;
        document.getElementById("najwyzszy_wynik").innerHTML = "Najwyzszy wynik: " + najwyzszyWynik; 
    }

    
    setTimeout(function() {document.getElementById("komunikat").innerHTML = "";}, 1000);
}

let start = function() {
    clearInterval(interwalGry);
    uruchomGre();
}
