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
        <div
            className="relative w-full min-h-[400px] flex flex-col items-center justify-center px-8 py-20 overflow-hidden"
            style={{ background: "linear-gradient(to bottom, #FBF9F6 0%, #9C9C9C 15%)" }}
        >
            <div className="absolute -left-10 -bottom-10 w-48 h-64 opacity-40 pointer-events-none">
                <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M40 280 C 50 200, 60 150, 80 100 C 90 70, 100 50, 90 20" stroke="#D9C9B0" strokeWidth="1.5" fill="none" />
                    <circle cx="90" cy="20" r="14" stroke="#D9C9B0" strokeWidth="1.5" fill="none" />
                    <circle cx="78" cy="35" r="12" stroke="#D9C9B0" strokeWidth="1.5" fill="none" />
                    <circle cx="80" cy="70" r="10" stroke="#D9C9B0" strokeWidth="1.5" fill="none" />
                    <circle cx="65" cy="110" r="13" stroke="#D9C9B0" strokeWidth="1.5" fill="none" />
                </svg>
            </div>

            <div className="absolute -right-10 -top-10 w-48 h-64 opacity-40 pointer-events-none">
                <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M160 0 C 150 80, 140 130, 120 180 C 110 210, 100 230, 110 260" stroke="#D9C9B0" strokeWidth="1.5" fill="none" />
                    <circle cx="110" cy="260" r="14" stroke="#D9C9B0" strokeWidth="1.5" fill="none" />
                    <circle cx="122" cy="245" r="12" stroke="#D9C9B0" strokeWidth="1.5" fill="none" />
                    <circle cx="120" cy="210" r="10" stroke="#D9C9B0" strokeWidth="1.5" fill="none" />
                    <circle cx="135" cy="170" r="13" stroke="#D9C9B0" strokeWidth="1.5" fill="none" />
                </svg>
            </div>

            <motion.h2 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="font-script text-4xl text-white text-center mb-10 z-10">
                Save the Date
            </motion.h2>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.1 }} className="z-10 flex gap-4 mb-8">
                {[
                    { value: days, label: "Hari" },
                    { value: hours, label: "Jam" },
                    { value: minutes, label: "Menit" },
                    { value: seconds, label: "Detik" },
                ].map(({ value, label }) => (
                    <div key={label} className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-1" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.25)", }}>
                            <span className="font-serif text-2xl font-semibold text-white">
                                {String(value).padStart(2, "0")}
                            </span>
                        </div>
                        <span className="text-xs text-white/70 tracking-widest uppercase">{label}</span>
                    </div>
                ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.2 }} className="z-10 text-center mb-10">
                <p className="font-serif text-base text-white/90">{event.displayDate}</p>
                <p className="text-xs text-white/60 mt-1 tracking-widest uppercase">{event.akad.date}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.3 }} className="z-10 flex flex-col gap-3 w-full max-w-[260px]">
                <button
                    onClick={handleSaveDate}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm text-white/90 transition-all active:scale-95"
                    style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.3)", }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                        <line x1="12" y1="14" x2="12" y2="18" />
                        <line x1="10" y1="16" x2="14" y2="16" />
                    </svg>
                    Save the date
                </button>

                <button onClick={handleNotification} className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm transition-all active:scale-95" style={{ background: notifStatus === "granted" ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.3)", color: notifStatus === "denied" ? "rgba(255,100,100,0.9)" : "rgba(255,255,255,0.9)", }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                    {notifStatus === "granted" ? "Notifikasi aktif ✓" : notifStatus === "denied" ? "Notifikasi diblokir" : "Turn on notifications"}
                </button>
            </motion.div>
        </div>
    );
}