class Empleado {
  constructor(public nombre: string, public salario: number) {}
}

class GestionEmpleados {
  private empleados: Empleado[] = [];

  agregarEmpleado(nombre: string, salario: number): void {
    this.empleados.push(new Empleado(nombre, salario));
    this.mostrar(`Empleado ${nombre} agregado correctamente.`);
  }

  buscarEmpleado(nombre: string): void {
    const encontrados = this.empleados.filter(emp =>
      emp.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (encontrados.length > 0) {
      const resultados = encontrados.map(emp => 
        `Nombre: ${emp.nombre}, Salario: $${emp.salario.toFixed(2)}`
      ).join("\n");
      this.mostrar(resultados);
    } else {
      this.mostrar(`No se encontró al empleado '${nombre}'.`);
    }
  }

  calcularSalarioPromedio(): void {
    if (this.empleados.length === 0) {
      this.mostrar("No hay empleados registrados.");
      return;
    }
    const total = this.empleados.reduce((sum, emp) => sum + emp.salario, 0);
    const promedio = total / this.empleados.length;
    this.mostrar(`Salario promedio: $${promedio.toFixed(2)}`);
  }

  mostrar(texto: string): void {
    const output = document.getElementById("output");
    if (output) output.textContent = texto;
  }
}

const gestion = new GestionEmpleados();

function agregarEmpleado() {
  const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
  const salarioStr = (document.getElementById("salario") as HTMLInputElement).value;
  const salario = parseFloat(salarioStr);

  if (nombre && !isNaN(salario)) {
    gestion.agregarEmpleado(nombre, salario);
  } else {
    gestion.mostrar("Ingrese un nombre y un salario válido.");
  }
}

function buscarEmpleado() {
  const nombre = (document.getElementById("buscarNombre") as HTMLInputElement).value;
  if (nombre) {
    gestion.buscarEmpleado(nombre);
  } else {
    gestion.mostrar("Ingrese un nombre para buscar.");
  }
}

function calcularPromedio() {
  gestion.calcularSalarioPromedio();
}
