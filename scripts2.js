// Add your API endpoint here
var API_ENDPOINT = "https://tigrmjrrt7.execute-api.us-east-1.amazonaws.com/Studentgrades";

// Function to handle form submission and save student data
function saveStudentData() {
    var inputData = {
        "CourseID": $('#CourseID').val(),
        "Subject_Name": $('#Subject_Name').val(),
        "Grade": $('#Grade').val()
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data: JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("studentSaved").innerHTML = "Student Data Saved!";
        },
        error: function () {
            alert("Error saving student data.");
        }
    });
}

// Function to retrieve all students
function getStudents() {
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#Subjectgrades tbody').empty(); // Clear table body
            response.forEach(function(data) {
                $("#Subjectgrades tbody").append("<tr> \
                    <td>" + data['CourseID'] + "</td> \
                    <td>" + data['Subject_Name'] + "</td> \
                    <td>" + data['Grade'] + "</td> \
                    </tr>");
            });
        },
        error: function () {
            alert("Error retrieving student data.");
        }
    });
}

// Event listener for form submission
$(document).ready(function() {
    $('#studentForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission
        saveStudentData(); // Call function to save student data
    });

    // Event listener for button click to retrieve students
    $('#getstudents').click(function() {
        getStudents(); // Call function to retrieve students
    });
});
