import React from "react";
import { format, getDay, parse, startOfWeek } from "date-fns";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});

const events = [
    {
        title: "Big Meeting",
        start: new Date(2022, 11, 0),
        end: new Date(2022, 11, 0),
    },
    {
        title: "Vacation",
        start: new Date(2022, 11, 5),
        end: new Date(2022, 11, 5),
    },
    {
        title: "Conference",
        start: new Date(2022, 11, 20),
        end: new Date(2022, 11, 23),
    },
];
const Bigcalendar = () => {

  return (
    <div className=''>
      <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 700, width: 900 }} />
    </div>
  );
};

export default Bigcalendar;