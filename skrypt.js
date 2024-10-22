let aktualnaLiczba = 0;
let wynik = 0;
let najwyzszyWynik = 0; 
let interwalGry;
let predkosc = 1000;

var polePredkosc = document.getElementById("predkosc");

let uruchomGre = function() {
    aktualnaLiczba = 0;
    wynik = 0;
    predkosc = parseInt(polePredkosc.value);
    document.getElementById("wyswietlacz-wyniku").innerHTML = wynik;
    document.getElementById("komunikat").innerHTML = ""; 
    interwalGry = setInterval(nastepnaLiczba, predkosc);
}

let nastepnaLiczba = function() {
    aktualnaLiczba += 1;
    document.getElementById("wyswietlacz-liczby").innerHTML = aktualnaLiczba;
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
        document.getElementById("komunikat").innerHTML = "Źle! To nie jest liczba dzika.";
    }
    
    document.getElementById("wyswietlacz-wyniku").innerHTML = wynik;

 
    if (wynik > najwyzszyWynik) {
        najwyzszyWynik = wynik;
        document.getElementById("wyswietlacz-najwyzszy-wynik").innerHTML = najwyzszyWynik; 
    }

    
    setTimeout(function() {document.getElementById("komunikat").innerHTML = "";}, 1000);
}

let start = function() {
    clearInterval(interwalGry);
    uruchomGre();
}
