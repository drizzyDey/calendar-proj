import React, { useState } from 'react';
import dayjs from 'dayjs';
import { generateDate, months } from '../utils/calendar-utils';
import cn from '../utils/cn';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const SmallCalendar = () => {

  const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <div className="flex gap-10 sm:divide-x sm:flex-row flex-col">
      <div>

      {/* calendar header */}
        <div className="flex justify-between items-center">
          <GrFormPrevious
            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              setToday(today.month(today.month() - 1));
            }}
          />

          <h1 className="select-none font-semibold">
            {months[today.month()]} {today.year()}
          </h1>

          <GrFormNext
            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              setToday(today.month(today.month() + 1));
            }}
          />
        </div>

        <div className="flex items-center mt-6 mb-4 gap-20">
            <h1 className='px-5'>{dayjs().format('MMM D, YYYY')}</h1>
						<button
							className="text-[#56C795] cursor-pointer border border-[#56C795] rounded px-4 py-1"
							onClick={() => {
								setToday(currentDate);
							}}
						>
							Today
						</button>		
				</div>

        {/* calendar table */}
				<div className="grid grid-cols-7 ">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="p-2 text-center h-14 grid place-content-center text-sm"
								>
									<h1
										className={cn( 
											currentMonth ? "" : "text-white",
											today
												? "bg-[#B1B2FF] text-white"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "bg-[#56C795] text-white"
												: "",
											"h-10 w-10 rounded-full grid place-content-center hover:bg-[#56C795] hover:text-white transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>
		</div>
  );
};

export default SmallCalendar;