      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Sprint', 'puntaje tech'],
          ['1',  1800],
          ['2',  1650],
          ['3',  1300],
        ]);

        var options = {
          curveType: 'function',
          legend: { position: 'bottom' }

        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart2'));

        chart.draw(data, options);
      }
/*
 * Funcionalidad de tu producto
 */

//Puedes hacer uso de la base de datos a través de la variable `data`
var filtrarLab = document.getElementById("sede");
filtrarLab.addEventListener("change",clicOpcion);
function clicOpcion() {
	var sedes = filtrarLab.value;
	console.log(sedes)
 	var generation = filtrarLab.options[filtrarLab.selectedIndex].dataset.generacion;
 	console.log( "Generacion selecionada "+ generation)
 	var totalStudents = data[sedes][generation]["students"].length;
 	console.log("Estudiantes selecionadas "+ totalStudents)
 	var totalStudentsRatings = data[sedes][generation]["ratings"].length;
 	console.log("Ratings selecionados " + totalStudentsRatings)
 	// console.log(totalStudentsGlobal);
 } 


// var sede = data["AQP"]
// var generation = sede["2016-2"]
// var studentsNum = generation.students
//var totalStudentsSede = 0;
var activas = 0; // Total general
var inActivas = 0;
console.log("Alumnas Activas "+ activas)
console.log("Alumnas Inativas "+ inActivas)

var totalHyT7 = 0;
var porcentajeActivos = 0;
var porcentajeInactivos = 0;
var promTotalH = 0;
var promTotalT = 0;
var totalGenSede =  0;
var totalGenSedeH =  0;
var totalGenSedeT =  0;


//Para que cuente cuantas alumnas hay en lista

totalStudentsSede = Object.keys(totalStudents);
console.log("El total de alumnas es " + totalStudentsSede)

for (var i = 0; i < totalStudents; i++ ) {
console.log(studentsNum[i].active)
	//studentsNum[i]["sprints"][j]["score"]["hse"]
	if (totalStudents[i].active===true){
		activas++;
		console.log("Alumnas Activas "+ activas);
	}
	else {
		inActivas++
	}
	}
porcentajeActivos = (activas / totalStudents) * 100;
porcentajeInactivos = (inActivas / totalStudents) * 100;

console.log(porcentajeActivos)
console.log(porcentajeinActivos)


for (var i = 0; i < studentsNum.length; i++ ) {
	var totalH = 0;
	var totalT = 0;
	

if (studentsNum[i].active === true){
	 for (var j = 0; j < studentsNum[i]["sprints"]; j++){

	 	//console.log("tamaño"+ studentsNum[i]["sprints"].length);
	 totalH += studentsNum[i]["sprints"][j]["score"]["hse"];
	 totalT += studentsNum[i]["sprints"][j]["score"]["tech"];
	 }
	promTotalH = totalH / studentsNum[i]["sprints"];
	promTotalT = totalT / studentsNum[i]["sprints"];

totalGenSedeT += promTotalT;
totalGenSedeH += promTotalH;
console.log("INDIVIDUAL"+promTotalH);
console.log("INDI"+promTotalT);
console.log(totalGenSedeT);
console.log(totalGenSedeH);
	 }
var promTotalGenT= totalGenSedeT/activas;
var promTotalGenH= totalGenSedeH/activas;

}
console.log("PROMEDIO TECH "+promTotalGenT);
console.log("PROMEDIO HSE "+promTotalGenH);

var activastotal = activas








// // //totalStudents = Object.keys(studentsNum).length;





// // // /*for (var i = 0; i = studentsNum.length; i++ ) {
// // // 	totalStudents ++;		
// // }


// // console.log(totalStudents)*/