"use client";
import BG from "@/components/lights-bg";
import Footer from "@/components/footer";
import { ContactSection } from "@/components/contact";
import Projects from "@/components/project";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

export default function Home() {
  const ismobile = useIsMobile()
  const router = useRouter()
  return (
    <div className="min-h-screen w-full rounded-md bg-black/96 antialiased bg-grid-white/[0.02] relative overflow-hidden mx-auto">
      <BG />
      <main className="max-w-6xl mx-auto py-20 px-5">
        <Button
        variant={"outline"}
          className="sm:text-md cursor-pointer absolute left-3 top-3"
          size={ismobile ? "sm" : "default"}
          onClick={() => router.push("/")}
        ><MoveLeft />
          Home
        </Button>
        <Projects />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}