// A) maak 2 verschillende variabelen met twee willekeurige integers (zelf kiezen)
var getal1 = 20;
var getal2 = 45;



// B) toon beide getallen op het scherm met document.getElementById('<jouw_gekozen_id>').innerHTML
document.getElementById("getal1").innerHTML = getal1;
document.getElementById("getal2").innerHTML = getal2;



// C) Vraag de gebruiker om een INPUT waarde door prompt() te gebruiken. 
// Gebruik de prompt()-waarde om een variabelen te 'vullen'
var doosmetgetal1= prompt("geef een getal");
var doosmetgetal2= prompt("geef een geta2");

document.getElementById("doosmetgetal1").innerHTML = doosmetgetal1;
document.getElementById("doosmetgetal2").innerHTML = doosmetgetal2;


// jouw code hieronder-->>
// var ;
// var ;

// D) Vergelijk de twee getallen met elkaar door gebruik te maken van conditions  if()

    if( doosmetgetal1 > doosmetgetal2 ){
        document.getElementById("main").style.backgroundColor = "green";

    }

    
    if( doosmetgetal1 < doosmetgetal2 ){
        document.getElementById("main").style.backgroundColor = "red";

    }
    


    




// jouw code hieronder-->>
// if () {

// }

