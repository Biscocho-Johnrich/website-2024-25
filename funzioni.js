
//per dichiarare la funzione
function stampaNome(nome){
    console.log("Ciao " + nome);
}

//per chiamare la funzione
stampaNome("Johnrich");
stampaNome("Pinco");
stampaNome("Palla")
//----------------------------------


function somma(a1,b2){
    let somma = a1+b2;
    console.log("Il risultato della somma è= " + somma);
}

somma(56,100);  //funzione invocata 

//--------------------------------------------------------------



function somma2(a,b){
    return a + b;
}


let risultatoSomma = somma2(34,56);


console.log("Il risultato della somma è: " + risultatoSomma);



//---------Funzione che verifica se il numero è pari------------------------------------


function sePari(numero){
    if(numero % 2 === 0){    // L'operatore % è chiamato modulo e viene utilizzato per calcolare il resto della divisione tra due numeri. 
        console.log("Il numero è pari");
    }else{
        console.log("Il numero è dispari");
    }

}
sePari(4);

//----------------------------------------------------------------------------------




function divisione(a,b){
    let risultato = a / b;
    return risultato
}

function calcolo(a,b,funzDiCalcolo){
    return funzDiCalcolo(a,b);
}

console.log(calcolo(40,7,divisione));

function somma(a,b){
    return a + b;
}
function divisione(a,b){
    return a / b;
    return 

function sottrazione(a,b){
    return a - b;
}

function moltiplicazione(a,b){
    return a * b;
}

function modulo(a,b){
    return a % b;
}

function calcolo(a,b,tipoDiCalcolo){
   var risultato = tipoDiCalcolo(a,b);
   return risultato
}



console.log("Il risultato della somma è: " + calcolo(23,45, somma));
console.log("Il risultato della divisione è: " + calcolo(200,40,divisione));
console.log("Il risultato del modulo di 8 e 3 è: " + calcolo(8,3,modulo));