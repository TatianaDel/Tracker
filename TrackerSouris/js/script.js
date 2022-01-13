// Déclaration des variables Globales

var declarationAbonnements = function() {
	
	document.getElementById('zone').addEventListener("mousemove",function() { deplacementSouris(event); } );	
	document.getElementById('petiteZone').addEventListener("mouseover", function () { logMouseOver()});
	document.getElementById('petiteZone').addEventListener("mouseout", function () { logMouseOut()});
	document.getElementById('choix1').addEventListener("click",function() { click1(event); } );	
	document.getElementById('choix2').addEventListener("click",function() { click2(event); } );
	document.getElementById('choix3').addEventListener("click",function() { click3(event); } );
}

var lastx;
var lien, lastLien;
var orientation;
var dansPetiteZone;
var clic;

// Fonction exécutée à l'ouverture de la page

var init = function() {         				
 	declarationAbonnements();
}

if ( window.addEventListener ) {
	window.addEventListener( "load", init, false );
} 
else if ( window.attachEvent ) {
	window.attachEvent( "onload", init );
} 
else if ( window.onLoad ) {
	window.onload = init;
}

function logMouseOver(){
	dansPetiteZone = true;
}

function logMouseOut(){
	dansPetiteZone = false;
}

document.onmousemove = suitsouris;
function suitsouris(event)
{
	if (!window.addEventListener) {
		var x = evenement.pageX;
		var y = evenement.pageY;
	} else {
		var newx = event.x + document.body.scrollLeft;
		var y = event.y + document.body.scrollTop;
		if (newx <= lastx){
			orientation = true; //vers la gauche
			document.getElementById("poke").style.left = (newx+1)+'px';
		}
		if(lastx <= newx){
			orientation = false; //vers la droite
			document.getElementById("poke").style.left = (newx-176)+'px';
		}
		if(dansPetiteZone) {
			switch (clic) {
				case 1:
					if (orientation) { 
						lien = "img/salameche.gif"; //gauche
					} else {
						lien = "img/salameche_retourne.gif"; //droite
					}
					if (lastLien !== lien) {
						click1(event);
						lastLien = lien;
					}
					break;
				case 2:
					if (orientation) {
						lien = "img/bulbizarre.gif";
					} else {
						lien = "img/bulbizarre_retourne.gif";
					}
					if (lastLien !== lien) {
						click2(event);
						lastLien = lien;
					}
					break;
				case 3:
					if (clic === 3) {
						if (orientation) {
							lien = "img/pikachu.gif";
						} else {
							lien = "img/pikachu_retourne.gif";
						}
						if (lastLien !== lien) {
							click3(event);
							lastLien = lien;
						}
					}
					break;
				default:
					lien = "";
					break;
			}
		} else {
			lien="";
			desactivClick(event);
		}
	}
	lastx = newx;
	document.getElementById("poke").style.top = (y-50)+'px';
}

// Fonctions utilisateur

var deplacementSouris = function(event) {
	var x = event.clientX;
	var y = event.clientY;
	document.getElementById("info").innerHTML = 'X='+x + ' Y='+ y;
}

var desactivClick = function(event) {
	document.getElementById("poke").style.display="none";
}

var click1 = function(event) {
	clic = 1;
	document.getElementById("poke").src=lien;
	document.getElementById("poke").style.display="block";
}

var click2 = function(event) {
	clic = 2;
	document.getElementById("poke").src=lien;
	document.getElementById("poke").style.display="block";
}

var click3 = function(event) {
	clic = 3;
	document.getElementById("poke").src=lien;
	document.getElementById("poke").style.display="block";
}