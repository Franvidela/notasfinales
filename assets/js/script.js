


/* ramohtml */
/* ENTRADA*/

var nota1html = prompt('Digite la nota 1 del ramo HTML');
nota1html = parseInt(nota1html);
console.log(nota1html);

var nota2html = prompt('Digite la nota 2 del ramo HTML');
nota2html = parseInt(nota2html);
console.log(nota2html);

var nota3html = prompt('Digite la nota 3 del ramo HTML');
nota3html = parseInt(nota3html);
console.log(nota3html);

/* PROCESO */

var resultadopromediohtml = (nota1html + nota2html + nota3html)/3;
console.log('el promedio de las tres notas es: '+resultadopromediohtml);

/* SALIDA */
/* defina las variables que referencia las celdas del html*/
var celdanota1html = document.getElementById('nota1html');
var celdanota2html = document.getElementById('nota2html');
var celdanota3html = document.getElementById('nota3html');
var celdapromediohtml = document.getElementById('promediohtml')

/* traspasamos los valroes que tiene javascript en las variales al documento html */

celdanota1html.innerHTML = nota1html;
celdanota2html.innerHTML = nota2html;
celdanota3html.innerHTML = nota3html;
celdapromediohtml.innerHTML = resultadopromediohtml;

/* ramocss */

/* ENTRADA*/

var nota1css = prompt('Digite la nota 1 del ramo CSS');
nota1css = parseInt(nota1css);
console.log(nota1css);

var nota2css = prompt('Digite la nota 2 del ramo CSS');
nota2css = parseInt(nota2css);
console.log(nota2css);

var nota3css = prompt('Digite la nota 3 del ramo CSS');
nota3css = parseInt(nota3css);
console.log(nota3css);

/* PROCESO */

var resultadopromediocss = (nota1css + nota2css + nota3css)/3;
console.log('el promedio de las tres notas es: '+resultadopromediocss);

/* SALIDA */
/* defina las variables que referencia las celdas del html*/
var celdanota1css = document.getElementById('nota1css');
var celdanota2css = document.getElementById('nota2css');
var celdanota3css = document.getElementById('nota3css');
var celdapromediocss = document.getElementById('promediocss')

/* traspasamos los valroes que tiene javascript en las variales al documento html */

celdanota1css.innerHTML = nota1css;
celdanota2css.innerHTML = nota2css;
celdanota3css.innerHTML = nota3css;
celdapromediocss.innerHTML = resultadopromediocss;

/* ramosjs */
/* ENTRADA*/

var nota1js = prompt('Digite la nota 1 del ramo JS');
nota1js = parseInt(nota1js);
console.log(nota1js);

var nota2js = prompt('Digite la nota 2 del ramo JS');
nota2js = parseInt(nota2js);
console.log(nota2js);

var nota3js = prompt('Digite la nota 3 del ramo JS');
nota3js = parseInt(nota3js);
console.log(nota3js);

/* PROCESO */

var resultadopromediojs = (nota1js + nota2js + nota3js)/3;
console.log('el promedio de las tres notas es: '+resultadopromediojs);

/* SALIDA */
/* defina las variables que referencia las celdas del html*/
var celdanota1js = document.getElementById('nota1js');
var celdanota2js = document.getElementById('nota2js');
var celdanota3js = document.getElementById('nota3js');
var celdapromediojs = document.getElementById('promediojs')

/* traspasamos los valroes que tiene javascript en las variales al documento html */

celdanota1js.innerHTML = nota1js;
celdanota2js.innerHTML = nota2js;
celdanota3js.innerHTML = nota3js;
celdapromediojs.innerHTML = resultadopromediojs;