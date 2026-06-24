"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { weddingData } from "@/data/weddingData";

function PersonCard({
    person,
    roleLabel,
    delay,
}: {
    person: typeof weddingData.groom;
    roleLabel: string;
    delay: number;
}) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8, delay }} className="flex flex-col items-center text-center w-full px-6">
            <p className="font-serif text-xs tracking-[0.35em] uppercase text-[#7C8567] mb-5">
                {roleLabel}
            </p>

            <div className="relative w-56 h-56 sm:w-48 sm:h-48">
                <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_10px_28px_rgba(47,56,38,0.28)]">
                    <Image src={person.photo} alt={person.fullName} fill className="object-cover object-center" />
                </div>

                <motion.div className="absolute pointer-events-none z-20" style={{ right: "-8px", top: "-6px" }} animate={{ x: [0, -6, 0, 6, 0], y: [0, -8, 0, -4, 0], rotate: [0, -5, 0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <motion.div animate={{ scaleY: [1, 0.3, 1] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 0.4, ease: "easeInOut" }} style={{ transformOrigin: "center" }}>
                        <Image src="/decorations/butterfly.png" alt="" width={28} height={28} />
                    </motion.div>
                </motion.div>

                <motion.div className="absolute pointer-events-none z-20" style={{ left: "8px", top: "-10px" }} animate={{ x: [0, 6, 0, -6, 0], y: [0, -6, 0, -10, 0], rotate: [0, 5, 0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}>
                    <motion.div animate={{ scaleY: [1, 0.3, 1] }} transition={{ duration: 0.28, repeat: Infinity, repeatDelay: 0.38, ease: "easeInOut", delay: 0.1 }} style={{ transformOrigin: "center" }}>
                        <Image src="/decorations/butterfly.png" alt="" width={24} height={24} style={{ transform: "scaleX(-1)" }} />
                    </motion.div>
                </motion.div>

                <motion.div className="absolute pointer-events-none z-20" style={{ right: "12px", bottom: "-8px" }} animate={{ x: [0, -5, 0, 5, 0], y: [0, 6, 0, -4, 0], rotate: [0, -4, 0, 4, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}>
                    <motion.div animate={{ scaleY: [1, 0.3, 1] }} transition={{ duration: 0.32, repeat: Infinity, repeatDelay: 0.42, ease: "easeInOut", delay: 0.2 }} style={{ transformOrigin: "center" }}>
                        <Image src="/decorations/butterfly.png" alt="" width={22} height={22} />
                    </motion.div>
                </motion.div>
            </div>

            <a href={`https://instagram.com/${person.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 mt-5 text-[11px] font-semibold text-[#45523A] border border-[#C9CFB4] rounded-full px-3 py-1.5 hover:bg-[#45523A]/5 transition-colors">
                <InstagramIcon size={13} />
                {person.instagram}
            </a>
            <p className="font-script text-6xl sm:text-5xl text-[#3A4530] mt-4 leading-tight">
                {person.fullName}
            </p>

            <p className="font-serif text-xs font-semibold text-[#7C8567] mt-2">
                {person.order} dari
            </p>
            <p className="text-[11px] text-[#7C8567] max-w-[85vw] sm:max-w-[260px] mx-auto leading-relaxed">
                {person.father}
                <br />
                &amp; {person.mother}
            </p>
        </motion.div>
    );
}

export default function CoupleSection() {
    const { groom, bride, couple } = weddingData;

    return (
        <div id="couple" className="relative w-full flex flex-col items-center px-4 py-16 gap-16 bg-[#F8F4E9]">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[1px] bg-gradient-to-r from-transparent via-[#C9CFB4] to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[1px] bg-gradient-to-r from-transparent via-[#C9CFB4] to-transparent" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.8 }} className="relative z-10 text-center">
                <h2 className="font-script text-4xl text-[#3A4530] mb-2">
                    {couple.title}
                </h2>
                <p className="text-[11px] text-[#7C8567] max-w-[260px] mx-auto leading-relaxed">
                    {couple.subtitle}
                </p>
            </motion.div>

            <div className="relative z-10 flex flex-col items-center gap-14 w-full">
                <PersonCard person={groom} roleLabel={couple.groomLabel} delay={0.1} />

                <div className="flex items-center gap-4 -mt-6">
                    <div className="w-10 h-px bg-[#C9CFB4]" />
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-[#9BA384]" />
                        <span className="font-script text-2xl text-[#7C8567]">&amp;</span>
                        <div className="w-1 h-1 rounded-full bg-[#9BA384]" />
                    </div>
                    <div className="w-10 h-px bg-[#C9CFB4]" />
                </div>

                <PersonCard person={bride} roleLabel={couple.brideLabel} delay={0.2} />
            </div>
        </div>
    );
}