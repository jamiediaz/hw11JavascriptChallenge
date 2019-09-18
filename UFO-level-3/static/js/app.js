// from data.js
var tableData = data;

// YOUR CODE HERE!
// var button = d3.select("#filter-btn");


// button.on("click", function () {

// cleans the data of duplicates
var dateList = filledList(tableData, "datetime");

//adds the items in the array to the drop down in the index.html
select = document.getElementById('dateSelect');
for (date in dateList) {
    select.add(new Option(dateList[date]));
}


var countryMenu = d3.select("#dateSelect");
countryMenu.on("change", function () {


    // on change, it picks up the selected date and filters the data
    // so an array can be created.     
    var dateItem = document.getElementById("dateSelect");
    var selectedDate = dateItem.options[dateItem.selectedIndex].text;

    var filteredDate = tableData.filter(d => d.datetime === selectedDate);
    if (selectedDate == "all") { filteredDate = tableData };

    var countryList = filledList(filteredDate, "country");

    select = document.getElementById('countrySelect');
    document.getElementById('countrySelect').innerHTML = "";
    for (country in countryList) {

        select.add(new Option(countryList[country]));
    }

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


            // on change, it picks up the selected date and filters the data
            // so an array can be created.     
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


                // on change, it picks up the selected date and filters the data
                // so an array can be created.     
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


                var dFrame = d3.select("#shapeSelect");
                dFrame.on("change", function () {

                    var shapeItem = document.getElementById("shapeSelect");
                    var selectedShape = shapeItem.options[shapeItem.selectedIndex].text;


                    var dataFrame = filteredCity.filter(d => d.shape === selectedShape);
                    if (selectedShape == "all") { dataFrame = filteredCity };



                    var tbody = d3.select("tbody").text(" ");

                    console.log(dataFrame);

                    dataFrame.forEach(function (ufoData) {
                        //     // console.log(ufoData);
                        var row = tbody.append("tr");

                        Object.entries(ufoData).forEach(function ([key, value]) {
                            //         // console.log(key, value);
                            var cell = row.append("td");
                            cell.text(value);
                        });
                    });
                });
            });

        });
    });
});
