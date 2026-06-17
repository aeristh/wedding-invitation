"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const dummyWishes = [
    { initial: "U", name: "Umar", location: "di Jakarta", message: "Halo" },
    { initial: "MB", name: "Muhammad Bayu Firmansyah", location: "di Kepatihan Tulangan Sidoarjo", message: "Semoga apa yang di semogakan TERSEMOGAKAN" },
    { initial: "IY", name: "Ika Yanti", location: "di Jl. Betutu unung", message: "Semoga bahagia dan langgeng selamanya" },
    { initial: "RD", name: "Rina Dewi", location: "di Bandung", message: "Selamat menempuh hidup baru, semoga sakinah mawaddah warahmah" },
    { initial: "AS", name: "Andi Saputra", location: "di Surabaya", message: "Congrats! Wish you both all the best" },
];

const accentPalette = [
    { bg: "#ECF0DC", text: "#5C6F45" }, // sage
    { bg: "#F4E3D3", text: "#A66A3B" }, // sand
    { bg: "#F1E1E6", text: "#A6606E" }, // dusty rose
    { bg: "#E2E8EF", text: "#5A7390" }, // dusty blue
];

function getAccent(index: number) {
    return accentPalette[index % accentPalette.length];
}

type WishFormData = {
    fullname: string;
    address: string;
    message: string;
};

type WishFormErrors = Partial<Record<keyof WishFormData, string>>;

export default function WishesSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState<WishFormData>({ fullname: "", address: "", message: "" });
    const [errors, setErrors] = useState<WishFormErrors>({});

    function handleChange(field: keyof WishFormData, value: string) {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    function validate(): WishFormErrors {
        const next: WishFormErrors = {};
        if (!formData.fullname.trim()) next.fullname = "Nama wajib diisi";
        if (!formData.address.trim()) next.address = "Alamat wajib diisi";
        if (!formData.message.trim()) next.message = "Ucapan & doa wajib diisi";
        return next;
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const next = validate();
        if (Object.keys(next).length > 0) {
            setErrors(next);
            return;
        }
        setErrors({});
        setIsSubmitted(true);
    }

    function resetForm() {
        setIsSubmitted(false);
        setFormData({ fullname: "", address: "", message: "" });
        setErrors({});
    }

    const inputBase =
        "w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-[#3A4530] placeholder:text-[#9BA384]/70 focus:outline-none focus:ring-2 focus:ring-[#9BA384]/30 transition-colors";

    return (
        <div className="relative w-full flex flex-col items-center px-8 py-20" style={{ background: "linear-gradient(to bottom, #C9D2AC 0%, #DCE3C8 35%, #ECF0DC 70%, #F8F4E9 100%)" }}>

            <motion.h2 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="font-script text-4xl text-[#3A4530] text-center mb-2 z-10">
                Wishes &amp; Prayers
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm text-[#5C6650] text-center mb-8 z-10">
                Ucapan dan doa dari para tamu
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full max-w-[300px] mb-10 border border-[#C9CFB4] rounded-2xl bg-white overflow-hidden z-10">
                <div className="max-h-[340px] overflow-y-auto divide-y divide-[#ECF0DC]">
                    {dummyWishes.map((wish, index) => {
                        const accent = getAccent(index);
                        return (
                            <div key={index} className="flex gap-3 px-4 py-3.5">
                                <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center" style={{ background: accent.bg }}>
                                    <span className="text-xs font-semibold" style={{ color: accent.text }}>
                                        {wish.initial}
                                    </span>
                                </div>
                                <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                                    <div className="flex items-baseline gap-1.5 flex-wrap">
                                        <span className="text-sm font-semibold text-[#3A4530]">{wish.name}</span>
                                        <span className="text-[11px] text-[#9BA384]">{wish.location}</span>
                                    </div>
                                    <div className="rounded-xl px-3 py-2" style={{ background: accent.bg }}>
                                        <p className="text-sm text-[#5C6650] italic leading-snug">
                                            <span className="font-serif not-italic text-base mr-0.5" style={{ color: accent.text }}>
                                                &ldquo;
                                            </span>
                                            {wish.message}
                                            <span
                                                className="font-serif not-italic text-base ml-0.5"
                                                style={{ color: accent.text }}
                                            >
                                                &rdquo;
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.3 }} className="w-full flex justify-center z-10">
                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.form key="form" autoComplete="off" onSubmit={handleSubmit} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }} className="w-full max-w-[300px] flex flex-col gap-3.5">
                            <h3 className="font-script text-2xl text-[#3A4530] text-center mb-1">Send a Wish</h3>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="fullname" className="text-xs font-medium uppercase tracking-wide text-[#5C6650]">
                                    Nama Lengkap
                                </label>
                                <input id="fullname" type="text" autoComplete="off" placeholder="Masukkan nama lengkap" value={formData.fullname} onChange={(e) => handleChange("fullname", e.target.value)} className={`${inputBase} ${errors.fullname ? "border-[#A8453A]" : "border-[#C9CFB4]"}`} />
                                {errors.fullname && <span className="text-[11px] text-[#A8453A]">{errors.fullname}</span>}
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="address" className="text-xs font-medium uppercase tracking-wide text-[#5C6650]">
                                    Alamat
                                </label>
                                <input id="address" type="text" autoComplete="off" placeholder="Contoh: di Jakarta" value={formData.address} onChange={(e) => handleChange("address", e.target.value)} className={`${inputBase} ${errors.address ? "border-[#A8453A]" : "border-[#C9CFB4]"}`} />
                                {errors.address && <span className="text-[11px] text-[#A8453A]">{errors.address}</span>}
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="message" className="text-xs font-medium uppercase tracking-wide text-[#5C6650]">
                                    Ucapan &amp; Doa
                                </label>
                                <textarea id="message" autoComplete="off" placeholder="Contoh: Selamat menempuh hidup baru..." rows={4} value={formData.message} onChange={(e) => handleChange("message", e.target.value)} className={`${inputBase} resize-none ${errors.message ? "border-[#A8453A]" : "border-[#C9CFB4]"}`} />
                                {errors.message && <span className="text-[11px] text-[#A8453A]">{errors.message}</span>}
                            </div>

                            <button type="submit" className="w-fit mx-auto mt-1 px-10 py-2.5 rounded-full text-xs text-[#2F3826] font-medium uppercase tracking-wider border border-[#C9CFB4] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(47,56,38,0.18)] active:scale-95 active:translate-y-0" style={{ background: "rgba(255,255,255,0.7)" }}>
                                Kirim Ucapan
                            </button>
                        </motion.form>
                    ) : (
                        <motion.div key="success" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="w-full max-w-[300px] flex flex-col items-center text-center gap-1.5 bg-white rounded-2xl px-6 py-7 border border-[#C9CFB4]">
                            <div className="w-9 h-9 rounded-full bg-[#45523A]/10 flex items-center justify-center mb-1">
                                <Check size={16} className="text-[#45523A]" />
                            </div>
                            <p className="font-script text-xl text-[#3A4530]">Terima Kasih!</p>
                            <p className="text-xs text-[#5C6650]">Ucapan Anda telah berhasil terkirim.</p>
                            <button type="button" onClick={resetForm} className="text-[11px] text-[#7C8567] underline underline-offset-2 hover:text-[#3A4530] transition-colors mt-1">
                                Kirim ucapan lagi
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
