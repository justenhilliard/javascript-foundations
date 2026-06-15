const student = {
    name: "Justen Hilliard",
    major: "Computer Science",
    concentration: "AI/ML",
    minor: "Data Science",
    graduationYear: 2028
};

console.log("Student Profile:");
console.log(student);

console.log(`Name: ${student.name}`);
console.log(`Major: ${student.major}`);

console.log(`Concentration: ${student["concentration"]}`);
console.log(`Minor: ${student["minor"]}`);

student.major = "Computer Science";
student.currentFocus = "JavaScript";

console.log("\nUpdated Student Profile:");
console.log(student);

student.skills = ["HTML", "CSS", "JavaScript"];
student.certifications = {
    responsiveWebDesign: true,
    javascript: false
};

console.log("\nSkills and Certifications:");
console.log(student.skills);
console.log(student.certifications);


const wcwmProject = {
    name: "WCWM Digital Hub",
    type: "Website Redesign",
    role: "Web Director",
    techStack: {
        frontend: "HTML, CSS, JavaScript",
        cms: "WordPress",
        design: "Figma"
    },
    goals: {
        improveListening: true,
        improveSchedule: true,
        improveShowDiscovery: true,
        improveDJProfiles: true
    }
};

console.log("\nWCWM Project:");
console.log(wcwmProject.name);
console.log(wcwmProject.techStack.frontend);
console.log(wcwmProject.goals.improveSchedule);

const application = {
    company: "Capital One",
    program: "Technology Internship Program",
    status: "Preparing",
    priority: "High",
    displayApplication: function () {
        return `${this.company} - ${this.program}: ${this.status}`;
    }
};

console.log("\nApplication:");
console.log(application.displayApplication());


application.updateStatus = function (newStatus) {
    this.status = newStatus;
};

application.updateStatus("Practicing CodeSignal");

console.log("\nUpdated Application:");
console.log(application.displayApplication());


const paycheck = {
    hoursWorked: 24,
    hourlyRate: 13,
    calculateGrossPay: function () {
        return this.hoursWorked * this.hourlyRate;
    }
};

console.log("\nPaycheck:");
console.log(`Gross pay: $${paycheck.calculateGrossPay()}`);