// 02-conditionals.js
// Practicing JavaScript conditionals

const age = 20;
const hasStudentId = true;
const score = 87;

function checkVotingAge(personAge) {
  if (personAge >= 18) {
    return "You are old enough to vote.";
  } else {
    return "You are not old enough to vote.";
  }
}

function checkStudentDiscount(studentStatus) {
  if (studentStatus) {
    return "You qualify for the student discount.";
  } else {
    return "You do not qualify for the student discount.";
  }
}

function checkGrade(testScore)
{
  if (testScore >= 90) 
  {
    return "Grade: A";
  } 
  else if (testScore >= 80) 
  {
    return "Grade: B";
  } 
  else if (testScore >= 70) 
  {   
    return "Grade: C";
  } 
  else if (testScore >= 60) 
  {
    return "Grade: D";
  } 
  else 
  {
    return "Grade: F";
  }
}

console.log(checkVotingAge(age));
console.log(checkStudentDiscount(hasStudentId));
console.log(checkGrade(score));