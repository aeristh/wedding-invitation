"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RsvpFormData = {
    name: string;
    phone: string;
    guests: string;
    attendance: string;
};

type RsvpFormErrors = Partial<Record<keyof RsvpFormData, string>>;

export default function RsvpSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState<RsvpFormData>({ name: "", phone: "", guests: "", attendance: "" });
    const [errors, setErrors] = useState<RsvpFormErrors>({});

    function handleChange(field: keyof RsvpFormData, value: string) {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    }

    function validate(): RsvpFormErrors {
        const next: RsvpFormErrors = {};
        if (!formData.name.trim()) next.name = "Nama wajib diisi";
        if (!formData.phone.trim()) next.phone = "Nomor telepon wajib diisi";
        if (!formData.guests || Number(formData.guests) < 1) next.guests = "Jumlah orang wajib diisi";
        if (!formData.attendance) next.attendance = "Pilih salah satu kehadiran";
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
        setFormData({ name: "", phone: "", guests: "", attendance: "" });
        setErrors({});
    }

    const inputBase =
        "w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-[#3A4530] placeholder:text-[#9BA384]/70 focus:outline-none focus:ring-2 focus:ring-[#9BA384]/30 transition-colors";

    return (
        <div className="relative w-full flex flex-col items-center px-8 py-16" style={{ background: "linear-gradient(to bottom, #C9D2AC 0%, #DCE3C8 35%, #ECF0DC 70%, #F8F4E9 100%)" }}>
            <motion.h2 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1, ease: EASE }} className="font-script text-4xl text-[#2F3826] text-center mb-2 z-10">
                RSVP
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.9, ease: EASE, delay: 0.3 }} className="font-serif text-sm text-[#2F3826]/80 text-center mb-6 z-10">
                Konfirmasi kehadiran Anda
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.9, ease: EASE, delay: 0.6 }} className="w-full flex justify-center z-10">
                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.form key="form" autoComplete="off" onSubmit={handleSubmit} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4, ease: EASE }} className="w-full max-w-[300px] flex flex-col gap-3.5">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name" className="text-xs font-medium uppercase tracking-wide text-[#5C6650]">
                                    Nama Lengkap
                                </label>
                                <input id="name" type="text" autoComplete="off" placeholder="Masukkan nama lengkap" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} className={`${inputBase} ${errors.name ? "border-[#A8453A]" : "border-[#C9CFB4]"}`} />
                                {errors.name && <span className="text-[11px] text-[#A8453A]">{errors.name}</span>}
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wide text-[#5C6650]">
                                    Nomor Telepon
                                </label>
                                <input id="phone" type="tel" autoComplete="off" placeholder="Contoh: 081234567890" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} className={`${inputBase} ${errors.phone ? "border-[#A8453A]" : "border-[#C9CFB4]"}`} />
                                {errors.phone && <span className="text-[11px] text-[#A8453A]">{errors.phone}</span>}
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="guests" className="text-xs font-medium uppercase tracking-wide text-[#5C6650]">
                                    Jumlah Orang
                                </label>
                                <input id="guests" type="number" min="1" placeholder="Contoh: 2" value={formData.guests} onChange={(e) => handleChange("guests", e.target.value)} className={`${inputBase} ${errors.guests ? "border-[#A8453A]" : "border-[#C9CFB4]"}`} />
                                {errors.guests && <span className="text-[11px] text-[#A8453A]">{errors.guests}</span>}
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium uppercase tracking-wide text-[#5C6650]">
                                    Kehadiran
                                </label>
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => handleChange("attendance", "hadir")}
                                        className={`flex-1 py-2.5 rounded-full text-xs font-medium border transition-all duration-200 ${formData.attendance === "hadir"
                                            ? "bg-[#45523A] text-white border-[#45523A]"
                                            : "text-[#3A4530] border-[#C9CFB4] hover:-translate-y-0.5"
                                            }`}
                                        style={formData.attendance === "hadir" ? {} : { background: "rgba(255,255,255,0.7)" }}>
                                        Hadir
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleChange("attendance", "tidak_hadir")}
                                        className={`flex-1 py-2.5 rounded-full text-xs font-medium border transition-all duration-200 ${formData.attendance === "tidak_hadir"
                                            ? "bg-[#45523A] text-white border-[#45523A]"
                                            : "text-[#3A4530] border-[#C9CFB4] hover:-translate-y-0.5"
                                            }`}
                                        style={formData.attendance === "tidak_hadir" ? {} : { background: "rgba(255,255,255,0.7)" }}>
                                        Tidak Hadir
                                    </button>
                                </div>
                                {errors.attendance && <span className="text-[11px] text-[#A8453A]">{errors.attendance}</span>}
                            </div>

                            <button type="submit" className="w-fit mx-auto mt-1 px-10 py-2.5 rounded-full text-xs text-[#2F3826] font-medium uppercase tracking-wider border border-[#C9CFB4] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(47,56,38,0.18)] active:scale-95 active:translate-y-0" style={{ background: "rgba(255,255,255,0.7)" }}>
                                Kirim Konfirmasi
                            </button>
                        </motion.form>
                    ) : (
                        <motion.div key="success" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} className="w-full max-w-[300px] flex flex-col items-center text-center gap-1.5 bg-white rounded-2xl px-6 py-7 border border-[#C9CFB4]">
                            <div className="w-9 h-9 rounded-full bg-[#45523A]/10 flex items-center justify-center mb-1">
                                <Check size={16} className="text-[#45523A]" />
                            </div>
                            <p className="font-script text-xl text-[#3A4530]">Terima Kasih!</p>
                            <p className="text-xs text-[#5C6650]">Konfirmasi Anda telah berhasil terkirim.</p>
                            <button type="button" onClick={resetForm} className="text-[11px] text-[#7C8567] underline underline-offset-2 hover:text-[#3A4530] transition-colors mt-1">
                                Isi ulang
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
