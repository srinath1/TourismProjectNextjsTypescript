"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";

function Bookingcalendar() {
  const currDate = new Date();
  const defaultSelected: DateRange = {
    from: undefined,
    to: undefined,
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  return (
    <Calendar
      mode="range"
      defaultMonth={currDate}
      selected={range}
      onSelect={setRange}
    />
  );
}
export default Bookingcalendar;
