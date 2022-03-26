var host="https://mayanksinha-springproject.herokuapp.com"
var userId = "mayanksinha2399@gmail.com"
function customReportWithShow() {
    document.getElementById("monthlyWithShow").innerHTML = "";
   createEmptyTable(monthlyWithShow)
    hitAPI(true, monthlyWithShow);

}
function createEmptyTable(table)
{
    const thead = document.createElement("thead");

    const date = document.createElement("th");
    date.textContent = "Date";
    thead.appendChild(date);

    const month = document.createElement("th");
    month.textContent = "month";
    thead.appendChild(month);

    const Year = document.createElement("th");
    Year.textContent = "Year";
    thead.appendChild(Year);

    const workedHours = document.createElement("th");
    workedHours.textContent = "Worked Hours";
    thead.appendChild(workedHours);

    const extraHours = document.createElement("th");
    extraHours.textContent = "Extra Hours";
    thead.appendChild(extraHours);
    const lowHours = document.createElement("th");
    lowHours.textContent = "Low Hours";
    thead.appendChild(lowHours);
    const moreInfo = document.createElement("th");
    moreInfo.textContent = "More Info";
    thead.appendChild(moreInfo);

    table.appendChild(thead)
}
function customReportWithoutShow() {
    document.getElementById("monthlyWithoutShow").innerHTML = "";
   createEmptyTable(monthlyWithoutShow)
    hitAPI(false, monthlyWithoutShow);

}

function hitAPI(show, tablename) {

    var request = new XMLHttpRequest()

    request.open('POST', host + '/monthly-report-withoutshow/' + userId, true)
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Accept", "*/*");
    request.setRequestHeader("Accept-Encoding", "gzip, deflate, br")
    request.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    request.setRequestHeader('Access-Control-Allow-Credentials', 'true');

    var startMonth = document.getElementById("startMonth").value;;
    var startYear = document.getElementById("startYear").value;;
    var endMonth = document.getElementById("endMonth").value;;
    var endYear = document.getElementById("endYear").value;;

    var params = '{"startMonth":' + startMonth + ',"startYear":' + startYear + ',"endMonth":' + endMonth + ',"endYear":' + endYear + '}';
    request.onload = function () {

        var data = JSON.parse(request.responseText).mothlyReportList
        populateTable(data, tablename);
    }


    // Send request
    request.send(params);
}
function populateTable(data, table) {
    data.forEach(row => {
        const tr = document.createElement("tr");
        // .forEach(cell =>{row
        const td = document.createElement("td");
        td.textContent = row.date;
        tr.appendChild(td);
        const td1 = document.createElement("td");
        td1.textContent = row.month;
        tr.appendChild(td1);
        const td2 = document.createElement("td");
        td2.textContent = row.year;
        tr.appendChild(td2);

        const workedHours = document.createElement("td");
        workedHours.textContent = row.workedHours;
        tr.appendChild(workedHours);

        const extraHours = document.createElement("td");
        extraHours.textContent = row.extraHours;
        tr.appendChild(extraHours);

        const lowHours = document.createElement("td");
        lowHours.textContent = row.lowHours;
        tr.appendChild(lowHours);

        const moreInfo = document.createElement("td");
        moreInfo.textContent = "more Info";
        tr.appendChild(moreInfo);
        // });
        table.appendChild(tr);
    });
}