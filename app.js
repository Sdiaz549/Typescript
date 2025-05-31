var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    return Empleado;
}());
var GestionEmpleados = /** @class */ (function () {
    function GestionEmpleados() {
        this.empleados = [];
    }
    GestionEmpleados.prototype.agregarEmpleado = function (nombre, salario) {
        this.empleados.push(new Empleado(nombre, salario));
        this.mostrar("Empleado ".concat(nombre, " agregado correctamente."));
    };
    GestionEmpleados.prototype.buscarEmpleado = function (nombre) {
        var encontrados = this.empleados.filter(function (emp) {
            return emp.nombre.toLowerCase() === nombre.toLowerCase();
        });
        if (encontrados.length > 0) {
            var resultados = encontrados.map(function (emp) {
                return "Nombre: ".concat(emp.nombre, ", Salario: $").concat(emp.salario.toFixed(2));
            }).join("\n");
            this.mostrar(resultados);
        }
        else {
            this.mostrar("No se encontr\u00F3 al empleado '".concat(nombre, "'."));
        }
    };
    GestionEmpleados.prototype.calcularSalarioPromedio = function () {
        if (this.empleados.length === 0) {
            this.mostrar("No hay empleados registrados.");
            return;
        }
        var total = this.empleados.reduce(function (sum, emp) { return sum + emp.salario; }, 0);
        var promedio = total / this.empleados.length;
        this.mostrar("Salario promedio: $".concat(promedio.toFixed(2)));
    };
    GestionEmpleados.prototype.mostrar = function (texto) {
        var output = document.getElementById("output");
        if (output)
            output.textContent = texto;
    };
    return GestionEmpleados;
}());
var gestion = new GestionEmpleados();
function agregarEmpleado() {
    var nombre = document.getElementById("nombre").value;
    var salarioStr = document.getElementById("salario").value;
    var salario = parseFloat(salarioStr);
    if (nombre && !isNaN(salario)) {
        gestion.agregarEmpleado(nombre, salario);
    }
    else {
        gestion.mostrar("Ingrese un nombre y un salario válido.");
    }
}
function buscarEmpleado() {
    var nombre = document.getElementById("buscarNombre").value;
    if (nombre) {
        gestion.buscarEmpleado(nombre);
    }
    else {
        gestion.mostrar("Ingrese un nombre para buscar.");
    }
}
function calcularPromedio() {
    gestion.calcularSalarioPromedio();
}
