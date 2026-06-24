"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, ChevronUp, Copy, Check } from "lucide-react";
import { weddingData } from "@/data/weddingData";

export default function GiftSection() {
    const { gift } = weddingData;
    const [isOpen, setIsOpen] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (number: string, index: number) => {
        navigator.clipboard.writeText(number);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="relative w-full flex flex-col items-center px-8 py-20" style={{ background: "linear-gradient(to bottom, #F8F4E9 0%, #ECF0DC 50%, #C9D2AC 100%)" }}>
            <motion.h2 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="font-script text-4xl text-[#3A4530] text-center mb-4">
                {gift.title}
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm text-[#5C6650] text-center max-w-[280px] mb-8 leading-relaxed">
                {gift.description}
            </motion.p>

            <AnimatePresence mode="wait">
                {!isOpen ? (
                    <motion.button key="open-button" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} onClick={() => setIsOpen(true)} className="flex items-center gap-2 bg-[#45523A] text-white px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-[#333D2A] transition-colors">
                        <Gift size={14} />
                        {gift.buttonText}
                    </motion.button>
                ) : (
                    <motion.div key="accounts" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="w-full max-w-[320px] flex flex-col gap-3">
                        {gift.accounts.map((account, index) => (
                            <div key={account.number} className="flex items-center justify-between gap-4 bg-white border border-[#C9CFB4] rounded-2xl px-5 py-4">
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-[#7C8567] mb-1">
                                        {account.bank}
                                    </span>
                                    <span className="font-serif text-lg font-medium text-[#3A4530] tracking-wide">
                                        {account.number}
                                    </span>
                                    <span className="text-sm text-[#5C6650]">
                                        {account.name}
                                    </span>
                                </div>

                                <button onClick={() => handleCopy(account.number, index)} className="flex items-center gap-1.5 text-xs text-[#5C6650] border border-[#C9CFB4] rounded-full px-3 py-1.5 hover:bg-[#45523A]/5 transition-colors flex-shrink-0">
                                    {copiedIndex === index ? (
                                        <><Check size={12} />Copied</>
                                    ) : (
                                        <><Copy size={12} />Copy</>
                                    )}
                                </button>
                            </div>
                        ))}

                        <button onClick={() => setIsOpen(false)} className="flex items-center justify-center mt-2 mx-auto w-10 h-10 rounded-full border border-[#C9CFB4] text-[#45523A] hover:bg-[#45523A]/5 transition-colors" aria-label="Tutup">
                            <ChevronUp size={18} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}