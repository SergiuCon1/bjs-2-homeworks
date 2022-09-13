function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...marks) {
  this.marks = marks;
}

Student.prototype.getAverage = function () {
  let sumMarks = 0;
  for (let mark of this.marks) {
    sumMarks += mark;
  }
  return sumMarks / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete Student.subject;
  delete Student.marks;
  this.excluded = reason;
}
// ваш код для остальных методов