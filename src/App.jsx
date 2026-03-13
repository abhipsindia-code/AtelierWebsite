import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone } from 'lucide-react'


// Simple App composed from small components (Header, Hero, Services, Portfolio, Contact, Footer)
export default function App() {
  return (
    <div className="min-h-screen mx-auto bg-[var(--color-atbase)] text-[var(--color-attext)]">
      <Header />

      <main className="mx-auto">
        <Hero />
        <CredibilityStrip />
        <Services />
        <DesignLanguage />
        <Philosophy />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}


import { useEffect, useState } from "react";
import { Menu } from "lucide-react"; // optional icon - you already have lucide-react installed

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48); // threshold in px
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // classes change depending on scrolled state
  const wrapperClass = scrolled
    ? "fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200 transition-colors duration-250"
    : "absolute inset-x-0 top-0 z-50 pointer-events-none";

  const containerClass = "max-w-6xl mx-auto p-6 flex items-center justify-between";

  // nav link color: white over hero, dark when scrolled
  const linkClass = scrolled ? "text-slate-700" : "text-grey-100";
  const subtleLinkClass = scrolled ? "text-slate-600" : "text-white/90";

  return (
    <header className={wrapperClass}>
      {/* make the inner container pointer-events active so the menu/links work even when wrapper is pointer-events-none */}
      <div className={`${containerClass} pointer-events-auto`}>
        {/* left: logo */}
        <div className="flex items-center gap-5">

          <img
            src="/logo/atelier-mark.svg"
            className="h-10 w-auto"
            alt="Atelier Progetto"
          />

          <img
            src="/logo/atelier-wordmark.svg"
            className="h-5 w-auto opacity-90"
            alt="Atelier Progetto"
          />

        </div>

        {/* nav - uses same container width so it lines up with main content */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#services" className={`${linkClass} hover:underline`}>Services</a>
          <a href="#portfolio" className={`${linkClass} hover:underline`}>Portfolio</a>
          <a href="#process" className={`${linkClass} hover:underline`}>Process</a>
          <a href="#contact" className={`${linkClass} hover:underline`}>Contact</a>

          <a
            href="#"
            className={`ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-md shadow-sm ${scrolled ? "bg-slate-900 text-white" : "bg-white/10 text-white border border-white/20"}`}
          >
            Get a Quote
          </a>
        </nav>

        {/* mobile menu button (visible on small screens) */}
        <div className="md:hidden">
          <button
            aria-label="open menu"
            className={`p-2 rounded-md border ${scrolled ? "border-slate-200 text-slate-700 bg-white/60" : "border-white/30 text-white bg-black/20"}`}
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}



//HERO SECTIONS   

function Hero() {
  return (
    <section className="relative min-h-screen bg-[var(--color-atbase)] text-[var(--color-atheading)] flex items-center">

      {/* content container */}
      <div className="max-w-[1280px] mx-auto px-8 w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — Typography */}
        <div>

          <h1 className="text-[48px] md:text-[72px] lg:text-[84px] font-light leading-[1.05] tracking-[-0.02em]">
            Interiors with precision
            <br />
            <span className="text-[var(--color-atbronze)] font-medium">crafted to last.</span>
          </h1>

          <p className="mt-10 text-[18px] leading-[1.7] text-[var(--color-atmuted)] max-w-[520px]">
            Execution-led interior studio focused on timelines, material integrity
            and flawless delivery — from concept to final handover.
          </p>

          {/* CTA */}
          <div className="mt-12 flex items-center gap-8">
            <a
              href="#contact"
              className="px-8 py-4 bg-[var(--color-atbronze)] text-white text-[14px] tracking-[0.08em] uppercase"
            >
              Start a Project
            </a>

            <a
              href="#portfolio"
              className="text-[14px] tracking-[0.12em] uppercase text-[var(--color-atmuted)] hover:text-[#b08d57]"
            >
              View Portfolio →
            </a>
          </div>
        </div>

        {/* RIGHT — Image stack */}
        <div className="relative h-[100vh] hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop"
            className="absolute top-0 right-0 w-[75%] h-[50%] object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
            className="absolute bottom-0 left-0 w-[70%] h-[55%] object-cover"
          />
        </div>
      </div>

      {/* GOLD DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--color-atborder)] opacity-60"></div>

    </section>
  );
}

function oldHero() {
  // placeholder image urls (swap to your own or video later)
  const imgs = [
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505692952047-1a78307daae3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
  ]



  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* tiled image background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full grid grid-cols-3 md:grid-cols-6 gap-2 p-4">
          {imgs.map((src, i) => (
            <div key={i} className="relative w-full h-full overflow-hidden rounded-md">
              <img
                src={src}
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

      </div>

      {/* dark overlay to increase contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* centered content container that matches the rest of the site */}
      <div className="relative">
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-36">
          <div className="grid grid-cols-1 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
                Interiors with precision, <span className="text-amber-400">crafted to last.</span>
              </h1>

              <p className="mt-6 text-slate-200 max-w-lg">
                Atelier Progetto combines architectural rigor with practical execution — from concept
                to final touch-ups. We design functional spaces that feel curated and lived in.
              </p>

              <div className="mt-8 flex gap-4">
                <a className="inline-flex items-center gap-2 px-4 py-3 bg-amber-500 text-white rounded-md shadow hover:opacity-95" href="#contact">
                  Start a Project
                </a>
                <a className="inline-flex items-center gap-2 px-4 py-3 border border-white/30 rounded-md text-white/90" href="#portfolio">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* down arrow CTA centered */}
        <div className="flex justify-center">
          <div className="mt-6 mb-6 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

//credibility section

function CredibilityStrip() {
  return (
    <section className="w-full bg-[#1a1a1a] border-t border-[#8c6b3f]/40">
      <div className="max-w-[1520px] mx-auto px-8 py-16 grid md:grid-cols-4 gap-12">

        <div>

          <div className="w-[2px] h-6 bg-[#a8844f] mb-4"></div> <div className="text-[#a8844f] text-sm tracking-[0.18em] uppercase">Timelines</div>
          <div className="mt-3 text-white/80 leading-relaxed">
            Structured execution schedules with milestone tracking and disciplined delivery windows.
          </div>
        </div>

        <div>
          <div className="w-[2px] h-6 bg-[#a8844f] mb-4"></div> <div className="text-[#a8844f] text-sm tracking-[0.18em] uppercase">Material Integrity</div>
          <div className="mt-3 text-white/80 leading-relaxed">
            Careful sourcing, finish precision and on-site supervision ensure material honesty.
          </div>
        </div>

        <div>
          <div className="w-[2px] h-6 bg-[#a8844f] mb-4"></div>
          <div className="text-[#a8844f] text-sm tracking-[0.18em] uppercase">Site Management</div>
          <div className="mt-3 text-white/80 leading-relaxed">
            Daily coordination, vendor alignment and quality checks keep projects controlled.
          </div>
        </div>

        <div>
          <div className="w-[2px] h-6 bg-[#a8844f] mb-4"></div>
          <div className="text-[#a8844f] text-sm tracking-[0.18em] uppercase">Final Handover</div>
          <div className="mt-3 text-white/80 leading-relaxed">
            Touch-ups, cleaning and finishing discipline before client walkthrough and closure.
          </div>
        </div>

      </div>
    </section>
  );
}


function Services() {
  const services = [
    {
      title: "Design & Documentation",
      desc: "Architectural drawings, finish schedules and practical detailing for execution clarity."
    },
    {
      title: "Execution & Project Management",
      desc: "On-site supervision, vendor coordination and milestone-based progress control."
    },
    {
      title: "Custom Furniture & Joinery",
      desc: "Built-ins, cabinetry and bespoke fabrication aligned with material intent."
    },
    {
      title: "Electrical & Plumbing Integration",
      desc: "Structured coordination for installations, routing and functional planning."
    },
    {
      title: "Finishing & Final Handover",
      desc: "Touch-ups, deep cleaning and closure discipline before client walkthrough."
    }
  ];

  return (
    <section className="bg-[#111111] text-[#e7e7e7] py-[160px]">
      <div className="max-w-[1520px] mx-auto px-8 grid md:grid-cols-2 gap-24">

        {/* LEFT INTRO */}
        <div>
          <div className="text-[#a8844f] tracking-[0.18em] text-sm uppercase">
            Capabilities
          </div>

          <h2 className="mt-6 text-[36px] md:text-[48px] font-light leading-tight">
            Structured services designed for precision execution.
          </h2>

          <p className="mt-8 text-white/65 leading-relaxed max-w-[420px]">
            We combine architectural thinking with disciplined on-site delivery,
            ensuring projects move from concept to completion with clarity.
          </p>

          <div className="mt-24 relative w-[full]">
            <img
              src="/assets/maninserviceinteror.png"
              className="object-bottom relative w-full h-[420px] opacity-80 object-cover"
            />

          </div>
        </div>

        {/* RIGHT LIST */}
        <div className="border-t border-white/10">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="py-10 border-b border-white/10 grid grid-cols-[60px_1fr] gap-6"
            >
              <div className="text-[#a8844f] text-[18px] font-medium">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div>
                <div className="text-[22px] font-medium">
                  {s.title}
                </div>

                <div className="mt-3 text-white/60 leading-relaxed max-w-[520px]">
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function DesignLanguage() {
  const items = [
    {
      img: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1400&auto=format&fit=crop",
      title: "Warm Minimal Living",
      desc: "Calm spatial compositions with layered textures and restrained palettes."
    },
    {
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
      title: "Architectural Kitchens",
      desc: "Linear layouts, concealed storage and material continuity."
    },
    {
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop",
      title: "Custom Joinery",
      desc: "Built-ins designed with precision detailing and functional clarity."
    },
    {
      img: "https://images.unsplash.com/photo-1493663284031-b7e3aaa4cab7?q=80&w=1400&auto=format&fit=crop",
      title: "Lighting Composition",
      desc: "Balanced illumination layers shaping spatial mood and usability."
    },
    {
      img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1400&auto=format&fit=crop",
      title: "Neutral Bedrooms",
      desc: "Soft tonal palettes supporting rest, comfort and timelessness."
    },
    {
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1400&auto=format&fit=crop",
      title: "Material Honesty",
      desc: "Natural finishes, tactile surfaces and expressive detailing."
    }
  ];

  return (
    <section className="bg-[#111111] text-[#e7e7e7] py-[160px]">

      <div className="max-w-[1520px] mx-auto px-8">

        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-24 items-end mb-20">
          <div>
            <div className="text-[#a8844f] tracking-[0.18em] text-sm uppercase">
              Design Language
            </div>

            <h2 className="mt-6 text-[40px] md:text-[56px] font-light leading-tight">
              A disciplined visual approach rooted in material integrity.
            </h2>
          </div>

          <div className="text-white/60 leading-relaxed max-w-[420px]">
            Selected spatial references that inform our thinking — shaping how
            we design, detail and execute interior environments.
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden">

              <img
                src={item.img}
                className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* caption */}
              <div className="absolute bottom-0 left-0 p-6 translate-y-6 group-hover:translate-y-0 transition duration-500">
                <div className="text-[18px] font-medium">{item.title}</div>
                <div className="mt-2 text-white/70 text-sm max-w-[260px]">
                  {item.desc}
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

function Philosophy() {
  return (
    <section className="bg-[#0e0e0e] text-[#e7e7e7] py-[180px]">

      <div className="max-w-[1520px] mx-auto px-8 grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT — Big Statement */}
        <div>
          <div className="text-[#a8844f] tracking-[0.18em] text-sm uppercase">
            Studio Philosophy
          </div>

          <h2 className="mt-8 text-[42px] md:text-[64px] font-light leading-[1.15]">
            We believe execution is design.
          </h2>

          <p className="mt-10 text-white/65 leading-relaxed max-w-[520px]">
            Interior environments are not defined by drawings alone.  
            They are shaped through material decisions, site discipline and
            attention to detail during construction. Our approach focuses on
            clarity, longevity and functional integrity — creating spaces that
            remain relevant long after completion.
          </p>

          <div className="mt-16 border-t border-white/10 pt-8 text-white/60 max-w-[480px]">
            We favour quiet material palettes, precise joinery and structured
            planning. Every decision is guided by performance, usability and
            long-term value rather than visual excess.
          </div>
        </div>

        {/* RIGHT — Image */}
        <div className="relative">

          <div className="absolute -top-8 -right-8 w-full h-full border border-white/10"></div>

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop"
            className="relative w-full h-[640px] object-cover"
          />

        </div>

      </div>

    </section>
  );
}

function Process() {
  const steps = [
    {
      title: "Consultation & Brief",
      desc: "Understanding spatial needs, site conditions, timelines and execution priorities."
    },
    {
      title: "Design Strategy",
      desc: "Planning layouts, material direction and functional zoning aligned with project intent."
    },
    {
      title: "Technical Planning",
      desc: "Detailed drawings, vendor coordination and milestone definition before site mobilisation."
    },
    {
      title: "Site Execution",
      desc: "Disciplined supervision, quality checks and structured progress tracking."
    },
    {
      title: "Finishing & Handover",
      desc: "Final detailing, deep cleaning and walkthrough before project closure."
    }
  ];

  return (
    <section className="bg-[#111111] text-[#e7e7e7] py-[180px]">

      <div className="max-w-[1520px] mx-auto px-8">

        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-24 items-end mb-20">
          <div>
            <div className="text-[#a8844f] tracking-[0.18em] text-sm uppercase">
              Process
            </div>

            <h2 className="mt-6 text-[40px] md:text-[56px] font-light leading-tight">
              A structured journey from concept to completion.
            </h2>
          </div>

          <div className="text-white/60 leading-relaxed max-w-[420px]">
            Every project follows a disciplined execution framework — ensuring
            clarity in decisions, coordination on site and confidence at every stage.
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-4">

          {steps.map((step, i) => (
            <div key={i} className="mb-20 pl-12 relative">

              {/* bronze dot */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#a8844f]"></div>

              {/* step number */}
              <div className="text-[#a8844f] text-sm tracking-[0.2em] mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* title */}
              <div className="text-[26px] font-light">
                {step.title}
              </div>

              {/* description */}
              <div className="mt-3 text-white/60 max-w-[520px] leading-relaxed">
                {step.desc}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

// other things... we can call in the app function above to keep it clean and organized. You can also split these into separate files if you want



function Contact() {
  return (
    <section id="contact" className="bg-[#1a1a1a] text-[#e7e7e7] py-[160px]">

      <div className="max-w-[1520px] mx-auto px-8 grid md:grid-cols-2 gap-24 items-start">

        {/* LEFT — Contact Intro */}
        <div>
          <div className="text-[#a8844f] tracking-[0.18em] text-sm uppercase">
            Contact
          </div>

          <h2 className="mt-6 text-[40px] md:text-[52px] font-light leading-tight">
            Let’s discuss your project.
          </h2>

          <p className="mt-8 text-white/65 leading-relaxed max-w-[420px]">
            Share your scope, timeline and site context.
            We will respond with a structured execution approach and next steps.
          </p>

          <div className="mt-12 space-y-6 text-white/80">
            <div className="border-b border-white/10 pb-4">
              hello@atelierprogetto.com
            </div>
            <div className="border-b border-white/10 pb-4">
              +91 98XXXXXXX
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent (demo)");
          }}
          className="border border-white/10 p-12"
        >

          <div className="grid gap-10">

            <div>
              <label className="text-sm tracking-[0.12em] text-white/50 uppercase">
                Name
              </label>
              <input
                name="name"
                className="mt-3 w-full bg-transparent border-b border-white/20 pb-3 outline-none focus:border-[#a8844f]"
              />
            </div>

            <div>
              <label className="text-sm tracking-[0.12em] text-white/50 uppercase">
                Email
              </label>
              <input
                name="email"
                className="mt-3 w-full bg-transparent border-b border-white/20 pb-3 outline-none focus:border-[#a8844f]"
              />
            </div>

            <div>
              <label className="text-sm tracking-[0.12em] text-white/50 uppercase">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                className="mt-3 w-full bg-transparent border-b border-white/20 pb-3 outline-none focus:border-[#a8844f]"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-fit px-10 py-5 bg-[#a8844f] text-[#1a1a1a] tracking-[0.12em] uppercase"
            >
              Send Message
            </button>

          </div>

        </form>

      </div>

    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white/50 border-slate-100 mt-8">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} Atelier Progetto • Built with care</div>
        <div className="flex items-center gap-3 text-sm">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  )
}



/* --- tiny shared UI helpers --- */
function Stat({ label, value }) {
  return (
    <div className="bg-white p-3 rounded-lg border shadow-sm">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="font-semibold mt-1">{value}</div>
    </div>
  )
}

function ServiceCard({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-slate-500 mt-2">{desc}</div>
      <div className="mt-4">
        <a className="inline-flex items-center gap-2 text-sm font-medium" href="#contact">Enquire <ArrowRight size={14} /></a>
      </div>
    </div>
  )
}

function ContactRow({ icon, label }) {
  return (
    <div className="flex items-center gap-3 p-2 bg-white rounded-md border">
      <div className="text-slate-600">{icon}</div>
      <div className="text-sm font-medium">{label}</div>
    </div>
  )
}
