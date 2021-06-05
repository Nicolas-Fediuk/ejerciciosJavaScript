/*Hacer un programa que dado el importe de una venta y el porcentaje de
descuento aplicada a la misma informar por pantalla el importa a pagar.
Ejemplo 1. Si el importe de la venta es $ 1.200 y el descuento es el 15% entonces el total a
pagar será de $ 1.020.
Ejemplo 2. Si el importe de la venta es $ 800 y el descuento es el 0% entonces el total a pagar
será de $ 800. */

let importe=1200;
let descuento=15;

let calculo=(importe*descuento)/100;
let suma=importe-calculo;
console.log(suma);

 /*Una granja vende la caja de 12 unidades a $ 100 y cada huevo suelto a $ 12.
Hacer un programa que dado una cantidad de huevos que compra un cliente, mostrar por
pantalla el importe total a pagar.
Recordatorio. Por cada 12 huevos se debe calcular una caja y el excedente se calcula como
suelto.
Ejemplo 1. Si la cantidad ingresada son 15 huevos, el programa calculará 1 caja y 3 sueltos, es
decir $ 100 + $ 12 x 3 = $ 136.
Ejemplo 2. Si la cantidad ingresada son 28 huevos el programa calculará 2 cajas y 4 sueltos, es
decir $ 100 x 2 + $12 x 4 = $ 248.*/

let huevosComprados = 28;
let calculoSuelto = huevosComprados % 12;
let calculoSuelto2 = calculoSuelto*12;
let caja=(huevosComprados-calculoSuelto)/12;
let caja2=caja*100;
let total=caja2+calculoSuelto2;
console.log(total);

/*Una empresa de electricidad cobra el servicio a sus clientes de acuerdo a la siguiente
escala:
$ 10 por kilovatio por el consumo hasta los primeros 100 kilovatios de consumo.
$ 12 por kilovatio por el consumo excedente de 101 a 200 kilovatios.
$ 15 por kilovatio por el consumo excedente de 201 kilovatios en adelante.
Hacer un programa para que, dado el consumo en kilovatios de un determinado cliente, el
programa calcule e informe el total a pagar por el mismo.
Ejemplo 1: Un consumo de 55 kilovatios, se calculará: $ 10 x 55= $ 550
Ejemplo 2: Un consumo de 125 kilovatios, se calculará: $ 10 x 100 + $ 12 x 25=$ 1300
Ejemplo 3: Un consumo de 250 kilovatios, se calculará: $ 10 x 100 + $ 12 x 100 + $ 15 x 50 = $ 2950*/

let consumo=250;
if (consumo<=100){
    total=consumo*10;
    console.log(total);
}
else if(consumo>100 && consumo<=200){
    let subtotal=(consumo-100)*12;
    total=subtotal+1000;
    console.log(total); 
}
else if(consumo>200){
    subtotal=(consumo-200)*15;
    total=subtotal+2200;
    console.log(total);
}

/*Hacer un programa donde cuatro valores están ordenados en forma creciente, emitir el mensaje “Conjunto Ordenado”, caso
contrario emitir el mensaje: “Conjunto Desordenado”.
Ejemplo 1: si los números que se ingresan son 8,10, 12 y 14, entonces están ordenados.
Ejemplo 2: si los números que se ingresan son 8,12, 12 y 14, entonces están ordenados.
Ejemplo 3: si los números que se ingresan son 10, 8,12 y 14, entonces están desordenados.*/

let n1=1,n2=2,n3=3,n4=4;
if(n2>=n1 && n3>=n2 && n4>=n3){
    console.log("conjunto ordenado");
}
else{
    console.log("conjunto desordenado")
}

/*Dado un numero informa si es primo o no*/

let numero=5,contador=0;

for (let i=1;i<=numero;i++){
    if (numero%i==0){
        contador++;
    }
}
if (contador==2){
    console.log("es primo");
}
else{
    console.log("no es primo");
}

/*Se define como divisores propios de un número a aquellos que son sus divisores
excluyendo al número en sí mismo.
Ejemplo. Los divisores propios del 4 son: 1 y 2.
Ejemplo. Los divisores propios del 12 son; 1, 2, 3, 4 y 6.
Se define a un número como perfecto cuando la suma de todos sus divisores propios
coincide con el número en sí mismo.
Ejemplo: 28 es número perfecto pues 1+2+4+7+14=28
Ejemplo: 12 no es número perfecto pues 1+2+3+4+6=16
Hacer un programa que dado un número informar con un cartel aclaratorio si el
mismo es un número perfecto o es número no perfecto.*/

numero=28;
let acumulador=0;
for (i=1;i<numero;i++){
    if(numero%i==0){
        acumulador+=i;
    }
}
if(numero==acumulador){
    console.log("numero perfecto");
}
else{
    console.log("numero no perfecto")
}

/*El mismo ejercicio anterior pero usando ciclo inexacto*/

numero=28;
acumulador=0;
let y=1;
while (y<numero){
    if(numero%y==0){
        acumulador+=y;
    }
    y++;
}
if(numero==acumulador){
    console.log("numero perfecto");
}
else{
    console.log("numero no perfecto")
}

/*Hacer un programa que dado dos números, el programa
muestre por pantalla los números entre el menor y el mayor de ambos.
Ejemplo, si el usuario ingresa 3 y 15, se mostrarán los números entre el 3 y el 15; y si el
usuario ingresa 25 y 8, se mostrarán los números entre el 8 y el 25.*/

let numero1=15,numero2=3;
let numero3=numero1;

if(numero1<numero2){
    while(numero3<numero2-1){
        numero3++;
        console.log(numero3);
    }
}
else{
    while(numero3>numero2+1){
        numero3--;
        console.log(numero3);
    }
}
