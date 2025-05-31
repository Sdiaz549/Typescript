var students = [];
function addStudent() {
    var name = document.getElementById("student-name").value.trim();
    var grade = parseFloat(document.getElementById("student-grade").value);
    if (!name || isNaN(grade) || grade < 0 || grade > 10) {
        alert("Ingrese un nombre válido y una nota entre 0 y 10.");
        return;
    }
    students.push({ name: name, grade: grade });
    alert("Estudiante \"".concat(name, "\" agregado con nota ").concat(grade, "."));
    // Limpiar campos
    document.getElementById("student-name").value = "";
    document.getElementById("student-grade").value = "";
}
function searchStudent() {
    var searchName = document.getElementById("search-student").value.trim().toLowerCase();
    var resultDiv = document.getElementById("search-result");
    var found = students.filter(function (s) { return s.name.toLowerCase().includes(searchName); });
    if (found.length === 0) {
        resultDiv.innerHTML = "No se encontró ningún estudiante.";
    }
    else {
        resultDiv.innerHTML = found.map(function (s) {
            return "Estudiante: ".concat(s.name, ", Nota: ").concat(s.grade);
        }).join("<br>");
    }
}
function calculateAverage() {
    var averageElement = document.getElementById("average-grade");
    if (students.length === 0) {
        averageElement.textContent = "No hay estudiantes registrados.";
        return;
    }
    var total = students.reduce(function (acc, s) { return acc + s.grade; }, 0);
    var average = total / students.length;
    averageElement.textContent = "Promedio general: ".concat(average.toFixed(2));
}
// Exportar funciones globalmente
window.addStudent = addStudent;
window.searchStudent = searchStudent;
window.calculateAverage = calculateAverage;
