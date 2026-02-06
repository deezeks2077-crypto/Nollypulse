
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
     <main className="min-h-dvh text-white">
      <section className="min-h-dvh bg-[url('/mm2.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="min-h-dvh bg-black/40 flex items-center justify-center">
          <div className="space-y-10 md:max-w-4xl p-3 text-center">
            <h1 className="md:text-5xl text-3xl font-bold">
              Nolly pulse - A Movie Review Hub
            </h1>
        <p className="md:text-2xl text-lg font-light">
        <span className="text-slate-600 font-bold">Nolly </span><span className="text-red-600 font-semibold text-center">Pulse </span> is the ultimate hub for Nollywood lovers who want more than just movie titles. It’s where Nigerian cinema breathes — reviews with real opinions, vibe-based ratings that actually make sense, and smart recommendations that match your mood, not algorithms from abroad.

Discover what to watch through PulseAI — tell us your vibe and get Nigerian-accurate picks. Check where movies are streaming, explore curated lists, break down confusing endings, and join PulseNation, a community that debates, rates, jokes, and lives Nollywood culture in real time.

From cinema releases to YouTube gems, Lagos thrillers to village epics — NollyPulse helps you feel the heartbeat of Nigerian cinema before you press play.</p>
        <div className="flex items-center gap-10 max-md:flex-col">
          <Link href={"/resources"} className="bg-red-600 px-6 py-3 uppercase font-semibold max-md:w-full text-center rounded-full">Explore Recommendations</Link>
          <Link href={"/about"} className="border px-6 py-3 font-semibold max-md:full text-center rounded-full">Find Out More</Link>
        </div>
       </div>
       </div>
        </section>

       
    </main>
  );
} 
