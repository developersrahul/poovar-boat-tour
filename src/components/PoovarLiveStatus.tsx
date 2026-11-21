import React, { useState, useEffect } from 'react';

export default function PoovarLiveStatus() {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSunsetBooking = () => {
    const msg = encodeURIComponent(
      'Hello Poovar Boat Tour! I would like to reserve a 5:00 PM Golden Hour Sunset Cruise slot for my group today / upcoming date.'
    );
    window.open(`https://wa.me/917902291301?text=${msg}`, '_blank');
  };

  return (
    <div className="rounded-[7px] bg-gradient-to-r from-[#06192e] via-[#0c2744] to-[#06192e] text-white p-3.5 sm:p-5 border border-[#b19d7f]/30 shadow-xl relative overflow-hidden">
      <div className="absolute right-0 top-0 w-72 h-full bg-[#b19d7f]/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-5">
        {/* Left: Live Status Pulse & Conditions */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 md:gap-6">
          {/* Status Badge */}
          <div className="flex items-center gap-2 bg-[#b19d7f]/15 border border-[#b19d7f]/40 px-2.5 sm:px-3.5 py-1 sm:py-1.5 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b19d7f] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b19d7f]"></span>
            </span>
            <span className="text-[#c9b79b] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider">
              Boating Open &amp; Safe Today
            </span>
          </div>

          {/* Time & Weather */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-white/85">
            <span className="flex items-center gap-1.5">
              <i className="ph-bold ph-sun text-[#b19d7f] text-sm"></i>
              <span>Poovar: <strong>29°C • Clear</strong></span>
            </span>
            <span className="text-white/30 hidden xs:inline sm:inline">•</span>
            <span className="flex items-center gap-1.5 hidden xs:flex sm:flex">
              <i className="ph-bold ph-wind text-sky-200 text-sm"></i>
              <span>Coastal Breeze</span>
            </span>
            {timeStr && (
              <>
                <span className="text-white/30 hidden md:inline">•</span>
                <span className="flex items-center gap-1.5 font-mono text-white/70 hidden md:flex">
                  <i className="ph-bold ph-clock text-[#b19d7f] text-sm"></i>
                  <span>IST: {timeStr}</span>
                </span>
              </>
            )}
          </div>
        </div>

        {/* Right: Sunset Golden Hour Pill & Quick Booking Trigger */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 px-2.5 sm:px-3 py-1 border border-white/15 text-[10px] sm:text-[11px] text-[#c9b79b] font-medium">
            <span className="w-1.5 h-1.5 bg-[#b19d7f] rotate-45"></span>
            <span>Sunset: 5:00 – 6:30 PM</span>
          </div>

          <button
            type="button"
            onClick={handleSunsetBooking}
            className="flex-1 sm:flex-initial px-3.5 sm:px-4 py-1.5 sm:py-2 bg-[#b19d7f] hover:bg-[#9e8a6d] text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <i className="ph-bold ph-lightning text-white text-sm"></i>
            <span>Sunset Slot</span>
          </button>
        </div>
      </div>
    </div>
  );
}
