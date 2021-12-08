"use strict"

class Riga{
    constructor(riga_vettore){
        this.riga_vettore = riga_vettore;
    }
    somma(){
        let i;
        let somma;
        somma =0;
        for (i=0;i<this.riga_vettore.length;i++){
            somma = somma +this.riga_vettore[i];
        }
        return (somma);

    }
    prodotto(){
        let i;
        let prod;
        prod =1;
        for (i=0;i<this.riga_vettore.length;i++){
            prod = prod  * this.riga_vettore[i];
        }
        return (prod);

    }
    differenza(){
        let i;
        let diff;
        diff =this.riga_vettore[0];
        for (i=1;i<this.riga_vettore.length;i++){
            diff = diff  - this.riga_vettore[i];
        }
        return (diff);
    }
}

function calcolate(){

    let t = document.getElementById("table");
    let trs = t.getElementsByTagName("tr");
    let tds;
    let i;
    let n;
    let riga = [];
    let contatore  = 1;

    for (i=0; i<trs.length; i++)
    {
        riga = [];
        tds = trs[i].getElementsByTagName("td");
        for (n=0; n<tds.length;n++)
        {
            riga[n]=parseInt(tds[n].innerHTML);
        }
        console.log(riga);

        if (contatore==1){
            let one_row;
            one_row = new Riga(riga);
            console.log(one_row.somma());
            document.getElementById("result_somma").innerHTML = one_row.somma();
        }
        else if (contatore==2){
            let one_row;
            one_row = new Riga(riga);
            console.log(one_row.differenza());
            document.getElementById("result_differenza").innerHTML = one_row.differenza();

        }
        else{
            let one_row;
            one_row = new Riga(riga);
            console.log( one_row.prodotto());
            document.getElementById("result_prodotto").innerHTML = one_row.prodotto();
        }
        console.log(contatore);
        contatore=contatore+1;

    }   


}