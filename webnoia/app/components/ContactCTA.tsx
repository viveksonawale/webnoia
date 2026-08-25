"use client";

import { useState } from "react";

export interface ContactCTAProps {
  readonly className?: string;
}

export default function ContactCTA({ className = "" }: ContactCTAProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(15);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const times = ["09:00", "09:30", "10:00", "10:30", "11:00", "13:30", "14:00", "14:30", "15:00", "15:30"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  return (
    <section id="contact" className={`w-full py-20 md:py-32 bg-gray-50 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4">
            Let's build something <span className="font-serif italic font-medium">great.</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Pick a time for your free consultation.
          </p>
        </div>

        {/* Mock Cal.com Embed */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row min-h-[500px]">
          
          {/* Left Panel: Info & Calendar */}
          <div className="w-full md:w-1/2 p-8 border-r border-gray-100 flex flex-col">
            <div className="mb-8">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4 text-brand-orange font-bold text-xl">
                W
              </div>
              <h3 className="text-gray-500 font-medium mb-1">Webnoia</h3>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Discovery Call</h2>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <span className="w-4 h-4 text-center">⏱</span>
                30 min
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="w-4 h-4 text-center">🎥</span>
                Google Meet
              </div>
            </div>

            {/* Calendar */}
            <div className="mt-auto">
              <h4 className="font-bold text-brand-dark mb-4">August 2026</h4>
              <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                {days.map(d => (
                  <div key={d} className="text-gray-400 font-medium text-xs py-1">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {[...Array(31)].map((_, i) => {
                  const day = i + 1;
                  const isSelected = selectedDate === day;
                  const isPast = day < 10;
                  return (
                    <button
                      key={day}
                      disabled={isPast}
                      onClick={() => setSelectedDate(day)}
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center mx-auto transition-colors
                        ${isSelected ? 'bg-brand-dark text-white font-bold' : ''}
                        ${!isSelected && !isPast ? 'hover:bg-gray-100 text-brand-dark font-medium' : ''}
                        ${isPast ? 'text-gray-300 cursor-not-allowed' : ''}
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel: Time Slots */}
          <div className="w-full md:w-1/2 p-8 bg-gray-50/50">
            <h4 className="font-bold text-brand-dark mb-6">
              {selectedDate ? `Tuesday, August ${selectedDate}` : 'Select a date'}
            </h4>
            
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[360px] pr-2 custom-scrollbar">
              {times.map(time => (
                <div key={time} className="flex gap-2">
                  <button
                    onClick={() => setSelectedTime(time)}
                    className={`flex-1 py-3 border rounded-lg font-medium transition-colors ${
                      selectedTime === time 
                        ? 'border-brand-dark bg-gray-800 text-white' 
                        : 'border-brand-dark text-brand-dark hover:border-brand-orange hover:text-brand-orange bg-white'
                    }`}
                  >
                    {time}
                  </button>
                  {selectedTime === time && (
                    <button className="flex-1 py-3 border border-brand-dark bg-brand-dark text-white rounded-lg font-medium hover:bg-black transition-colors">
                      Confirm
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
