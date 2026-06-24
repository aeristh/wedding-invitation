"use client";

import { motion } from "framer-motion";

export default function RsvpStatSection() {
    const stats = {
        totalInvited: 46,
        opened: 42,
        confirmedYes: 37,
        confirmedNo: 5,
        notResponded: 4,
    };

    const respondedPercent = Math.round(((stats.confirmedYes + stats.confirmedNo) / stats.totalInvited) * 100);

    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const yesOffset = circumference * (1 - stats.confirmedYes / stats.totalInvited);
    const noOffset = circumference * (1 - stats.confirmedNo / stats.totalInvited);
    const noRotation = (stats.confirmedYes / stats.totalInvited) * 360;

    return (
        <div className="relative w-full flex flex-col items-center px-8 py-16 bg-[#FBF9F6]">

            <motion.h2 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="font-script text-3xl text-[#2C2A29] text-center mb-2">
                Antusiasme Tamu
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm text-[#6B6862] text-center mb-10 max-w-[280px]">
                Yuk lihat siapa saja yang sudah mengonfirmasi kehadiran
            </motion.p>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-40 h-40 mb-10">
                <svg viewBox="0 0 140 140" className="w-full h-full -rotate-90">
                    <circle cx="70" cy="70" r={radius} fill="none" stroke="#E5E0D8" strokeWidth="14" />

                    <circle cx="70" cy="70" r={radius} fill="none" stroke="#B08D57" strokeWidth="14" strokeDasharray={circumference} strokeDashoffset={yesOffset} strokeLinecap="round" />

                    <circle cx="70" cy="70" r={radius} fill="none" stroke="#C97B6C" strokeWidth="14" strokeDasharray={circumference} strokeDashoffset={noOffset} strokeLinecap="round" transform={`rotate(${noRotation} 70 70)`} />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-serif font-semibold text-[#2C2A29]">{respondedPercent}%</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#A8A39C]">Merespon</span>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.3 }} className="w-full max-w-[320px] grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center gap-1 bg-white border border-[#D9C9B0] rounded-xl py-4 px-2">
                    <span className="text-2xl font-serif font-semibold text-[#2C2A29]">{stats.totalInvited}</span>
                    <span className="text-xs text-[#6B6862] text-center">Tamu Diundang</span>
                </div>

                <div className="flex flex-col items-center gap-1 bg-white border border-[#D9C9B0] rounded-xl py-4 px-2">
                    <span className="text-2xl font-serif font-semibold text-[#2C2A29]">{stats.opened}</span>
                    <span className="text-xs text-[#6B6862] text-center">Sudah Membuka</span>
                </div>

                <div className="flex flex-col items-center gap-1 bg-white border border-[#D9C9B0] rounded-xl py-4 px-2">
                    <span className="flex items-center gap-1.5 text-2xl font-serif font-semibold text-[#B08D57]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#B08D57]" />
                        {stats.confirmedYes}
                    </span>
                    <span className="text-xs text-[#6B6862] text-center">Akan Hadir</span>
                </div>

                <div className="flex flex-col items-center gap-1 bg-white border border-[#D9C9B0] rounded-xl py-4 px-2">
                    <span className="flex items-center gap-1.5 text-2xl font-serif font-semibold text-[#C97B6C]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#C97B6C]" />
                        {stats.confirmedNo}
                    </span>
                    <span className="text-xs text-[#6B6862] text-center">Tidak Hadir</span>
                </div>

                <div className="col-span-2 flex flex-col items-center gap-1 bg-white border border-[#D9C9B0] rounded-xl py-4 px-2">
                    <span className="text-2xl font-serif font-semibold text-[#A8A39C]">{stats.notResponded}</span>
                    <span className="text-xs text-[#6B6862] text-center">Belum Merespon</span>
                </div>
            </motion.div>

        </div>
    );
}