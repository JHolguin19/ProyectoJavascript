let registro = {
    nombre: "",
    edad: 0,
    nit: 0,
}

//Calculadora


alert("Bienvenidos a nuestra calculadora")
alert("Para hacer uso de la calculadora por favor contestar la siguientes preguntas;")
for (let i = 1; i <= 10; i++) {
    let nombrei = prompt("Ingresa tu nombre");
    let edadi = parseInt(prompt("Ingresa tu edad (Recuerda que debes ser mayor de 15 años para hacer uso de este servicio)"));
    let niti = parseInt(prompt("Ingresa tu Numero de identificacion"));

    if (nombrei !== "" && !isNaN(edadi) && edadi >= 0 && edadi <= 100 && !isNaN(niti)) {

        registro.nombre = nombrei;
        registro.edad = edadi;
        registro.nit = niti;
        break;
    } else {
        alert("Ingresa un valor de nombre válido y otros datos válidos para edad y número de identificación.");
    }
}

function suma(a, b){
    resultado = a + b;
    alert(resultado)
}

alert(registro)

while(registro.edad>=15){
    const seleccion = parseInt(prompt("Seleccione que tipo de operacion requiere hacer: 1)Sumar, 2)Restar, 3)Dividir, 4)Multiplicar, 5) Detener Calculadora"))
    if(seleccion === 1){
        let a = parseInt(prompt("Si a + b = c, Dijite el valor de a"));
        let b = parseInt(prompt("Si a + b = c, Dijite el valor de b"));
        suma(a, b);
    }
    else if(seleccion ===2){
        let a = parseInt(prompt("Si a - b = c, Dijite el valor de a"));
        let b = parseInt(prompt("Si a - b = c, Dijite el valor de b"));
        const resta = (a, b) => {return a - b};
        alert(resta(a,b))
    }
    else if(seleccion ===3){
        let a = parseInt(prompt("Si a / b = c, Dijite el valor de a"));
        let b = parseInt(prompt("Si a / b = c, Dijite el valor de b"));
        const dividir = (a, b) => {return a/b};
        alert(dividir(a, b))
    }
    else if(seleccion ===4){
        let a = parseInt(prompt("Si a * b = c, Dijite el valor de a"));
        let b = parseInt(prompt("Si a * b = c, Dijite el valor de b"));
        const multiplicar = (a, b) => {return a*b};
        alert(multiplicar(a, b))
    }
    else if(seleccion ===5){
        break
    }
    else{
        alert("Por favor dijita un número entre las opciones")
    }
}

alert("Muchas gracias" + " " + registro.nombre + " " +  "por hacer uso de nuestros servicios")

