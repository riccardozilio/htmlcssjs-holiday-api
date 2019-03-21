// funzione di assegnazione mese

function getMonthName(month){
  var mom = moment();
  mom.month(month);

  var monthName = mom.format("MMMM");
  return monthName;
}

// funzione di assegnazione numero giorni del mese

function getMonthDay(year, month){
  var mom = moment();
  mom.year(year);
  mom.month(month);
  var numeroGiorni = mom.daysInMonth();
  return numeroGiorni;
  }

// funzione che da il formato della data per anno

  function humanDataYear(year){

    var mom = moment();
    mom.year(year);
    // mom.month(month);
    // mom.date(day);
    var year = mom.format("YY");
    return year;
  }

  // funzione che da il formato della data per mese

    function humanDataMonth(month){

      var mom = moment();
      // mom.year(year);
      mom.month(month);
      // mom.date(day);
      var month = mom.format("MMMM");
      return month;
    }


    // funzione che da il formato della data per giorno

      function humanDataDate(day){

        var mom = moment();
        // mom.year(year);
        // mom.month(month);
        mom.date(day);
        var date = mom.format("DD");
        return date;
      }

      // funzione che da il formato della data per la macchina

        function machineDate(year, month, day){

          var mom = moment();
          mom.year(year);
          mom.month(month);
          mom.date(day);
          var machineData = mom.format("YYYY-MM-DD");
          return machineData;


// funzione di creazione titolo


function printTitle(year, month){
  var titleMonth = $(".title__month");
  var monthName =getMonthName(month);
  var monthDay = getMonthDay(year, month);

  titleMonth.text(monthName + ": 1-" + monthDay);
}

// funzione che stampa i giorni con il loro template

function printDays(year, month){
  var monthDay = getMonthDay(year, month);
  var daylist = $(".contenitore__giorni");
  var template = $("#day-template").html();
  var compiled = Handlebars.compile(template);

  for (var day=1; day<=monthDay; day++) {

        var templateDate = {

      year: humanDataYear(year),
      month: humanDataMonth(month),
      date: humanDataDate(day),
      machineData: machineDate(year, month, day)
    }

    var liday = compiled(templateDate);
    daylist.append(liday);

  }
}

// funzione che stampa i giorni festivi

function printHolidays(year, month){

  var outData = {
    year: year,
    month: month
  }

  $.ajax({
    url : "https://flynn.boolean.careers/exercises/api/holidays",
    data: outData,
    method: "GET",
    success: function(inData, state){
      if (inData.success == true) {
        var holidays = inData.response;
        console.log(holidays);
      }else {
        console.log("comunication error")
      }



    },
    error: function(request, state, error){
      console.log("request",request);
      console.log("state",state);
      console.log("error",error);
    }


  });
}














function init(){
  var year = 2018;
  var month = 0;
  printTitle(year, month);
  printDays(year, month);
  printHolidays(year, month)


}
 $(document).ready(init);
