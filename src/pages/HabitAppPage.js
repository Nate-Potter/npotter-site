import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const HabitAppPage = () => {
  const [selectedDay, setSelectedDay] = useState(undefined);

  return (
    <div className="page-container">
      <div className="habit-app">
        <div className="calendar-box">
          <DayPicker
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
            footer={
              selectedDay ? (
                <p>You selected {selectedDay.toDateString()}</p>
              ) : (
                <p>Please pick a day.</p>
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HabitAppPage;
