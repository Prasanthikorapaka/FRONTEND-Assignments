// Creating an object "person"
let person = {
    firstname: "John",
    lastname: "Doe"
};

// Accessing properties using dot notation
document.body.innerHTML += `<p>First Name: ${person.firstname}</p>`;

// Accessing properties using bracket notation
document.body.innerHTML += `<p>Last Name: ${person["lastname"]}</p>`;
