// Add your API endpoint here
var API_ENDPOINT = "API_ENDPOIND_PASTE_HERE";

// AJAX POST request to save student data
document.getElementById("savestudent").onclick = function(){
    var inputData = {
        "CourseID": $('#CourseID').val(),
        "Subject_Name": $('#Subject_Name').val(),
        "Grade": $('#Grade').val(),
       
    };
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            document.getElementById("studentSaved").innerHTML = "Student Data Saved!";
        },
        error: function () {
            alert("Error saving student data.");
        }
    });
}

// AJAX GET request to retrieve all students
document.getElementById("getstudents").onclick = function(){  
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            $('#Subjectgrades tr').slice(1).remove();
            jQuery.each(response, function(i, data) {          
                $("#Subjectgrades").append("<tr> \
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
