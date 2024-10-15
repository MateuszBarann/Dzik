var aktualnaLiczba = 0;
var wynik = 0;
var najwyzszyWynik = 0; 
var interwalGry;
var predkosc = 1000;

var wyswietlaczLiczby = document.getElementById("wyswietlacz-liczby");
var wyswietlaczWyniku = document.getElementById("wyswietlacz-wyniku");
var wyswietlaczNajwyzszyWynik = document.getElementById("wyswietlacz-najwyzszy-wynik"); // Element do wyświetlania najwyższego wyniku
var komunikat = document.getElementById("komunikat");
var przyciskStart = document.getElementById("przycisk-start");
var przyciskDzik = document.getElementById("przycisk-dzik");
var polePredkosc = document.getElementById("predkosc");

function uruchomGre() {
    aktualnaLiczba = 0;
    wynik = 0;
    predkosc = parseInt(polePredkosc.value);
    wyswietlaczWyniku.textContent = wynik;
    komunikat.textContent = ""; 
    interwalGry = setInterval(nastepnaLiczba, predkosc);
}

function nastepnaLiczba() {
    aktualnaLiczba += 1;
    wyswietlaczLiczby.textContent = aktualnaLiczba;
}

function czyLiczbaDzika(liczba) {
    return liczba % 7 === 0 || liczba.toString().includes('7');
}

przyciskDzik.onclick = function() {
    if (czyLiczbaDzika(aktualnaLiczba)) {
        wynik += 1;
        komunikat.textContent = "Brawo! To liczba dzika.";
    } else {
        wynik -= 1;
        komunikat.textContent = "Źle! To nie jest liczba dzika.";
    }
    
    wyswietlaczWyniku.textContent = wynik;

 
    if (wynik > najwyzszyWynik) {
        najwyzszyWynik = wynik;
        wyswietlaczNajwyzszyWynik.textContent = najwyzszyWynik; 
    }

    
    setTimeout(function() {
        komunikat.textContent = "";
    }, 1000);
}

przyciskStart.onclick = function() {
    if (interwalGry) {
        clearInterval(interwalGry);
    }
    uruchomGre();
}
