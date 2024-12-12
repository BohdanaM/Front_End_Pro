class Coach {
  constructor(name, specialization, rating) {
    this.name = name;
    this.specialization = specialization;
    this.rating = rating;
  }

  showInfo() {
    console.log(
      `Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`
    );
  }
}

const coach1 = new Coach("John Doe", "Fitness", 4.7);
const coach2 = new Coach("Alice Smith", "Yoga", 4.9);

coach1.showInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"
coach2.showInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"
