"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const dummyWishes = [
    {
        initial: "U",
        name: "Umar",
        location: "di Jakarta",
        message: "Halo",
    },
    {
        initial: "MB",
        name: "Muhammad Bayu Firmansyah",
        location: "di Kepatihan Tulangan Sidoarjo",
        message: "Semoga apa yang di semogakan TERSEMOGAKAN",
    },
    {
        initial: "IY",
        name: "Ika Yanti",
        location: "di Jl. Betutu unung",
        message: "Semoga bahagia dan langgeng selamanya",
    },
    {
        initial: "RD",
        name: "Rina Dewi",
        location: "di Bandung",
        message: "Selamat menempuh hidup baru, semoga sakinah mawaddah warahmah",
    },
    {
        initial: "AS",
        name: "Andi Saputra",
        location: "di Surabaya",
        message: "Congrats! Wish you both all the best",
    },
];

export default function WishesSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div className="relative w-full flex flex-col items-center px-8 py-20 bg-[#FBF9F6]">

            <motion.h2 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="font-script text-4xl text-[#2C2A29] text-center mb-2">
                Wishes &amp; Prayers
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm text-[#6B6862] text-center mb-8">
                Ucapan dan doa dari para tamu
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-[320px] mb-12 border border-[#D9C9B0] rounded-2xl bg-white overflow-hidden">
                <div className="max-h-[340px] overflow-y-auto divide-y divide-[#E5E0D8]">
                    {dummyWishes.map((wish, index) => (
                        <div key={index} className="flex gap-3 px-5 py-4">
                            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#D9C9B0]/30 flex items-center justify-center">
                                <span className="text-xs font-semibold text-[#B08D57]">{wish.initial}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-[#2C2A29]">{wish.name}</span>
                                <span className="text-xs text-[#A8A39C] mb-1">{wish.location}</span>
                                <span className="text-sm text-[#6B6862] italic leading-relaxed">
                                    &ldquo;{wish.message}&rdquo;
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <AnimatePresence mode="wait">
                {!isSubmitted ? (
                    <motion.form key="form" autoComplete="off" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }} className="w-full max-w-[320px] flex flex-col gap-4 z-10">
                        <h3 className="font-script text-2xl text-[#2C2A29] text-center mb-1">
                            Send a Wish
                        </h3>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="fullname" className="text-sm font-medium text-[#2C2A29]">
                                Nama Lengkap
                            </label>
                            <input id="fullname" type="text" name="fullname" autoComplete="off" placeholder="Masukkan nama lengkap" className="w-full px-4 py-3 rounded-lg border border-[#D9C9B0] bg-white text-sm text-[#2C2A29] placeholder:text-[#A8A39C] focus:outline-none focus:ring-2 focus:ring-[#B08D57]/40" />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="address" className="text-sm font-medium text-[#2C2A29]">
                                Alamat
                            </label>
                            <input id="address" type="text" name="address" autoComplete="off" placeholder="Contoh: di Jakarta" className="w-full px-4 py-3 rounded-lg border border-[#D9C9B0] bg-white text-sm text-[#2C2A29] placeholder:text-[#A8A39C] focus:outline-none focus:ring-2 focus:ring-[#B08D57]/40" />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message" className="text-sm font-medium text-[#2C2A29]">
                                Ucapan &amp; Doa
                            </label>
                            <textarea id="message" name="message" autoComplete="off" placeholder="Contoh: Selamat menempuh hidup baru..." rows={4} className="w-full px-4 py-3 rounded-lg border border-[#D9C9B0] bg-white text-sm text-[#2C2A29] placeholder:text-[#A8A39C] focus:outline-none focus:ring-2 focus:ring-[#B08D57]/40 resize-none" />
                        </div>

                        <button type="button" onClick={() => setIsSubmitted(true)} className="w-full mt-2 bg-[#2C2A29] text-white py-3.5 rounded-lg text-sm font-medium uppercase tracking-wider hover:bg-[#2C2A29]/90 transition-colors">
                            Kirim Ucapan
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
                                Ucapan Anda telah berhasil terkirim.
                            </p>
                        </div>

                        <button type="button" onClick={() => setIsSubmitted(false)} className="text-xs text-[#B08D57] underline underline-offset-2 hover:text-[#2C2A29] transition-colors">
                            Ingin mengirim ucapan lagi?
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}