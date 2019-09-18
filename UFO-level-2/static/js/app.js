// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

button.on("click", function() {

    // trying to turn below into one function -- 
    //
    // function filtering(id,prevTable,type){
    // console.log(type);
    //     var input1 = d3.select(id);
    // var value = input1.property("value");
    // console.log(value);

    
    // if (value == ""){var filtered = prevTable}
    // else {    
    
    //     var filtered = prevTable.filter(d => d.type === value);
    //     console.log(filtered);    }
    // console.log(filtered);
    // return filtered;
    // };


    // filteredDataA = filtering("#datetime", tableData, datetime);
    // console.log(filteredDataA);
    // filteredDataB = filtering("#cityname", filteredDataA, city);
    // filteredDataA = filtering("#statename", filteredDataB, state);
    // filteredDataB = filtering("#countryname", filteredDataA, country);
    // filteredDataA = filtering("#shapename", filteredDataB, shape);

    //first select the datetime ID and put it to a variable. 
    var inputDate = d3.select("#datetime");

    // Get the value of id=datetime
    var dateValue = inputDate.property("value");

    // take the value (in this case the date), and use it to filter the data 
    // in data.js.  
    var filteredDate = tableData.filter(d => d.datetime === dateValue);
    
    // this checks to see if the input form is left blank.  If blank then no filter.  
    // use the previous table instead. 
    if (dateValue == "") { filteredDate = tableData };

    var inputCity = d3.select("#cityname");
    var cityValue = inputCity.property("value");
    var filteredCity = filteredDate.filter(c => c.city === cityValue);
    if (cityValue == "") { filteredCity = filteredDate };

    var inputState = d3.select("#statename");
    var stateValue = inputState.property("value");
    var filteredState = filteredCity.filter(s => s.state === stateValue);
    if (stateValue == "") { filteredState = filteredCity };

    var inputCountry = d3.select("#countryname");
    var countryValue = inputCountry.property("value");
    var filteredCountry = filteredState.filter(c => c.country === countryValue);
    if (countryValue == "") { filteredCountry = filteredState };

    var inputShape = d3.select("#shapename");
    var shapeValue = inputShape.property("value");
    var filteredShape = filteredCountry.filter(s => s.shape === shapeValue);
    if (shapeValue == "") { filteredShape = filteredCountry };



    var tbody = d3.select("tbody").text(" ");

    

    filteredShape.forEach(function(ufoData) {
    
        var row = tbody.append("tr");

        Object.entries(ufoData).forEach(function([key, value]) {
    
            var cell = row.append("td");
            cell.text(value);
        });

    });

});