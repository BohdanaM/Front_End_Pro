class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  present() {
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === null) {
        this.attendance[i] = true;
        return;
      }
    }
    console.log("Масив відвідуваності заповнений");
  }

  absent() {
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === null) {
        this.attendance[i] = false;
        return;
      }
    }
    console.log("Масив відвідуваності заповнений");
  }

  summary() {
    const attendedClasses = this.attendance.filter(
      (status) => status === true
    ).length;
    const totalClasses = this.attendance.length;
    const averageAttendance =
      totalClasses > 0 ? attendedClasses / totalClasses : 0;
    const averageGrade = this.getAverageGrade();

    if (averageGrade > 90 && averageAttendance > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || averageAttendance > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Маша", "Іваненко", 2000);
const student2 = new Student("Саша", "Петренко", 2007);
const student3 = new Student("Паша", "Сидоренко", 2002);

student1.grades.push(97, 85, 94);
student1.present();
student1.present();
student1.absent();

student2.grades.push(77, 83, 88);
student2.present();
student2.absent();
student2.present();

student3.grades.push(99, 92, 95);
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();

console.log(
  `${student1.firstName} (${student1.getAge()}): ${student1.summary()}`
);
console.log(
  `${student2.firstName} (${student2.getAge()}): ${student2.summary()}`
);
console.log(
  `${student3.firstName} (${student3.getAge()}): ${student3.summary()}`
);
