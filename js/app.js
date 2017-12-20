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
	//console.log(sedes)
	//console.log(filtrarLab.options[filtrarLab.selectedIndex].dataset.generacion);
 	var generation = filtrarLab.options[filtrarLab.selectedIndex].dataset.generacion;
 	// console.log( "Generacion selecionada "+ generation)
 	var totalStudents = data[sedes][generation]["students"].length;
 	var totalStudents2 = data[sedes][generation]["students"];
 	var dataRatings = data[sedes][generation]["ratings"]
 	// console.log("Estudiantes selecionadas "+ totalStudents)

 	var totalStudentsRatings = data[sedes][generation]["ratings"].length;

 	// console.log("Ratings selecionados " + totalStudentsRatings)
 	// console.log(totalStudentsGlobal);
 

  

console.log("Estudiantes totales " + totalStudents)
//var studentsNum = generationG.students
// var totalStudentsSede = 0;
var activas = 0; // Total general
var inActivas = 0;
// var totalHyT7 = 0;
var porcentajeActivos = 0;
var porcentajeInactivos = 0;
var promTotalH = 0;
var promTotalT = 0;
var totalGenSede =  0;
var totalGenSedeH =  0;
var totalGenSedeT =  0;


//Para que cuente cuantas alumnas hay en lista

// totalStudentsSede = Object.keys(totalStudents);
//console.log("El total de alumnas es " + totalStudentsSede)

for (var i = 0; i < totalStudents; i++ ) {
var alumnActiva = data[sedes][generation].students[i].active;
//console.log(totalStudents[i].active)
	//studentsNum[i]["sprints"][j]["score"]["hse"]
	if (alumnActiva===true){
		activas++;
	}
	else {
		inActivas++;
		
	}
	}

console.log("Alumnas Activas "+ activas)
console.log("Alumnas Inactivas "+ inActivas)
porcentajeActivos = ((activas / totalStudents) * 100).toFixed(1);
porcentajeInactivos = ((inActivas / totalStudents) * 100).toFixed(1);

console.log("Porcentaje de Activas " + porcentajeActivos)
console.log("Porcentaje de Inactivas " + porcentajeInactivos)


for (var i = 0; i < totalStudents; i++ ) {
	var totalH = 0;
	var totalT = 0;
	

if (totalStudents2[i].active === true){
	 for (var j = 0; j < totalStudents2[i]["sprints"].length; j++){

	 	//console.log("tamaño"+ studentsNum[i]["sprints"].length);
	 totalH += totalStudents2[i]["sprints"][j]["score"]["hse"];
	 totalT += totalStudents2[i]["sprints"][j]["score"]["tech"];
	 }
	promTotalH = totalH / totalStudents2[i]["sprints"].length;
	promTotalT = totalT / totalStudents2[i]["sprints"].length;


	 }


}
console.log("Promedio total en HSE " + promTotalH);
console.log("Promedio total en TECH " + promTotalT);

  




// // //totalStudents = Object.keys(studentsNum).length;





// // // /*for (var i = 0; i = studentsNum.length; i++ ) {
// // // 	totalStudents ++;		
// // }


// // console.log(totalStudents)*/
//función promedio teacher y jedis


 var sumTeacherRating = 0;

    for (var i = 0; i < dataRatings.length; i++) {
      sumTeacherRating += dataRatings[i]['teacher'];
    }

    
    var teacherRating = document.getElementById('teacher-rating');
    console.log("promedio Teachers"+sumTeacherRating)

  
    var jediRating = 0;

    for (i = 0; i < dataRatings.length; i++) {
      jediRating += (dataRatings[i]['jedi']) / dataRatings.length;
   
      console.log(jediRating)
}
}



//funcion NPS
    var cumple = 0;
    var supera = 0;
    for (i = 0; i < totalStudentsRatings2.length;i++) {
      cumple += (totalStudentsRatings2[i]['student']['cumple']) / totalStudentsRatings2.length;
      supera += (totalStudentsRatings2[i]['student']['supera']) / totalStudentsRatings2.length;
console.log("Cumplen la meta " + (cumple).toFixed(1));
console.log("Superan la meta " + (supera).toFixed(1));
}
 var promoters = 0 / totalStudents * 100;
    var passives = 0 / totalStudents * 100;
    var detractors = 0 / totalStudents * 100;
    for (i = 0; i < totalStudentsRatings2.length; i++) {
      promoters += (totalStudentsRatings2[i]['nps']['promoters']) / totalStudentsRatings2.length;
      passives += (totalStudentsRatings2[i]['nps']['passive']) / totalStudentsRatings2.length;
      detractors += (totalStudentsRatings2[i]['nps']['detractors']) / totalStudentsRatings2.length;
console.log("NPS " + (promoters - detractors).toFixed(1) + " %");
}