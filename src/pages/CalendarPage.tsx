import React from 'react';

import SmallCalendar from '../components/SmallCalendar';
import AvailabilitySection from '../components/AvailabilitySection';
import BigCalendar from '../components/Bigcalendar';


const CalendarPage = () => {

  return (
    <div className='mt-6 pl-5'>

      <div className='buttons'>
        <button className='bg-[#56C795] text-white rounded py-1.5 px-4'>Create Availability</button>
        <button className='text-[#56C795] ml-10'>Create Event</button>
      </div>

      <div className='flex gap-10 mt-10'>

        <div className='pl-4 text-[#667085]'>
          <SmallCalendar />
          <AvailabilitySection />
        </div>

        <div className='big-calendar'>
          <BigCalendar />
        </div>

      </div>

    </div>
  );  
};

export default CalendarPage;