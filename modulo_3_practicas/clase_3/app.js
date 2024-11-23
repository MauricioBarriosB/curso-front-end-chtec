const fs = require('fs'); // crear leer etc archivos
const readline = require('readline'); // leer por consola

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//esta funcion lee el archivo tareas.json
function cargarTareas() {
    const data = fs.readFileSync('tareas.json', 'utf8');
    return JSON.parse(data);
}
//esta funcion escribe en el archivo tareas.json
function guardarTareas(tareas) {
    fs.writeFileSync('tareas.json', JSON.stringify(tareas, null, 2));
}
//esta funcion es para agregar tareas en el documento tareas.json
function agregarTarea(nombre) {
    const tareas = cargarTareas();
    tareas.push({ nombre, completada: false });
    guardarTareas(tareas);
    console.log(`Tarea "${nombre}" agregada.`);
}

function mostrarTareas() {
    const tareas = cargarTareas();
    console.log("Lista de Tareas:");
    tareas.forEach((tarea, index) => {
        console.log(`${index + 1}. ${tarea.nombre} - ${tarea.completada ? "Completada" :"Pendiente"}`);
    });
}

function eliminarTarea(index) {
    const tareas = cargarTareas();
    if (index >= 0 && index < tareas.length) {
        const tareaEliminada = tareas.splice(index, 1);
        guardarTareas(tareas);
        console.log(`Tarea "${tareaEliminada[0].nombre}" eliminada.`);
    } else {
        console.log("Índice no válido.");
    }
}

function menu() {
    console.log("\nGestor de Tareas:");
    console.log("1. Agregar Tarea");
    console.log("2. Ver Tareas");
    console.log("3. Eliminar Tarea");
    console.log("4. Salir");
    rl.question("Selecciona una opción: ", (opcion) => {
        if (opcion === "1") {
            rl.question("Nombre de la tarea: ", (nombre) => {
                agregarTarea(nombre);
                menu();
            });
        } else if (opcion === "2") {
            mostrarTareas();
            menu();
        } else if (opcion === "3") {
            rl.question("Número de la tarea a eliminar: ", (index) => {
                eliminarTarea(parseInt(index) - 1);
                menu();
            });
        } else if (opcion === "4") {
            rl.close();
        } else {
            console.log("Opción no válida.");
            menu();
        }
    });
}

menu();