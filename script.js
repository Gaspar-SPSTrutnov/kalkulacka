var vysledek = "";
var vypisovePole;
var celyZapis;


function zapis(vstup)
{
    vypisovePole = document.getElementById("vysledek")
    postup = document.getElementById("postup");
    postup.value += vstup.value;
}

function vystup()
{
    vysledek = document.getElementById("vysledek");
    postup = document.getElementById("postup");
    vysledek.value = eval(postup.value);
}

function vymazposl()
{
    if(postup.value == "")
        return;
    let vystup = '';
    for (let index = 0; index < postup.value.length-1; index++) 
    {
        vystup += postup.value[index];
    }
    postup.value = vystup;
}

function vymaz()
{
    postup.value = "";
}

function vymazvseho()
{
    postup.value = "";
    vysledek.value = "";
}

function odmocnina()
{
    if(postup.value == "")
        return;
    let vystup = "Math.sqrt(";
    vystup += postup.value;
    vystup += ")"
    postup.value = vystup;
}

function negace()
{
    if(postup.value == "")
        return;
    postup.value += "*(-1)"
}

function mocnina()
{
    if(postup.value == "")
        return;
    let vystup = "Math.pow(";
    vystup += postup.value;
    vystup += ",2)"
    postup.value = vystup;
}

function lomeno()
{
    if(postup.value == "")
        return;
    let vystup = "1/(";
    vystup += postup.value;
    vystup += ")";
    postup.value = vystup;
}