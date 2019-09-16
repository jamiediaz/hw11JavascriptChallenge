
// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

button.on("click", function() {
    
    var inputDate = d3.select("#datetime");
    var dateValue = inputDate.property("value");
    var filteredDate = tableData.filter(d => d.datetime === dateValue);
    if (dateValue == ""){filteredDate = tableData};

    var inputCity = d3.select("#cityname");
    var cityValue = inputCity.property("value");
    var filteredCity = filteredDate.filter(c => c.city === cityValue);
    if (cityValue == ""){filteredCity = filteredDate};

    var inputState = d3.select("#statename");
    var stateValue = inputState.property("value");
    var filteredState = filteredCity.filter(s => s.state === stateValue);
    if (stateValue == ""){filteredState = filteredCity};

    var inputCountry = d3.select("#countryname");
    var countryValue = inputCountry.property("value");
    var filteredCountry = filteredState.filter(c => c.country === countryValue);
    if (countryValue == ""){filteredCountry = filteredState};

    var inputShape = d3.select("#shapename");
    var shapeValue = inputShape.property("value");
    var filteredShape = filteredCountry.filter(s => s.shape === shapeValue);
    if (shapeValue == ""){filteredShape = filteredCountry};



    
    var tbody = d3.select("tbody").text(" ");
    
    console.log(filteredShape);

    filteredShape.forEach(function(ufoData) {
        console.log(ufoData);
        var row = tbody.append("tr");

        Object.entries(ufoData).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
        
    });
    
});
