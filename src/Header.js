import React from "react";
import "./Header.css";

export default function Header() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours > 12) {
    hours = [hours - 12, "pm"];
  } else {
    hours = [hours, "am"];
  }

  return (
    <header>
      {currentDay}, {hours[0]}:{minutes}
      {hours[1]}
    </header>
  );
}
