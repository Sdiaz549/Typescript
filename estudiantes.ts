interface Student {
  name: string;
  grade: number;
}

let students: Student[] = [];

function addStudent(): void {
  const name = (document.getElementById("student-name") as HTMLInputElement).value.trim();
  const grade = parseFloat((document.getElementById("student-grade") as HTMLInputElement).value);

  if (!name || isNaN(grade) || grade < 0 || grade > 10) {
    alert("Ingrese un nombre válido y una nota entre 0 y 10.");
    return;
  }

  students.push({ name, grade });
  alert(`Estudiante "${name}" agregado con nota ${grade}.`);

  // Limpiar campos
  (document.getElementById("student-name") as HTMLInputElement).value = "";
  (document.getElementById("student-grade") as HTMLInputElement).value = "";
}

function searchStudent(): void {
  const searchName = (document.getElementById("search-student") as HTMLInputElement).value.trim().toLowerCase();
  const resultDiv = document.getElementById("search-result") as HTMLDivElement;

  const found = students.filter(s => s.name.toLowerCase().includes(searchName));

  if (found.length === 0) {
    resultDiv.innerHTML = "No se encontró ningún estudiante.";
  } else {
    resultDiv.innerHTML = found.map(s =>
      `Estudiante: ${s.name}, Nota: ${s.grade}`
    ).join("<br>");
  }
}

function calculateAverage(): void {
  const averageElement = document.getElementById("average-grade") as HTMLParagraphElement;

  if (students.length === 0) {
    averageElement.textContent = "No hay estudiantes registrados.";
    return;
  }

  const total = students.reduce((acc, s) => acc + s.grade, 0);
  const average = total / students.length;
  averageElement.textContent = `Promedio general: ${average.toFixed(2)}`;
}

// Exportar funciones globalmente
(window as any).addStudent = addStudent;
(window as any).searchStudent = searchStudent;
(window as any).calculateAverage = calculateAverage;
