"use client";
import React, { useEffect, useState } from 'react';

const DynamicGreeting = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const now = new Date();
    const dayName = days[now.getDay()];
    const isWeekend = now.getDay() === 0 || now.getDay() === 6;

    if (isWeekend) {
      setMessage(`Enjoy your ${dayName}!`);
    } else {
      setMessage(`Have a great ${dayName}!`);
    }
  }, []);

  if (!message) return null;

  return (
    <span className="italic">
       — {message}
    </span>
  );
};

export default DynamicGreeting;
