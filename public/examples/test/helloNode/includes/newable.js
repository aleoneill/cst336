function Student(name, year, gpa) {
    this.name = name;
    this.year = year;
    this.gpa = gpa;
    this.greeting = () => {
        console.log(`Hello! My name is ${this.name}.`);
    }
}

module.exports = Student;

Student.prototype.athlete = function() {
    return this.gpa < 3.0;
}