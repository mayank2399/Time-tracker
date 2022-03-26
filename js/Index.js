var host="https://mayanksinha-springprojects.herokuapp.com"
function addEntry() {
    var request = new XMLHttpRequest()


    request.open('POST', host+'/add-entry', true)
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Accept", "*/*");
    request.setRequestHeader("Accept-Encoding","gzip, deflate, br")

    request.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    request.setRequestHeader('Access-Control-Allow-Credentials', 'true');
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    var startHour = document.getElementById("startHour").value;
    var startMinute = document.getElementById("startMinute").value;



    var endHour = document.getElementById("endHour").value;
    var endMinute = document.getElementById("endMinute").value;


    var taskName = document.getElementById("taskName").value;
    var taskNo = document.getElementById("taskNo").value;

    var description = document.getElementById("description").value;
    var userId ="mayanksinha2399@gmail.com"
    var show = document.getElementById("show").value;



    var params = '{"date":' + date + ',"month":' + month + ',"year":' + year + ',"startHour":' + startHour + ',"startMinute":' + startMinute + ',"endHour":' + endHour + ',"endMinute":' + endMinute + ',"description":"' + description + '","userId":"' + userId + '","taskName":"' + taskName + '","taskNo":"' + taskNo + '","show":' + show + '}';
    console.log(params)
    request.onload = function () {

        var data = JSON.parse(this.response)
        console.log(data);
        
    }

    
    // Send request
    request.send(params);
}
