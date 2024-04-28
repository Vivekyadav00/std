// Define a function to save student data
function saveStudentData() {
    // Get input values
    var courseID = document.getElementById("CourseID").value;
    var subjectName = document.getElementById("Subject_Name").value;
    var grade = document.getElementById("Grade").value;

    // Create a table row with student data
    var newRow = "<tr><td>" + courseID + "</td><td>" + subjectName + "</td><td>" + grade + "</td></tr>";

    // Append the new row to the table body
    document.querySelector("#studentTable tbody").innerHTML += newRow;

    // Clear input fields
    document.getElementById("CourseID").value = "";
    document.getElementById("Subject_Name").value = "";
    document.getElementById("Grade").value = "";

    // Display a message that student data is saved
    document.getElementById("studentSaved").innerHTML = "Student data saved successfully.";
}

// Define a function to fetch all students from AWS API
function fetchAllStudents() {
    // Make an HTTP GET request to AWS API endpoint
    fetch('YOUR_AWS_API_ENDPOINT')
    .then(response => response.json())
    .then(data => {
        // Clear existing table rows
        document.querySelector("#studentTable tbody").innerHTML = "";

        // Iterate over each student and append to the table
        data.forEach(student => {
            var newRow = "<tr><td>" + student.CourseID + "</td><td>" + student.Subject_Name + "</td><td>" + student.Grade + "</td></tr>";
            document.querySelector("#studentTable tbody").innerHTML += newRow;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Attach event listeners to buttons
document.getElementById("savestudent").addEventListener("click", saveStudentData);
document.getElementById("getstudents").addEventListener("click", fetchAllStudents);
