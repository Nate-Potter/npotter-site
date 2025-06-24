import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const HabitAppPage = () => {
  const [selectedDay, setSelectedDay] = (useState < Date) | (undefined > undefined);

  return (
    <div className="p-4">
      <DayPicker
        mode="single"
        selected={selectedDay}
        onSelect={setSelectedDay}
        footer={
          selectedDay ? <p>You selected {selectedDay.toDateString()}</p> : <p>Please pick a day.</p>
        }
      />
    </div>
  );
};

export default HabitAppPage;
