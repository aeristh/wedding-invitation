"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export default function RsvpSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div className="relative w-full flex flex-col items-center px-8 py-20" style={{ background: "linear-gradient(to bottom, #9C9C9C 0%, #B5B5B5 30%, #E0E0E0 65%, #FBF9F6 100%)" }}>
            <motion.h2 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="font-script text-4xl text-white text-center mb-2 z-10">
                RSVP
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-serif text-sm text-white/90 text-center mb-10 z-10">
                Konfirmasi kehadiran Anda
            </motion.p>

            <AnimatePresence mode="wait">
                {!isSubmitted ? (
                    <motion.form key="form" autoComplete="off" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }} className="w-full max-w-[320px] flex flex-col gap-4 z-10">
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="name" className="text-sm font-medium text-[#2C2A29]">
                                Nama Lengkap
                            </label>
                            <input id="name" type="text" name="name" autoComplete="off" placeholder="Masukkan nama lengkap" className="w-full px-4 py-3 rounded-lg border border-[#D9C9B0] bg-white text-sm text-[#2C2A29] placeholder:text-[#A8A39C] focus:outline-none focus:ring-2 focus:ring-[#B08D57]/40" />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="phone" className="text-sm font-medium text-[#2C2A29]">
                                Nomor Telepon
                            </label>
                            <input id="phone" type="tel" name="phone" autoComplete="off" placeholder="Contoh: 081234567890" className="w-full px-4 py-3 rounded-lg border border-[#D9C9B0] bg-white text-sm text-[#2C2A29] placeholder:text-[#A8A39C] focus:outline-none focus:ring-2 focus:ring-[#B08D57]/40" />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="guests" className="text-sm font-medium text-[#2C2A29]">
                                Jumlah Orang
                            </label>
                            <input id="guests" type="number" name="guests" autoComplete="off" placeholder="Contoh: 2" min="1" className="w-full px-4 py-3 rounded-lg border border-[#D9C9B0] bg-white text-sm text-[#2C2A29] placeholder:text-[#A8A39C] focus:outline-none focus:ring-2 focus:ring-[#B08D57]/40" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-[#2C2A29] mb-1">
                                Konfirmasi Kehadiran
                            </label>

                            <label className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#D9C9B0] bg-white cursor-pointer">
                                <input type="radio" name="attendance" value="hadir" className="w-4 h-4 accent-[#B08D57]" />
                                <span className="text-sm text-[#2C2A29]">Ya, saya akan hadir</span>
                            </label>

                            <label className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#D9C9B0] bg-white cursor-pointer">
                                <input type="radio" name="attendance" value="tidak_hadir" className="w-4 h-4 accent-[#B08D57]" />
                                <span className="text-sm text-[#2C2A29]">Maaf, saya tidak bisa hadir</span>
                            </label>
                        </div>

                        <button type="button" onClick={() => setIsSubmitted(true)} className="w-full mt-2 bg-[#2C2A29] text-white py-3.5 rounded-lg text-sm font-medium uppercase tracking-wider hover:bg-[#2C2A29]/90 transition-colors">
                            Kirim Konfirmasi
                        </button>
                    </motion.form>
                ) : (
                    <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-[320px] flex flex-col items-center text-center gap-4 z-10 bg-white rounded-xl px-6 py-10 border border-[#D9C9B0]">
                        <div className="w-12 h-12 rounded-full bg-[#B08D57]/10 flex items-center justify-center">
                            <Check size={24} className="text-[#B08D57]" />
                        </div>

                        <div>
                            <p className="font-script text-2xl text-[#2C2A29] mb-1">Terima Kasih!</p>
                            <p className="text-sm text-[#6B6862]">
                                Konfirmasi Anda telah berhasil terkirim.
                            </p>
                        </div>

                        <button type="button" onClick={() => setIsSubmitted(false)} className="text-xs text-[#B08D57] underline underline-offset-2 hover:text-[#2C2A29] transition-colors">
                            Ingin mengisi lagi?
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}