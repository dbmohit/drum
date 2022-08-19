function Student(name,roll,subject){
    this.name = name;
    this.roll = roll;
    this.subject = subject;
}
var student1 = new Student("harry",54,["eng","hindi"]);
console.log(student1.subject);