let i = 0;

while(i<6){
   console.log(i);
   i++;



   //output?

   let vegetali  = ["carciofi","barbabietole","zucchine","finocchi"]

   for (let index = 0; index < vegetali.length; index++) {
        const element = vegetali[index];
        console.log(element);
        
    
        if (element === "carciofi") {
            console.log("ho trovato dei carciofi");
        } else {
            console.log("non ho carciofi ma " + element);
        } 

    let numeri  = ["10","22","15","08"]

    for (let index = 0; index < numeri.length; index++) {
             const element = numeri[index];
             console.log(element);
             
         
        if (element === "10") {
            console.log("ho trovato dei 10");
        } else {
            console.log("non ho 10 ma " + element);  
    }



    const lista2 = document.getElementById("divRosso");
    const bottone2 = document.getElementById("bottone2");
    
    bottone2.addEventListener("click",function(){
    
        for (let index = 0; index < vegetali.length; index++) {
            const nuovoElemento = document.createElement("li");
            nuovoElemento.textContent = vegetali[index];
            lista2.appendChild(nuovoElemento);
        }
    
    })