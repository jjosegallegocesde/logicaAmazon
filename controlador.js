//1. Necesito almacenar el precio en dolares
//ps5-xbox seriex-nintentendo switch

let preciosConsolas=Array(750,700,409);

//2. Almacenar la cantidad de consolas
let cantidad=1;

//3// calcular el costo del casillero (LB)
let pesosConsolas=Array(14.2,13.1,4.75);
let pesoTotal=pesosConsolas[0]*cantidad;

let costoCasillero=0;
if(pesoTotal>=0 && pesoTotal<=20){

    costoCasillero=85;

}else {

    let diferenciaPeso=pesoTotal-20;
    costoCasillero=85+(diferenciaPeso*2);

}

//4. costos de envio+impuestos
const IMPUESTO_PAIS=114;
const VALOR_SEGURO=7;

//5. calculo el costo final de la compra
let costoTotal=(preciosConsolas[0]*cantidad)+costoCasillero+IMPUESTO_PAIS+VALOR_SEGURO;

//((750)+85+114+7 //956

console.log(costoTotal);