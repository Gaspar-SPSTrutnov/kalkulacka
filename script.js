var vysledek = "";
var vypisovePole;
var celyZapis;

$(document).ready(function() 
{
    let komunikacniObjekt = new XMLHttpRequest();

    $("#clear").click(function() 
    {
        $.get("php/kalkulacka.php", function(data, status) 
        {

                let odpoved = JSON.parse(data);
                $("#div").html(
                odpoved[0].cislice + ".............." + odpoved[0].pocet + "<br>" +
                odpoved[1].cislice + ".............." + odpoved[1].pocet + "<br>" +
                odpoved[2].cislice + ".............." + odpoved[2].pocet + "<br>" +
                odpoved[3].cislice + ".............." + odpoved[3].pocet + "<br>" +
                odpoved[4].cislice + ".............." + odpoved[4].pocet + "<br>" +
                odpoved[5].cislice + ".............." + odpoved[5].pocet + "<br>" +
                odpoved[6].cislice + ".............." + odpoved[6].pocet + "<br>" +
                odpoved[7].cislice + ".............." + odpoved[7].pocet + "<br>" +
                odpoved[8].cislice + ".............." + odpoved[8].pocet + "<br>" +
                odpoved[9].cislice + ".............." + odpoved[9].pocet);
        });
    });

    $(".cislo").click(function() 
    {
        $.get("php/kalkulacka.php?cislice=" + this.value, function(data, status) 
        {
                let odpoved = JSON.parse(data);
                $("#div").html(
                    odpoved[0].cislice + ".............." + odpoved[0].pocet + "<br>" +
                    odpoved[1].cislice + ".............." + odpoved[1].pocet + "<br>" +
                    odpoved[2].cislice + ".............." + odpoved[2].pocet + "<br>" +
                    odpoved[3].cislice + ".............." + odpoved[3].pocet + "<br>" +
                    odpoved[4].cislice + ".............." + odpoved[4].pocet + "<br>" +
                    odpoved[5].cislice + ".............." + odpoved[5].pocet + "<br>" +
                    odpoved[6].cislice + ".............." + odpoved[6].pocet + "<br>" +
                    odpoved[7].cislice + ".............." + odpoved[7].pocet + "<br>" +
                    odpoved[8].cislice + ".............." + odpoved[8].pocet + "<br>" +
                    odpoved[9].cislice + ".............." + odpoved[9].pocet);
        }); 
    });
});


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