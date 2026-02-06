import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh text-white">
      <section className="min-h-dvh bg-[url('/Movie.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="min-h-dvh bg-black/40 flex items-center justify-center">
          <div className="space-y-10 md:max-w-4xl p-3 text-center">
            <h1 className="md:text-5xl text-3xl font-bold">
About NollyPulse
            </h1>
            <p className="md:text-2xl text-lg font-light">
              <span className="text-orange-300 font-semibold"></span> NollyPulse is a modern movie culture platform built to capture the true heartbeat of Nigerian cinema.

Nollywood is more than films. It’s emotion, language, chaos, humor, culture, struggle, and celebration — all packed into stories we argue about, quote daily, and rewatch with family and friends. NollyPulse exists to organize, explore, and amplify that experience in one intelligent digital home.

This is not just a review site.
It’s a full Nollywood discovery and conversation ecosystem.</p>
           
          </div>
        </div>
      </section>

      <section id="about" className="bg-black py-24 px-6 md:px-20 text-center">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
Why NollyPulse Exists
          </h2>
          <p className="md:text-xl text-lg font-light text-blue/90">
            Finding good Nigerian movies shouldn’t feel like guesswork or random scrolling.
<p className="mt-6 space-y-4 font-bold capitalize text-blue-300">
Too often:
</p>
<div className="mt-6 space-y-4">
Reviews feel disconnected from real Nigerian experiences

<p className="mt-6 space-y-4">Platforms don’t understand local humor, language, or cultural context </p>

<p className="mt-6 space-y-4">Hidden gems get buried while mediocre movies trend </p>

<p className="mt-6 space-y-4">Conversations are scattered across social media with no structure </p>

<p className="mt-6 space-y-4 text-4xl text-bold capitalize text-blue-300">NollyPulse was created to fix that.</p>
<p>We combine community insight, cultural perspective, and smart technology to help people discover Nigerian films that actually match their taste, mood, and vibe.</p>
</div>
          </p>
          <p className="md:text-lg text-base text-white/80">
            Whether you're a reviewer working on reviews, a movie enthusiast looking
            for a good movie , or a team collaborating on movie collaboration, Nollypulse
            becomes your second cinema — organized, connected, and always accessible.
          </p>
        </div>
      </section>

      <section id="features" className="bg-black/95 py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
              What Makes NollyPulse Different
            </h2>
            <p className="md:text-xl text-lg font-light text-white/90">
              Movies don’t hit Nigerians the same way numbers do.

That’s why we created the Vibe Score System, where films are rated using relatable categories:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-blue-300">
😂 Cruise — Comedy & Entertainment Value
              </h3>
              <p className="text-white/80">
                What it measures:
How funny, light-hearted, or entertaining the movie is.

This includes:

intentional comedy

witty dialogue

situational humor

moments that make you laugh, smile, or relax

A high Cruise score doesn’t mean the movie is unserious — it means it knows how to entertain.
              </p>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-blue-300">
                🔥 Vex — Action, Tension & Energy
              </h3>
              <p className="text-white/80">
What it measures:
Intensity, conflict, action, and emotional pressure.

This includes:

fight scenes and physical action

dramatic confrontations

suspense and chaos

pacing that keeps you alert

High Vex films keep your heart rate up and your attention locked in.              </p>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-blue-300">
                😭 Tears — Emotional Impact
              </h3>
              <p className="text-white/80">
What it measures:
How deeply the movie connects emotionally.

This includes:

heartbreak

joy

sacrifice

family themes

moments that linger after the movie ends

A high Tears score means the movie stays with you, not just while watching, but after.
              </p>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-blue-300">
💃 Vibe — Overall Enjoyment
              </h3>
              <p className="text-white/80">
What it measures:
The general “how did this movie make you feel?” factor.

This includes:

replay value

mood satisfaction

soundtrack synergy

whether you’d recommend it to someone

Vibe captures the holistic experience — the sum of all feelings combined.
              </p>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-blue-300">
🧠 Sense — Story Depth & Meaning
              </h3>
              <p className="text-white/80">
What it measures:
Narrative quality, logic, and substance.

This includes:

plot coherence

character development

themes and symbolism

cultural or social commentary

High Sense films reward attention and reflection.
              </p>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-blue-300">
                 How the Ratings Work
              </h3>
              <p className="text-white/80">
Each vibe category is rated independently by users and critics.

Instead of a single score:

movies display five colored meters

viewers instantly see what kind of experience the movie offers

