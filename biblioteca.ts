// Tipo de dato para representar un libro
type Libro = {
  titulo: string;
  autor: string;
  anio: number;
};

// Base de datos de libros (pre-cargados)
let biblioteca: Libro[] = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: 1967 },
  { titulo: "1984", autor: "George Orwell", anio: 1949 },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605 }
];

// Función para agregar un libro a la biblioteca
function agregarLibro(titulo: string, autor: string, anio: number): void {
  const nuevoLibro: Libro = { titulo, autor, anio };
  biblioteca.push(nuevoLibro);
  console.log(`Libro "${titulo}" agregado a la biblioteca.`);
}

// Función para buscar libros por título
function buscarLibroPorTitulo(titulo: string): Libro[] {
  return biblioteca.filter(libro => libro.titulo.toLowerCase().includes(titulo.toLowerCase()));
}

// Función para mostrar todos los libros
function mostrarLibros(): void {
  if (biblioteca.length === 0) {
    console.log("La biblioteca está vacía.");
    return;
  }

  console.log("Lista de libros en la biblioteca:");
  biblioteca.forEach((libro, index) => {
    console.log(`${index + 1}. "${libro.titulo}" por ${libro.autor} (${libro.anio})`);
  });
}

// Ejemplo de uso
mostrarLibros();
agregarLibro("El Principito", "Antoine de Saint-Exupéry", 1943);
console.log("Resultado de búsqueda:");
console.log(buscarLibroPorTitulo("quijote"));
mostrarLibros();
