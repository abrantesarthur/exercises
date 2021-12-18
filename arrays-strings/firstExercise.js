// reference: https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

var countStudents = function(students, sandwiches) {
    let studentsUnableToEat = 0;
    while(students.length > 0 && studentsUnableToEat < students.length) {
        if(students[0] == sandwiches[0]) {
            studentsUnableToEat = 0;
            students.shift();
            sandwiches.shift();
        } else {
            studentsUnableToEat++;
            let frontStudent = students[0];
            students.shift();
            students.push(frontStudent);
        }
    }
    return studentsUnableToEat;
};

console.log(countStudents([1,1,0,0],[0,1,0,1]))
console.log(countStudents([1,1,1,0,0,1],[1,0,0,0,1,1]))
