"use client";

import { useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import HeroSection from "@/components/sections/HeroSection";
import QuoteSection from "@/components/sections/QuoteSection";
import CoupleSection from "@/components/sections/CoupleSection";
import StorySection from "@/components/sections/StorySection";
import GallerySection from "@/components/sections/GallerySection";
import DateSection from "@/components/sections/DateSection";
import RsvpSection from "@/components/sections/RsvpSection";
// import RsvpStatSection from "@/components/sections/RsvpStatSection";
import LocationSection from "@/components/sections/LocationSection";
import GiftSection from "@/components/sections/GiftSection";
import WishesSection from "@/components/sections/WishesSection";
import FooterSection from "@/components/sections/FooterSection";
// import BottomNav from "@/components/ui/BottomNav";
import CoverScreen from "@/components/sections/CoverScreen";
import MusicPlayer, { MusicPlayerHandle } from "@/components/ui/MusicPlayer";
import { weddingData } from "@/data/weddingData";

function HomeContent() {
  const [isOpen, setIsOpen] = useState(false);
  const musicRef = useRef<MusicPlayerHandle>(null);
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || weddingData.cover.defaultGuest;

  const handleOpen = () => {
    setIsOpen(true);
    musicRef.current?.play();
  };

  return (
    <>
      {!isOpen ? (
        <CoverScreen guestName={guestName} onOpen={handleOpen} />
      ) : (
        <div className="bg-neutral-900 flex justify-center min-h-screen">
          <main className="relative w-full sm:w-[390px] shadow-2xl">
            <HeroSection />
            <QuoteSection />
            <CoupleSection />
            <StorySection />
            <GallerySection />
            <DateSection />
            {/* <RsvpStatSection /> */}
            <RsvpSection />
            <LocationSection />
            <GiftSection />
            <WishesSection />
            <FooterSection />
            {/* <BottomNav /> */}
          </main>
        </div>
      )}
      <MusicPlayer ref={musicRef} />
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}