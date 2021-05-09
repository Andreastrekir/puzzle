function desordenar() {
	piezas.sort(function() {return Math.random() - 0.5});
	console.log(piezas);
}

function desmarcarTodas() {
	for(var i=0; i<=8; i++){
		document.getElementById("fila-"+i).style.border = "solid 2px white";
    }
}

//se llama a esta funcion cuando se le hace click a una casilla
function seleccionar(casilla) {
	//contabilizo el click sobre casilla
	num_click = num_click + 1;
	console.log("click num: "+num_click);

	//si es el primer click 
	if (num_click == 1) {
		//memorizar la casilla donde se hizo el primer click
		casilla_click_primero = casilla;
		desmarcarTodas();
		document.getElementById("fila-"+casilla).style.border = "solid 2px red";
		console.log("memorizo el primer click: "+casilla_click_primero);
	}

	if (num_click ==2) {
		//este click no importa mantenerlo por eso puede ser local/
		var casilla_click_segundo = casilla;

		console.log(piezas);


		//intercambiar los valores de la array
		var contenido = piezas[casilla_click_primero];
		//ahora puedo cambiar contenido de casilla
		piezas[casilla_click_primero] = piezas[casilla_click_segundo]; 

		// por ultimo pongo casilla del segundo click en la casilla del primero
		piezas[casilla_click_segundo] = contenido;

		console.log(piezas);
		//volver a poner contador a cero
		num_click=0;

		desmarcarTodas();

		refrescarPuzzle();

		//comprobar si el puzzle es correcto:
		var correcto = comprobarPuzzle();
		if (correcto == true) {
			setTimeout(function(){
				alert("You finished the puzzle correctly");
			}, 300);
		}	
    }
}

function comprobarPuzzle(){
	var correcto = true;
	for (var i=0; i<=8;i++) {
		if (piezas [i] != i) {
			correcto= false;
		}
	}
	return correcto;
}

function refrescarPuzzle(){
	for(var casilla=0; casilla<=8; casilla++) {
		var imagen = piezas[casilla];
		document.getElementById("fila-"+casilla).src = "fila-"+imagen+".jpg";
   }
   
}

//comienza aqui
var piezas = [0,1,2,3,4,5,6,7,8];

var num_click = 0;

var casilla_click_primero;
//llamo a la funcion desde aqui//
desordenar();
//refresco panel
refrescarPuzzle();
desmarcarTodas();



























