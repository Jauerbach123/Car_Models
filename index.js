
document.getElementById("comingUpContent").style.display = "none";
document.getElementById("pastEventsContent").style.display = "none";

function hidePanels() {
  document.getElementById("comingUpContent").style.display = "none";
  document.getElementById("pastEventsContent").style.display = "none";
  document.getElementById("eventsWeekContent").style.display = "none";

  document.getElementById("comingUpTab").classList.remove("highlight");
  document.getElementById("pastEventsTab").classList.remove("highlight");
  document.getElementById("eventsWeekTab").classList.remove("highlight");
}

function showComingup() {
  hidePanels();
  document.getElementById("comingUpContent").style.display = "block";
  document.getElementById("comingUpTab").classList.add("highlight");
}
function showPastEvents() {
  hidePanels();
  document.getElementById("pastEventsContent").style.display = "block"
  document.getElementById("pastEventsTab").classList.add("highlight");
}
function showEventsWeek() {
  hidePanels();
  document.getElementById("eventsWeekContent").style.display = "block"
  document.getElementById("eventsWeekTab").classList.add("highlight");

}








document.getElementById("comingUp2").style.display = "none";
document.getElementById("pastEvents2").style.display = "none";

function hide1() {
  document.getElementById("comingUp2").style.display = "none";
  document.getElementById("pastEvents2").style.display = "none";
  document.getElementById("events2").style.display = "none";

  document.getElementById("comingUp1").classList.remove("highlight");
  document.getElementById("pastEvents1").classList.remove("highlight");
  document.getElementById("events1").classList.remove("highlight");
}

function show3() {
  hide1();
  document.getElementById("comingUp2").style.display = "block";
  document.getElementById("comingUp1").classList.add("highlight");
}
function showPast2() {
  hide1();
  document.getElementById("pastEvents2").style.display = "block"
  document.getElementById("pastEvents1").classList.add("highlight");
}
function showtimes() {
  hide1();
  document.getElementById("events2").style.display = "block"
  document.getElementById("events1").classList.add("highlight");

}







document.getElementById("comingUpC").style.display = "none";
document.getElementById("pastEventsC").style.display = "none";

function hideP() {
  document.getElementById("comingUpC").style.display = "none";
  document.getElementById("pastEventsC").style.display = "none";
  document.getElementById("eventsWeekC").style.display = "none";

  document.getElementById("comingUpT").classList.remove("highlight");
  document.getElementById("pastEventsT").classList.remove("highlight");
  document.getElementById("eventsWt").classList.remove("highlight");
}

function showComingu() {
  hideP();
  document.getElementById("comingUpC").style.display = "block";
  document.getElementById("comingUpT").classList.add("highlight");
}
function showPastE() {
  hideP();
  document.getElementById("pastEventsC").style.display = "block"
  document.getElementById("pastEventsT").classList.add("highlight");
}
function showEventsW() {
  hideP();
  document.getElementById("eventsWeekC").style.display = "block"
  document.getElementById("eventsWt").classList.add("highlight");

}



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}