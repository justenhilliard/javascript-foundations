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
