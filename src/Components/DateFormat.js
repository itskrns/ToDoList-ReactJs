import React from "react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function DateFormat({ children, today }) {
  const day = today ? new Date(today) : new Date();
  const date = day.getDate();
  const month = day.getMonth();
  const year = day.getFullYear();

  return (
    <div>
      {children}
      {`${date} ${months[month]} ${year}`}
    </div>
  );
}
