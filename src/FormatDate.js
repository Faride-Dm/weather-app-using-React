import React from "react";

function formatDate(props) {
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];

  let month = props.date.getMonth();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let yearMonths = months[month];

  let dateInMonth = props.date.getDate();
  let year = props.date.getFullYear();

  if (yearMonths === "April" || yearMonths === "May" || yearMonths === "June") {
    document.getElementById("backGround").style.backgroundImage =
      "url(https://s3.amazonaws.com/shecodesio-production/uploads/files/000/069/047/original/spring.jpg?1677327335)";
  } else if (
    yearMonths === "July" ||
    yearMonths === "August" ||
    yearMonths === "September"
  ) {
    document.getElementById("backGround").style.backgroundImage =
      "url(https://s3.amazonaws.com/shecodesio-production/uploads/files/000/069/045/original/summer.jpg?1677327246)";
  } else if (
    yearMonths === "October" ||
    yearMonths === "November" ||
    yearMonths === "December"
  ) {
    document.getElementById("backGround").style.backgroundImage =
      "url(https://s3.amazonaws.com/shecodesio-production/uploads/files/000/069/046/original/autumn.jpg?1677327273)";
  } else if (
    (yearMonths === "December" && dateInMonth > 23) ||
    (yearMonths === "January" && dateInMonth < 7)
  ) {
    document.getElementById("backGround").style.backgroundImage =
      "url(https://s3.amazonaws.com/shecodesio-production/uploads/files/000/069/054/original/Chrismas.jpg?1677330137)";
  } else {
    document.getElementById("backGround").style.backgroundImage =
      "url(https://s3.amazonaws.com/shecodesio-production/uploads/files/000/067/790/original/winter.jpg?1676478322)";
  }

  return (
    <div>
      {day} {hours}:{minutes} <br /> {dateInMonth} {yearMonths} {year}
      <br />
    </div>
  );
}

export default formatDate();
