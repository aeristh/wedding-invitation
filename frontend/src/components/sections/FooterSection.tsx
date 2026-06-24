"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";

export default function FooterSection() {
    return (
        <div className="relative w-full bg-[#F8F4E9] overflow-hidden">
            <div
                className="relative w-full flex flex-col items-center"
                style={{ background: "#2F3826", borderTopLeftRadius: "50% 60px", borderTopRightRadius: "50% 60px", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", paddingTop: "3rem", paddingBottom: "2.5rem", }}>
                <div className="w-16 h-px bg-white/25 mb-4" />

                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="flex flex-col items-center text-center gap-2">
                    <p className="font-script text-2xl text-white">
                        Thank You
                    </p>
                    <p className="text-[11px] text-white/45 tracking-wide">
                        © {new Date().getFullYear()} {weddingData.groom.nickname} &amp; {weddingData.bride.nickname}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}