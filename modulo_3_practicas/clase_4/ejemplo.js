// Función para cargar los datos del archivo JSON
fetch('./doctores.json')
  .then(response => response.json())  // Convierte la respuesta en un objeto JSON
  .then(data => {  // Ahora `data` ya es el objeto JSON (array)
    console.log('Datos cargados correctamente:', data);

    let divDoctores = document.getElementById('capaDoctores');
    
    // Recorremos el arreglo de doctores
    data.forEach(function(elemento, indice) {
        console.log(`El nombre en el índice ${indice} es ${elemento.nombre} ${elemento.apellido}`);
        divDoctores.innerHTML += "<h1>Doctor: " + elemento.nombre + "</h1>";
    });


  })
  .catch(error => {
    console.error('Error al cargar los datos:', error);
  });
