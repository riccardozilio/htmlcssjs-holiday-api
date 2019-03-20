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

// funzione che da il formato della data

  function humanData(year, month, day){

    var mom = moment();
    mom.year(year);
    mom.month(month);
    mom.date(day);
    var date = mom.format("DD MMM YY");
    return date;
  }

// funzione di creazione titolo


function printTitle(year, month){
  var titleMonth = $(".title__month");
  var monthName =getMonthName(month);
  var monthDay = getMonthDay(year, month);

  titleMonth.text(monthName + ": 1-" + monthDay);
}

function printDays(year, month){
  var monthDay = getMonthDay(year, month);
  var daylist = $(".contenitore__giorni");
  var template = $("#day-template").html();
  var compiled = Handlebars.compile(template);

  for (var day=1; day<=monthDay; day++) {

        var templateDate = {

      date: humanData(year, month, day)
    }

    var liday = compiled(templateDate);
    daylist.append(liday);

  }

}













function init(){
  var year = 2018;
  var month = 0;
  printTitle(year, month);
  printDays(year, month);


}
 $(document).ready(init);
