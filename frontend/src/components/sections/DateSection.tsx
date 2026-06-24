"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { weddingData } from "@/data/weddingData";

function useCountdown(targetDate: string) {
    const calculate = () => {
        const diff = new Date(targetDate).getTime() - new Date().getTime();
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculate);

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculate()), 1000);
        return () => clearInterval(timer);
    }, []);

    return timeLeft;
}

export default function DateSection() {
    const { event } = weddingData;
    const { days, hours, minutes, seconds } = useCountdown("2028-08-08T08:00:00");
    const [notifStatus, setNotifStatus] = useState<"idle" | "granted" | "denied">("idle");

    const handleSaveDate = () => {
        const icsContent = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "BEGIN:VEVENT",
            "DTSTART:20280808T080000",
            "DTEND:20280808T140000",
            `SUMMARY:The Wedding of ${weddingData.groom.nickname} & ${weddingData.bride.nickname}`,
            `LOCATION:${event.akad.location}, ${event.akad.address}`,
            "END:VEVENT",
            "END:VCALENDAR",
        ].join("\n");

        const blob = new Blob([icsContent], { type: "text/calendar" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "wedding.ics";
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleNotification = async () => {
        if (!("Notification" in window)) return;
        const permission = await Notification.requestPermission();
        setNotifStatus(permission === "granted" ? "granted" : "denied");
        if (permission === "granted") {
            new Notification(`Wedding Reminder 💍`, {
                body: `${weddingData.groom.nickname} & ${weddingData.bride.nickname} — 08 Agustus 2028`,
            });
        }
    };

    return (
        <div id="date" className="relative w-full min-h-[400px] flex flex-col items-center justify-center px-8 py-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #F7F8F0 0%, #F5F6ED 12%, #F0F2E6 24%, #E8ECDA 38%, #DFE4CC 52%, #D5DCBE 66%, #CFD7B4 78%, #CAD3AE 90%, #C9D2AC 100%)", }}>
            <motion.h2 initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1, ease: "easeOut" }} className="font-script text-4xl text-[#2F3826] text-center mb-3 z-10">
                Save the Date
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }} className="text-xs italic text-[#2F3826]/70 text-center mb-8 z-10">
                Menghitung hari hingga kami resmi bersatu
            </motion.p>


            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }} className="z-10 w-full max-w-[360px] mx-auto flex justify-center gap-4 mb-8">
                {[
                    { value: days, label: "Hari" },
                    { value: hours, label: "Jam" },
                    { value: minutes, label: "Menit" },
                    { value: seconds, label: "Detik" },
                ].map(({ value, label }) => (
                    <div key={label} className="flex flex-col items-center">
                        <div className="min-w-16 h-16 px-2 rounded-xl flex items-center justify-center mb-1" style={{ background: "rgba(255,255,255,0.5)" }}>
                            <span className="font-serif text-2xl font-semibold text-[#2F3826]">
                                {String(value).padStart(2, "0")}
                            </span>
                        </div>
                        <span className="text-xs text-[#2F3826]/80 tracking-widest uppercase">{label}</span>
                    </div>
                ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="z-10 text-center mb-10">
                <p className="font-serif text-base text-[#2F3826]">{event.displayDate}</p>
                <p className="text-xs text-[#2F3826]/70 mt-1 tracking-widest uppercase">{event.akad.date}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="z-10 flex flex-col gap-2 w-full max-w-[190px] mx-auto">
                <button onClick={handleSaveDate} className="flex items-center justify-center gap-1.5 w-full py-2 rounded-full text-[11px] text-[#2F3826] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(47,56,38,0.18)] active:scale-95 active:translate-y-0" style={{ background: "rgba(255,255,255,0.5)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                        <line x1="12" y1="14" x2="12" y2="18" />
                        <line x1="10" y1="16" x2="14" y2="16" />
                    </svg>
                    Save the date
                </button>

                <button onClick={handleNotification} className="flex items-center justify-center gap-1.5 w-full py-2 rounded-full text-[11px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(47,56,38,0.18)] active:scale-95 active:translate-y-0" style={{ background: notifStatus === "granted" ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.5)", color: notifStatus === "denied" ? "#C97B6C" : "#2F3826", fontWeight: 500, }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                    {notifStatus === "granted" ? "Notifikasi aktif ✓" : notifStatus === "denied" ? "Notifikasi diblokir" : "Turn on notifications"}
                </button>
            </motion.div>
        </div>
    );
}