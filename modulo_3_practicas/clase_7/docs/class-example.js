class Persona {
    // Constructor de la clase
    constructor(nombre, edad) {
      // Propiedades privadas usando convenciones de prefijo "_" para indicar que son privadas
      this._nombre = nombre;
      this._edad = edad;
    }
  
    // Método getter para obtener el nombre
    get nombre() {
      return this._nombre;
    }
  
    // Método setter para establecer el nombre
    set nombre(nuevoNombre) {
      if (nuevoNombre.length > 0) {
        this._nombre = nuevoNombre;
      } else {
        console.error("El nombre no puede estar vacío");
      }
    }
  
    // Método getter para obtener la edad
    get edad() {
      return this._edad;
    }
  
    // Método setter para establecer la edad
    set edad(nuevaEdad) {
      if (nuevaEdad >= 0) {
        this._edad = nuevaEdad;
      } else {
        console.error("La edad no puede ser negativa");
      }
    }
  
    // Método para mostrar información de la persona
    mostrarInformacion() {
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
  }
  
  // Uso de la clase Persona
  const persona1 = new Persona("Juan", 25);
  
  // Usando los métodos getter
  console.log(persona1.nombre); // "Juan"
  console.log(persona1.edad);   // 25
  
  // Usando los métodos setter
  persona1.nombre = "María";
  persona1.edad = 30;
  
  // Mostrando información actualizada
  persona1.mostrarInformacion(); // "Nombre: María, Edad: 30"
  
  // Intentando establecer valores inválidos
  persona1.nombre = "";  // Error: "El nombre no puede estar vacío"
  persona1.edad = -5;    // Error: "La edad no puede ser negativa"
  