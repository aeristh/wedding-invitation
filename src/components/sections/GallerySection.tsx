"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/data/weddingData";
import Lightbox from "@/components/ui/Lightbox";

export default function GallerySection() {
    const { gallery } = weddingData;
    const { mosaicPhotos } = gallery;
    const [selected, setSelected] = useState<string | null>(null);
    const [offset, setOffset] = useState(0);

    const total = gallery.photos.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset((prev) => (prev + 1) % total);
        }, 3000);
        return () => clearInterval(interval);
    }, [total]);

    return (
        <div id="gallery" className="relative w-full flex flex-col items-center px-6 pt-28 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #E8E8EA 0%, #C9CACE 50%, #DCDDE0 100%)" }}>

            <motion.h2 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-script text-4xl text-[#2C2A29] mb-3 text-center">
                {gallery.title}
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm text-[#6B6862] text-center max-w-[280px] mb-8">
                {gallery.videoCaption}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative w-full max-w-[320px] aspect-video rounded-2xl overflow-hidden shadow-xl bg-neutral-900 mb-10">
                <video src={gallery.video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full max-w-[320px] text-center mb-10">
                <h2 className="font-script text-4xl text-[#2C2A29] mb-3">{gallery.preciousTitle}</h2>
                <p className="text-sm text-[#6B6862] italic leading-relaxed">
                    &ldquo;{gallery.photoQuote}&rdquo;
                </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full max-w-[320px] mb-10">
                <div className="relative w-full" style={{ aspectRatio: "440/685" }}>

                    <button onClick={() => setSelected(mosaicPhotos[0])} className="absolute overflow-hidden" style={{ left: "9%", top: "-1%", width: "48%", height: "44%" }}>
                        <Image src={mosaicPhotos[0]} alt="" fill className="object-cover object-center" />
                    </button>

                    <button onClick={() => setSelected(mosaicPhotos[1])} className="absolute overflow-hidden" style={{ left: "60%", top: "13%", width: "36%", height: "30%" }}>
                        <Image src={mosaicPhotos[1]} alt="" fill className="object-cover object-center" />
                    </button>

                    <button onClick={() => setSelected(mosaicPhotos[2])} className="absolute overflow-hidden" style={{ left: "-1%", top: "45%", width: "39%", height: "38%" }}>
                        <Image src={mosaicPhotos[2]} alt="" fill className="object-cover object-center" />
                    </button>

                    <button onClick={() => setSelected(mosaicPhotos[3])} className="absolute overflow-hidden" style={{ left: "41%", top: "45%", width: "61%", height: "24%" }}>
                        <Image src={mosaicPhotos[3]} alt="" fill className="object-cover object-center" />
                    </button>

                    <button onClick={() => setSelected(mosaicPhotos[4])} className="absolute overflow-hidden" style={{ left: "41%", top: "71%", width: "36%", height: "32%" }}>
                        <Image src={mosaicPhotos[4]} alt="" fill className="object-cover object-center" />
                    </button>

                </div>
            </motion.div>

            <div
                className="relative w-full flex flex-col items-center"
                style={{ background: "#FBF9F6", borderTopLeftRadius: "50% 100px", borderTopRightRadius: "50% 100px", marginLeft: "-1.5rem", marginRight: "-1.5rem", width: "calc(100% + 3rem)", paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "3.5rem", paddingBottom: "0", overflow: "hidden", marginBottom: "-80px", }}>
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full max-w-[320px] text-center mb-6">
                    <h3 className="font-script text-3xl text-[#2C2A29] mb-2">{gallery.photoGalleryTitle}</h3>
                    <p className="text-sm text-[#6B6862]">{gallery.photoGallerySubtitle}</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid gap-2 w-full max-w-[320px] pt-20" style={{ gridTemplateColumns: "1fr 1fr" }}>
                    <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                        <motion.button layout onClick={() => setSelected(gallery.photos[(0 + offset) % total])} transition={{ type: "spring", stiffness: 200, damping: 24 }} className="absolute bottom-0 right-0 overflow-hidden" style={{ width: "100%", aspectRatio: "9/16" }}>
                            <Image src={gallery.photos[(0 + offset) % total]} alt="" fill className="object-cover object-center" />
                        </motion.button>
                    </div>

                    <div className="relative w-full" style={{ aspectRatio: "3/4", transform: "translateY(-80px)" }}>
                        <motion.button layout onClick={() => setSelected(gallery.photos[(1 + offset) % total])} transition={{ type: "spring", stiffness: 200, damping: 24 }} className="absolute bottom-0 left-0 overflow-hidden" style={{ width: "70%", aspectRatio: "3/4" }}>
                            <Image src={gallery.photos[(1 + offset) % total]} alt="" fill className="object-cover object-center" />
                        </motion.button>
                    </div>

                    <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                        <motion.button layout onClick={() => setSelected(gallery.photos[(2 + offset) % total])} transition={{ type: "spring", stiffness: 200, damping: 24 }} className="absolute top-0 right-0 overflow-hidden" style={{ width: "70%", aspectRatio: "3/4" }}>
                            <Image src={gallery.photos[(2 + offset) % total]} alt="" fill className="object-cover object-center" />
                        </motion.button>
                    </div>

                    <div style={{ transform: "translateY(-80px)" }}>
                        <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                            <motion.button layout onClick={() => setSelected(gallery.photos[(3 + offset) % total])} transition={{ type: "spring", stiffness: 200, damping: 24 }} className="absolute top-0 left-0 overflow-hidden" style={{ width: "100%", aspectRatio: "9/16" }}>
                                <Image src={gallery.photos[(3 + offset) % total]} alt="" fill className="object-cover object-center" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Lightbox src={selected} onClose={() => setSelected(null)} />
        </div>
    );
}

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { weddingData } from "@/data/weddingData";
// import Lightbox from "@/components/ui/Lightbox";

// export default function GallerySection() {
//     const { gallery } = weddingData;
//     const { mosaicPhotos } = gallery;
//     const [selected, setSelected] = useState<string | null>(null);

//     return (
//         <div id="gallery" className="relative w-full flex flex-col items-center px-6 pt-28 pb-0 overflow-hidden" style={{ background: "linear-gradient(135deg, #E8E8EA 0%, #C9CACE 50%, #DCDDE0 100%)" }}>

//             <motion.h2 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-script text-4xl text-[#2C2A29] mb-3 text-center">
//                 {gallery.title}
//             </motion.h2>

//             <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="text-sm text-[#6B6862] text-center max-w-[280px] mb-8">
//                 {gallery.videoCaption}
//             </motion.p>

//             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative w-full max-w-[320px] aspect-video rounded-2xl overflow-hidden shadow-xl bg-neutral-900 mb-16">
//                 <video src={gallery.video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
//             </motion.div>

//             <div
//                 className="relative w-full flex flex-col items-center"
//                 style={{
//                     background: "#FBF9F6",
//                     borderTopLeftRadius: "50% 100px",
//                     borderTopRightRadius: "50% 100px",
//                     marginLeft: "-1.5rem",
//                     marginRight: "-1.5rem",
//                     width: "calc(100% + 3rem)",
//                     paddingLeft: "1.5rem",
//                     paddingRight: "1.5rem",
//                     paddingTop: "3.5rem",
//                     paddingBottom: "2.5rem",
//                 }}
//             >
//                 <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full max-w-[320px] text-center mb-10 z-10">
//                     <h2 className="font-script text-4xl text-[#2C2A29] mb-3">{gallery.preciousTitle}</h2>
//                     <p className="text-sm text-[#6B6862] italic leading-relaxed">
//                         &ldquo;{gallery.photoQuote}&rdquo;
//                     </p>
//                 </motion.div>

//                 <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full max-w-[320px] z-10">
//                     <div className="relative w-full" style={{ aspectRatio: "440/685" }}>

//                         <button onClick={() => setSelected(mosaicPhotos[0])} className="absolute overflow-hidden" style={{ left: "9%", top: "-1%", width: "48%", height: "44%" }}>
//                             <Image src={mosaicPhotos[0]} alt="" fill className="object-cover object-center" />
//                         </button>

//                         <button onClick={() => setSelected(mosaicPhotos[1])} className="absolute overflow-hidden" style={{ left: "60%", top: "13%", width: "36%", height: "30%" }}>
//                             <Image src={mosaicPhotos[1]} alt="" fill className="object-cover object-center" />
//                         </button>

//                         <button onClick={() => setSelected(mosaicPhotos[2])} className="absolute overflow-hidden" style={{ left: "-1%", top: "45%", width: "39%", height: "38%" }}>
//                             <Image src={mosaicPhotos[2]} alt="" fill className="object-cover object-center" />
//                         </button>

//                         <button onClick={() => setSelected(mosaicPhotos[3])} className="absolute overflow-hidden" style={{ left: "41%", top: "45%", width: "61%", height: "24%" }}>
//                             <Image src={mosaicPhotos[3]} alt="" fill className="object-cover object-center" />
//                         </button>

//                         <button onClick={() => setSelected(mosaicPhotos[4])} className="absolute overflow-hidden" style={{ left: "41%", top: "71%", width: "36%", height: "32%" }}>
//                             <Image src={mosaicPhotos[4]} alt="" fill className="object-cover object-center" />
//                         </button>

//                     </div>
//                 </motion.div>
//             </div>

//             <Lightbox src={selected} onClose={() => setSelected(null)} />
//         </div>
//     );
// }