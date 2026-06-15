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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay }} className="flex flex-col items-center text-center w-full px-6">
            <p className="font-serif text-xs tracking-[0.35em] uppercase text-[#9C958B] mb-5">
                {roleLabel}
            </p>

            <div className="relative w-52 h-52 rounded-full p-1 border border-[#C9CDD1]">
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#FBF9F6]">
                    <Image src={person.photo} alt={person.fullName} fill className="object-cover object-center" />
                </div>
            </div>

            <a href={`https://instagram.com/${person.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 mt-4 text-[11px] font-semibold text-[#3A3633]">
                <InstagramIcon size={13} />
                {person.instagram}
            </a>
            <p className="font-script text-5xl text-[#2C2A29] mt-3 leading-tight">
                {person.fullName}
            </p>

            <p className="font-serif text-xs font-semibold text-[#3A3633] mt-4">
                {person.order} dari
            </p>
            <p className="text-[11px] text-[#7C756E] mt-1 leading-relaxed">
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
        <div
            id="couple"
            className="w-full flex flex-col items-center px-4 py-20 gap-16"
            style={{ background: "linear-gradient(180deg, #FAFAFA 0%, #D8DADC 50%, #B8BCC0 100%)", }}>
            <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
                <h2 className="font-serif text-2xl text-[#2C2A29] mb-2">
                    {couple.title}
                </h2>
                <p className="text-[11px] text-[#7C756E] max-w-[260px] mx-auto leading-relaxed">
                    {couple.subtitle}
                </p>
            </motion.div>

            <PersonCard person={groom} roleLabel={couple.groomLabel} delay={0.1} />
            <PersonCard person={bride} roleLabel={couple.brideLabel} delay={0.2} />
        </div>
    );
}