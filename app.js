class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  getGrade() {
    if (this.marks >= 80) {
      return "A";
    } else if (this.marks >= 70) {
      return "B";
    } else if (this.marks >= 50) {
      return "C";
    } else {
      return "F";
    }
  }
}

const students = [
  new Student("Ali", 85),
  new Student("Sara", 72),
  new Student("Ahmed", 48),
  new Student("Ayesha", 91),
  new Student("Bilal", 63),
  new Student("Fatima", 39)
];

console.log("Student Results:");

students.forEach((student) => {
  const label = student.marks >= 50 ? "Pass" : "Fail";

  console.log(
    `${student.name}: ${student.marks} - Grade ${student.getGrade()} - ${label}`
  );
});

const passingNames = students
  .filter((student) => student.marks >= 50)
  .map((student) => student.name);

const totalMarks = students.reduce(
  (total, student) => total + student.marks,
  0
);

const classAverage = totalMarks / students.length;

const sortedStudents = [...students].sort(
  (a, b) => b.marks - a.marks
);

const [topScorer] = sortedStudents;

console.log("Passing Names:", passingNames);
console.log("Class Average:", classAverage.toFixed(2));
console.log("Top Scorer:", topScorer.name);
