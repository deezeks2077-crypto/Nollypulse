import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
     <main className="min-h-dvh text-white">
      <section className="min-h-dvh bg-[url('/cinema 2.jpg')] bg-no-repeat bg-center bg-cover">
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
          <Link href={"#"} className="bg-red-600 px-6 py-3 uppercase font-semibold max-md:w-full text-center rounded-full">Explore Recommendations</Link>
          <Link href={"#"} className="border px-6 py-3 font-semibold max-md:full text-center rounded-full">Find Out More</Link>
        </div>
       </div>
       </div>
        </section>

        <section id="about" className="bg-black py-24 px-6 md:px-20 text-center">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why NollyPulse Exists
          </h2>
          <p className="md:text-xl text-lg font-light text-white/90">
Movie opinions, recommendations, and Nollywood culture are fragmented across platforms.
NollyPulse centralizes discovery, reviews, and community with AI-powered recommendations built for Nigerian audiences.
          </p>
          <p className="md:text-lg text-base text-white/80">
            Whether you’re a casual viewer looking for something to watch, a film lover breaking down scenes and performances, or a community debating the hottest Nollywood moments, NollyPulse becomes your movie brain — organized, connected, and always tuned to the heartbeat of Nigerian cinema.
          </p>
        </div>
      </section>

      <section id="features" className="bg-black/95 py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything You Need to review Smarter
            </h2>
            <p className="md:text-xl text-lg font-light text-white/90">
              NollyPulse combines powerful organization tools with intelligent
              linking and collaboration features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-orange-300">
                Structured reviews
              </h3>
              <p className="text-white/80">
                Create clean, organized reviews with headings, tags, references, and
                metadata that make retrieval effortless and reviewing faster.
              </p>
            </div>

            <div className="bg-blue/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-orange-300">
                Connected Ideas
              </h3>
              <p className="text-white/80">
                Link concepts, movies, and thoughts together to build a living
                movie graph that mirrors how you actually think.
              </p>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-orange-300">
                Seamless Collaboration
              </h3>
              <p className="text-white/80">
                Work with classmates, research partners, and teams in real-time —
                share notes, leave feedback, and co-create knowledge effortlessly.
              </p>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-orange-300">
                Smart Search
              </h3>
              <p className="text-white/80">
                Instantly find any note, reference, or idea using full-text search,
                filters, and tags — even across large research collections.
              </p>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-orange-300">
                Research Collections
              </h3>
              <p className="text-white/80">
                Organize projects into structured collections — perfect for theses,
                dissertations, long-term studies, and knowledge libraries.
              </p>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-orange-300">
                Knowledge Sharing
              </h3>
              <p className="text-white/80">
                Publish selected notes, insights, or collections for others to learn
                from — turning private research into shared knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="bg-black py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              How ScholarNote Works
            </h2>
            <p className="md:text-xl text-lg font-light text-white/90">
              A simple workflow designed around how real research happens.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            <div className="space-y-3">
              <span className="text-orange-300 font-bold text-2xl">01</span>
              <h4 className="text-xl font-semibold">Capture</h4>
              <p className="text-white/80">
                Save ideas, quotes, papers, and thoughts as structured notes.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-orange-300 font-bold text-2xl">02</span>
              <h4 className="text-xl font-semibold">Organize</h4>
              <p className="text-white/80">
                Group notes into projects, tag them, and apply consistent structure.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-orange-300 font-bold text-2xl">03</span>
              <h4 className="text-xl font-semibold">Connect</h4>
              <p className="text-white/80">
                Link related ideas together to reveal insights and patterns.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-orange-300 font-bold text-2xl">04</span>
              <h4 className="text-xl font-semibold">Collaborate</h4>
              <p className="text-white/80">
                Share knowledge, invite collaborators, and co-create research.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black/95 py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Designed for Deep Thinking
            </h2>
            <p className="md:text-xl text-lg font-light text-white/90">
              ScholarNote doesn't just store information — it improves how you think.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-300">
                Write Faster, Think Clearer
              </h3>
              <p className="text-white/80">
                By structuring your knowledge and linking ideas, ScholarNote helps
                you write papers, essays, and reports with clarity and confidence.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-300">
                Reduce Cognitive Load
              </h3>
              <p className="text-white/80">
                Stop relying on memory alone. Your research lives in a system that
                remembers, organizes, and retrieves information for you.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-300">
                Build Long-Term Knowledge
              </h3>
              <p className="text-white/80">
                Unlike scattered documents, ScholarNote grows with you — becoming a
                permanent knowledge base across years of learning and research.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-300">
                Collaborate Without Friction
              </h3>
              <p className="text-white/80">
                Share ideas early, receive feedback continuously, and co-develop
                reviews without the usual boring repetitive monolouge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Users Are Saying
            </h2>
            <p className="md:text-xl text-lg font-light text-white/90">
              Trusted by actors, directors, and movie wiki workers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <p className="text-white/80">
                “NollyPulse completely changed how I manage my thesis. Everything
                is structured, searchable, and connected — I finally feel in control
                of my movie choices without misdirection or misleading content.”
              </p>
              <span className="text-sm text-orange-300 font-semibold">
                — Movie Enthausist
              </span>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <p className="text-white/80">
                “This feels like a second cinema built specifically for movie reviews. The
                ability to link reviews has improved the quality of my movie choices.”
              </p>
              <span className="text-sm text-orange-300 font-semibold">
                — Movie Reviewer
              </span>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <p className="text-white/80">
                “Collaborating with my team has never been easier. We share notes,
                build knowledge together, and stay aligned throughout our projects.”
              </p>
              <span className="text-sm text-orange-300 font-semibold">
                — Project Team Lead
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black/95 py-24 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Building Your Movie System Today
          </h2>
          <p className="md:text-xl text-lg font-light text-white/90">
            Join viewers, reviewers, and professionals who are transforming how
            they capture, connect, and collaborate on movie Choices.
          </p>
          <div className="flex items-center justify-center gap-10 max-md:flex-col">
            <Link
              href={"/auth/signin"}
              className="bg-orange-600 px-8 py-4 uppercase font-semibold max-md:w-full text-center"
            >
              Get Started Free
            </Link>
            <Link
              href={"/about"}
              className="border px-8 py-4 font-semibold max-md:w-full text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 
