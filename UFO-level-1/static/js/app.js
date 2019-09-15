

// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");

button.on("click", function() {
    
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");
    
    

    var filteredData = tableData.filter(d => d.datetime === inputValue);
    // function filterDate(dataItem) {
    //     return dataItem.inputValue;
    // }
    // var filteredData = tableData.filter(filterDate);

    var tbody = d3.select("tbody").text(" ");
    
    
    console.log(filteredData);

    filteredData.forEach(function(ufoData) {
        console.log(ufoData);
        var row = tbody.append("tr");

        Object.entries(ufoData).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });

        
    });
    
});
