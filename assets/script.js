//variable that will store and loop through calendar
var myDayArray = [
  {
    id: "0",
    hour: "09",
    time: "09",
    meridiem: "am",
    reminder: "",
  },
  {
    id: "1",
    hour: "10",
    time: "10",
    meridiem: "am",
    reminder: "",
  },
  {
    id: "2",
    hour: "11",
    time: "11",
    meridiem: "am",
    reminder: "",
  },
  {
    id: "3",
    hour: "12",
    time: "12",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "4",
    hour: "01",
    time: "12",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "5",
    hour: "02",
    time: "13",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "6",
    hour: "03",
    time: "15",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "7",
    hour: "04",
    time: "16",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "8",
    hour: "05",
    time: "17",
    meridiem: "pm",
    reminder: "",
  },
];
localStorage.setItem("myDay", JSON.stringify(myDayArray));
let myDay = JSON.parse(localStorage.getItem("myDay"));
console.log(myDayArray);
console.log(myDay);
// gets and loads data for the header date
function getHeaderDate() {
  var currentHeaderDate = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentHeaderDate);
}
getHeaderDate();
// creates the visuals for the scheduler body
myDay.forEach(function (thisHour) {
  // creates timeblocks row
  var hourRow = $("<form>").attr({
    class: "row",
  });
  $(".container").append(hourRow);
  // creates time field
  var hourField = $("<div>").text(`${thisHour.hour}${thisHour.meridiem}`).attr({
    class: "col-md-2 hour",
  });
  // creates schdeduler data
  var hourPlan = $("<div>").attr({
    class: "col-md-9 description p-0",
  });
  //input field
  var planData = $("<input/>");
  hourPlan.append(planData);
  planData.attr("type", "text");
  planData.attr("id", "input");
  //onclick
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    //  let dayIndex = $(this).attr("id");
    let reminderValue = $("#input").val();
    //  myDay[dayIndex].reminder = reminderValue;
    //  console.log(dayIndex);
    //  console.log(thisHour.reminder);
    console.log(reminderValue);
    localStorage.setItem("myDay", JSON.stringify(myDay));
  });
  //changes color
  if (thisHour.time < moment().format("HH")) {
    planData.attr({
      class: "past",
    });
  } else if (thisHour.time > moment().format("HH")) {
    planData.attr({
      class: "future",
    });
  } else {
    planData.attr({
      class: "present",
    });
  }
  // creates save button
  var saveButton = $("<i class='far fa-save fa-lg'></i>");
  var savePlan = $("<button>").attr({ class: "col-md-1 saveBtn" });
  saveButton.attr("id", `${thisHour.id}`);
  savePlan.append(saveButton);
  hourRow.append(hourField, hourPlan, savePlan);
  console.log(saveButton.id);
});
