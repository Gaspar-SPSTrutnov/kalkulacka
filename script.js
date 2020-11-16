var vysledek = "";
var vypisovePole;
var celyZapis;


function odpoved(cislice) {
    let komunikacniObjekt = new XMLHttpRequest();

    if (cislice.lengths > 1) {
        komunikacniObjekt.open("GET", "php/kalkulacka.php", true);

        komunikacniObjekt.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let odpoved = JSON.parse(this.responseText);
                document.getElementById("div").innerText = (
                    odpoved[0].cislice + ".............." + odpoved[0].pocet + "\n" +
                    odpoved[1].cislice + ".............." + odpoved[1].pocet + "\n" +
                    odpoved[2].cislice + ".............." + odpoved[2].pocet + "\n" +
                    odpoved[3].cislice + ".............." + odpoved[3].pocet + "\n" +
                    odpoved[4].cislice + ".............." + odpoved[4].pocet + "\n" +
                    odpoved[5].cislice + ".............." + odpoved[5].pocet + "\n" +
                    odpoved[6].cislice + ".............." + odpoved[6].pocet + "\n" +
                    odpoved[7].cislice + ".............." + odpoved[7].pocet + "\n" +
                    odpoved[8].cislice + ".............." + odpoved[8].pocet + "\n" +
                    odpoved[9].cislice + ".............." + odpoved[9].pocet)

            }
        }
    }
    else {
        komunikacniObjekt.open("GET", "php/kalkulacka.php?cislice=" + cislice, true);
        komunikacniObjekt.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let odpoved = JSON.parse(this.responseText);
                document.getElementById("div").innerText = (
                    odpoved[0].cislice + ".............." + odpoved[0].pocet + "\n" +
                    odpoved[1].cislice + ".............." + odpoved[1].pocet + "\n" +
                    odpoved[2].cislice + ".............." + odpoved[2].pocet + "\n" +
                    odpoved[3].cislice + ".............." + odpoved[3].pocet + "\n" +
                    odpoved[4].cislice + ".............." + odpoved[4].pocet + "\n" +
                    odpoved[5].cislice + ".............." + odpoved[5].pocet + "\n" +
                    odpoved[6].cislice + ".............." + odpoved[6].pocet + "\n" +
                    odpoved[7].cislice + ".............." + odpoved[7].pocet + "\n" +
                    odpoved[8].cislice + ".............." + odpoved[8].pocet + "\n" +
                    odpoved[9].cislice + ".............." + odpoved[9].pocet)

            }
        }
    }

    komunikacniObjekt.send();
}

function zapis(vstup) {
    vypisovePole = document.getElementById("vysledek");
    postup = document.getElementById("postup");
    postup.value += vstup.value;
}

function vystup() {
    vysledek = document.getElementById("vysledek");
    postup = document.getElementById("postup");
    vysledek.value = eval(postup.value);
}

function vymazposl() {
    if (postup.value == "")
        return;
    let vystup = '';
    for (let index = 0; index < postup.value.length - 1; index++) {
        vystup += postup.value[index];
    }
    postup.value = vystup;
}

function vymaz() {
    postup.value = "";
}

function vymazvseho() {
    postup.value = "";
    vysledek.value = "";
}

function odmocnina() {
    if (postup.value == "")
        return;
    let vystup = "Math.sqrt(";
    vystup += postup.value;
    vystup += ")"
    postup.value = vystup;
}

function negace() {
    if (postup.value == "")
        return;
    postup.value += "*(-1)"
}

function mocnina() {
    if (postup.value == "")
        return;
    let vystup = "Math.pow(";
    vystup += postup.value;
    vystup += ",2)"
    postup.value = vystup;
}

function lomeno() {
    if (postup.value == "")
        return;
    let vystup = "1/(";
    vystup += postup.value;
    vystup += ")";
    postup.value = vystup;
}