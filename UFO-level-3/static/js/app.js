// from data.js
var tableData = data;

// YOUR CODE HERE!
// grabs the dataset from tableData and extracts datetime and put them into an array. 
// then delete the duplicates from the array.  
var dateList = filledList(tableData, "datetime");

//adds the items in the array to the drop down in the index.html
select = document.getElementById('dateSelect');
for (date in dateList) {
    select.add(new Option(dateList[date]));
}

//select the ID where the drop down is in the HTML file and wait for a change.
var countryMenu = d3.select("#dateSelect");
countryMenu.on("change", function () {


    // on change, it picks up the selected date and filters the data
    // so an array can be created.     
    var dateItem = document.getElementById("dateSelect");
    var selectedDate = dateItem.options[dateItem.selectedIndex].text;

    // tableData is filtered for the selected date and saved onto filteredDate
    var filteredDate = tableData.filter(d => d.datetime === selectedDate);
    if (selectedDate == "all") { filteredDate = tableData };

    // we then extract all the countries from the filteredDate data, put them into an array, and delete the duplicates. 
    var countryList = filledList(filteredDate, "country");

    // select the ID in the HTML where the drop down is going to be and add the contents of the array into it. 
    select = document.getElementById('countrySelect');
    document.getElementById('countrySelect').innerHTML = "";
    for (country in countryList) {

        select.add(new Option(countryList[country]));
    }


    // wait for a change to happen on the country drop down.  use the selected item to filter the filteredDate table for the next table to be created. 
    var stateMenu = d3.select("#countrySelect");
    stateMenu.on("change", function () {


        // on change, it picks up the selected date and filters the data
        // so an array can be created.     
        var countryItem = document.getElementById("countrySelect");
        var selectedCountry = countryItem.options[countryItem.selectedIndex].text;

        var filteredCountry = filteredDate.filter(d => d.country === selectedCountry);
        if (selectedCountry == "all") { filteredCountry = filteredDate };

        var stateList = filledList(filteredCountry, "state");

        select = document.getElementById('stateSelect');
        document.getElementById('stateSelect').innerHTML = "";
        for (state in stateList) {

            select.add(new Option(stateList[state]));
        }



        var cityMenu = d3.select("#stateSelect");
        cityMenu.on("change", function () {

            var stateItem = document.getElementById("stateSelect");
            var selectedState = stateItem.options[stateItem.selectedIndex].text;

            var filteredState = filteredCountry.filter(d => d.state === selectedState);
            if (selectedState == "all") { filteredState = filteredCountry };

            var cityList = filledList(filteredState, "city");

            select = document.getElementById('citySelect');
            document.getElementById('citySelect').innerHTML = "";
            for (city in cityList) {

                select.add(new Option(cityList[city]));
            }


            var shapeMenu = d3.select("#citySelect");
            shapeMenu.on("change", function () {

                var cityItem = document.getElementById("citySelect");
                var selectedCity = cityItem.options[cityItem.selectedIndex].text;

                var filteredCity = filteredState.filter(d => d.city === selectedCity);
                if (selectedCity == "all") { filteredCity = filteredState };

                var shapeList = filledList(filteredCity, "shape");

                select = document.getElementById('shapeSelect');
                document.getElementById('shapeSelect').innerHTML = "";
                for (shape in shapeList) {

                    select.add(new Option(shapeList[shape]));
                }


                // we wait for a change on the shape dropdown.  when selected, we take that item and filter the filteredCity data for shapes. 
                // then we save that filtered data to dataFrame  <- this is the final table. 
                var dFrame = d3.select("#shapeSelect");
                dFrame.on("change", function () {

                    var shapeItem = document.getElementById("shapeSelect");
                    var selectedShape = shapeItem.options[shapeItem.selectedIndex].text;

                    var dataFrame = filteredCity.filter(d => d.shape === selectedShape);
                    if (selectedShape == "all") { dataFrame = filteredCity };

                    // we then select the tbody class in teh HTML file and write the dataFrame to it. 
                    var tbody = d3.select("tbody").text(" ");

                    dataFrame.forEach(function (ufoData) {

                        var row = tbody.append("tr");

                        Object.entries(ufoData).forEach(function ([key, value]) {

                            var cell = row.append("td");
                            cell.text(value);
                        });
                    });
                });
            });

        });
    });
});