Two movies can have the same overall popularity but feel completely different — and the vibe breakdown makes that clear.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="bg-black py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-blue-600">
🧠 Context-Aware Movie Insights
            </h2>
            <p className="md:text-xl text-lg font-bold text-blue-200">
Some Nollywood movies are layered, symbolic, or intentionally ambiguous.

With features like Explain This Ending, NollyPulse helps viewers understand:            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            <div className="space-y-3">
              <span className="text-blue-300 font-bold text-2xl">01</span>
              <h4 className="text-xl font-semibold">hidden meanings</h4>
              <p className="text-white/80">
                Save ideas, quotes, papers, and thoughts as structured notes.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-blue-300 font-bold text-2xl">02</span>
              <h4 className="text-xl font-semibold">cultural references</h4>
              <p className="text-white/80">
                Group movies into cultures, tag them, and apply consistent structure.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-blue-300 font-bold text-2xl">03</span>
              <h4 className="text-xl font-semibold">character motivations</h4>
              <p className="text-white/80">
                Link character arcs, developement and experiences to reveal insights, motivations and patterns.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-blue-300 font-bold text-2xl">04</span>
              <h4 className="text-xl font-semibold">symbolic endings</h4>
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
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
              Designed for Deep Thinkers
            </h2>
            <p className="md:text-xl text-lg font-light text-white/90">
              NollyPulse doesn't just store movie reviews — it improves how you watch movies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-300">
                review Faster, watch movies Clearer
              </h3>
              <p className="text-white/80">
                By structuring your reviews and linking ideas, NollyPulse helps
                you write movies reviews, plots, and character designs with clarity and confidence.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-300">
                Reduce Cognitive Load
              </h3>
              <p className="text-white/80">
                Stop relying on memory alone. Your Reviews lives in a system that
                remembers, organizes, and retrieves your favourite movie information for you.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-300">
                Build Long-Term movie reviews
              </h3>
              <p className="text-white/80">
                Unlike scattered documents, ScholarNote grows with you — becoming a
                permanent knowledge base across years of learning and research.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-300">
                Collaborate Without Friction
              </h3>
              <p className="text-white/80">
                Share reviews early, receive feedback continuously, and co-develop
                research without the usual tool chaos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
              What Users Are Saying
            </h2>
            <p className="md:text-xl text-lg font-light text-blue-400">
              Trusted by students, researchers, and knowledge workers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <p className="text-white/80">
                “I used to jump between 3–4 sites just to figure out if a movie is worth watching. On NollyPulse, I see the vibe breakdown instantly — and I trust it. The Vex and Sense scores help me pick thrillers that actually hit, not ones with fake action.”
              </p>
              <p className="text-xs text-white/60">Location: Lagos, NG</p>
              <p className="text-xs text-white/60">About: Watches everything Nollywood drops and has strong opinions.</p>
              <span className="text-sm text-blue-300 font-semibold">
                 Tobi — The Movie Buff
              </span>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <p className="text-white/80">
                “I told PulseAI: ‘I want something funny and emotional for family night.’ It picked films I didn’t even know existed, and we all laughed and cried. This is nothing like IMDB star ratings — the vibe scores actually make sense.”
              </p>
              <p className="text-xs text-white/60">Location: Abuja, NG</p>
              <p className="text-xs text-white/60">About: Doesn’t watch movies daily but wants quality recommendations.</p>
              <span className="text-sm text-blue-300 font-semibold">
                  Amaka — Casual Weekend Watcher
              </span>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <p className="text-white/80">
               “Some endings just leave you scratching your head. The Explain This Ending feature gave context and cultural references I never thought about. Now every movie night turns into a mini discussion. NollyPulse turned film watching into a whole experience.”
              </p>
              <p className="text-xs text-white/60">Location: Port Harcourt, NG</p>
              <p className="text-xs text-white/60">About: Loves Nigerian films and enjoys breaking down meaning and themes.</p>
              <span className="text-sm text-blue-300 font-semibold">
                Chinedu — The Nollywood Deep Diver
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black/95 py-24 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Building Your movie review System Today
          </h2>
          <p className="md:text-xl text-lg font-light text-white/90">
            Join thousands of Nollywood fans shaping how movies are rated, recommended, and talked about — the Nigerian way.
          </p>
          <div className="flex items-center justify-center gap-10 max-md:flex-col">
            <Link
              href={"/auth/signin"}
              className="bg-blue-600 px-8 py-4 uppercase font-semibold max-md:w-full text-center"
            >
              Get Started Free
            </Link>
            <Link
              href={"/resources"}
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