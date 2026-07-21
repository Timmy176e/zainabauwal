import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Brain, Image as ImageIcon, FileText, Mic, Tag, Layers, Database, ShieldCheck,
  Users, Workflow, ClipboardCheck, Search, Sparkles, Cpu, Eye, MessageSquare,
  BarChart3, Clock, Award, CheckCircle2, Lock, Target, Mail, MapPin,
  ArrowRight, X, Menu, Zap, TrendingUp, Star,
} from "lucide-react";
import heroImg from "@/assets/hero-ai.jpg";
const dash1 = "https://res.cloudinary.com/jdenheg8/image/upload/v1784668142/IMG-20260721-WA0054_wwmpen.jpg";
const dash2 = "https://res.cloudinary.com/jdenheg8/image/upload/v1784668132/IMG-20260721-WA0055_tabkbt.jpg";
const dash3 = "https://res.cloudinary.com/jdenheg8/image/upload/v1784671421/IMG-20260721-WA0064_lngxyt.jpg";
const logoImg = "https://res.cloudinary.com/jdenheg8/image/upload/v1784670034/IMG-20260721-WA0063_exqwq6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zainab Auwal | Freelance Project Coordinator | Data Annotation & Transcription Specialist" },
      { name: "description", content: "Professional freelance Project Coordinator, Data Annotation and Transcription Specialist providing AI data labeling, transcription, quality assurance, dataset preparation, and project coordination services for Artificial Intelligence and Machine Learning projects." },
      { name: "keywords", content: "Data Annotation, Image Annotation, Text Annotation, Audio Transcription, AI Dataset, Data Labeling, Machine Learning, NLP, Computer Vision, Project Coordinator, AI Training Data, Freelance Annotator, Nigeria" },
      { property: "og:title", content: "Zainab Auwal | Freelance Project Coordinator | Data Annotation & Transcription Specialist" },
      { property: "og:description", content: "Professional freelance Project Coordinator, Data Annotation and Transcription Specialist providing AI data labeling, transcription, quality assurance, dataset preparation, and project coordination services for Artificial Intelligence and Machine Learning projects." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Zainab Auwal | Freelance Project Coordinator | Data Annotation & Transcription Specialist" },
      { name: "twitter:description", content: "Professional freelance Project Coordinator, Data Annotation and Transcription Specialist providing AI data labeling, transcription, quality assurance, dataset preparation, and project coordination services for Artificial Intelligence and Machine Learning projects." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "performance", label: "Performance" },
  { id: "contact", label: "Contact" },
];

const services = [
  { icon: Tag, title: "Data Annotation", desc: "Precise labeling across text, image and audio modalities." },
  { icon: ImageIcon, title: "Image Annotation", desc: "Bounding boxes, segmentation and classification." },
  { icon: FileText, title: "Text Annotation", desc: "NER, sentiment, intent and classification tagging." },
  { icon: Mic, title: "Audio Transcription", desc: "Accurate transcription for speech recognition datasets." },
  { icon: Layers, title: "Data Labeling", desc: "Structured labeling for supervised learning pipelines." },
  { icon: Database, title: "Data Categorization", desc: "Clean taxonomies for organized ML datasets." },
  { icon: Brain, title: "AI Training Data Prep", desc: "End-to-end dataset preparation for ML models." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous review to guarantee dataset accuracy." },
  { icon: Users, title: "Project Coordination", desc: "Managing freelance annotation teams end-to-end." },
  { icon: Workflow, title: "Workflow Management", desc: "Optimized pipelines for on-time delivery." },
  { icon: ClipboardCheck, title: "Dataset Validation", desc: "Verifying dataset integrity before delivery." },
  { icon: Search, title: "Annotation Review", desc: "Second-pass reviews to eliminate labeling errors." },
];

const whatIDo = [
  "Coordinate freelance annotation teams",
  "Manage AI data workflows",
  "Assign project tasks",
  "Monitor freelancer performance",
  "Conduct Quality Assurance",
  "Prepare AI training datasets",
  "Manage project communication",
  "Deliver projects on schedule",
];

const industries = [
  { icon: Brain, name: "Artificial Intelligence" },
  { icon: Cpu, name: "Machine Learning" },
  { icon: MessageSquare, name: "Natural Language Processing" },
  { icon: Eye, name: "Computer Vision" },
  { icon: Mic, name: "Speech Recognition" },
  { icon: BarChart3, name: "Research & Data Services" },
];

const experienceItems = [
  "Text Classification",
  "Image Labeling",
  "Audio Transcription",
  "Dataset Validation",
  "Dataset Quality Review",
  "Machine Learning Dataset Preparation",
  "Annotation Quality Assurance",
  "Team Coordination",
  "Workflow Management",
  "Freelancer Task Assignment",
];

const skills = [
  "Data Annotation", "Image Annotation", "Text Annotation", "Audio Transcription",
  "AI Dataset Preparation", "Data Labeling", "Dataset Validation", "Quality Assurance",
  "Microsoft Office", "Google Workspace", "Attention to Detail", "Communication",
  "Team Coordination", "Project Management", "Time Management",
];

const whyMe = [
  { icon: Target, title: "Accurate & Reliable" },
  { icon: Eye, title: "Attention to Detail" },
  { icon: ShieldCheck, title: "Strong QA" },
  { icon: MessageSquare, title: "Professional Communication" },
  { icon: Workflow, title: "Efficient Workflows" },
  { icon: Users, title: "Reliable Coordination" },
  { icon: Clock, title: "Timely Delivery" },
  { icon: Award, title: "Committed to Quality" },
  { icon: Lock, title: "Confidentiality" },
  { icon: Sparkles, title: "Client-Focused" },
];

const portfolioProjects = [
  { icon: FileText, title: "AI Text Annotation Project", desc: "Large-scale text tagging for NLP model training.", skills: ["NER", "Classification", "QA"], badge: "NLP" },
  { icon: ImageIcon, title: "Image Classification Project", desc: "Category labeling for computer vision datasets.", skills: ["Labeling", "Review", "Validation"], badge: "Computer Vision" },
  { icon: Mic, title: "Audio Transcription Project", desc: "Speech-to-text transcription for ASR training.", skills: ["Transcription", "Timestamping", "QA"], badge: "Speech" },
  { icon: ClipboardCheck, title: "Data Validation Project", desc: "Dataset integrity checks and error correction.", skills: ["Validation", "QA", "Reporting"], badge: "Data QA" },
  { icon: Database, title: "ML Dataset Preparation", desc: "Structured datasets for supervised ML pipelines.", skills: ["Structuring", "Cleaning", "Review"], badge: "Machine Learning" },
];

const dashboards = [
  { src: dash1, title: "AI Annotation Performance Dashboard", desc: "Displays annotation productivity, completed HITs, judging hours, and overall quality assurance metrics." },
  { src: dash2, title: "Quality Assurance Performance Report", desc: "Shows completed tasks, average QA score, payable score, and annotation quality across AI data projects." },
  { src: dash3, title: "AI Project Performance Summary", desc: "Highlights additional project performance metrics, productivity, and quality evidence." },
];

const stats = [
  { value: "5,000+", label: "Completed Annotation Tasks", icon: CheckCircle2 },
  { value: "0.96", label: "Average QA Score", icon: Star },
  { value: "700+", label: "Judging Hours", icon: Clock },
  { value: "High", label: "Dataset Accuracy", icon: Target },
  { value: "On-Time", label: "Project Delivery", icon: Zap },
  { value: "Consistent", label: "AI Data Quality", icon: TrendingUp },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "glass-card !rounded-none border-b" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
          <img src={logoImg} alt="Zainab Auwal logo" className="w-9 h-9 rounded-lg object-cover border border-primary/10" />
          <span className="gradient-text">Zainab Auwal</span>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map(n => (
            <a key={n.id} href={`#${n.id}`} className="text-sm text-muted-foreground hover:text-foreground transition">{n.label}</a>
          ))}
        </nav>
        <a href="mailto:zainab493131@gmail.com" className="hidden lg:inline-flex items-center gap-2 gradient-bg text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-[var(--shadow-soft)] hover:opacity-90 transition">
          Hire Me <ArrowRight className="w-4 h-4" />
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg glass-card">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass-card mx-4 mb-3 rounded-2xl p-4 flex flex-col gap-2">
          {nav.map(n => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="py-2 px-3 rounded-lg hover:bg-accent text-sm">{n.label}</a>
          ))}
          <a href="mailto:zainab493131@gmail.com" className="mt-2 gradient-bg text-white text-sm font-medium px-5 py-2.5 rounded-full text-center">Hire Me</a>
        </div>
      )}
    </header>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-primary bg-accent border border-primary/10 mb-4">
        <Sparkles className="w-3.5 h-3.5" /> {eyebrow}
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}

function Lightbox({ img, onClose }: { img: { src: string; title: string; desc: string } | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  if (!img) return null;
  return (
    <div onClick={onClose} className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-up">
      <button onClick={onClose} className="absolute top-6 right-6 w-11 h-11 rounded-full glass-card flex items-center justify-center"><X className="w-5 h-5" /></button>
      <div onClick={e => e.stopPropagation()} className="max-w-6xl w-full">
        <img src={img.src} alt={img.title} className="w-full rounded-2xl shadow-2xl" />
        <div className="mt-4 text-center text-white">
          <h3 className="font-display text-xl font-semibold">{img.title}</h3>
          <p className="text-white/70 mt-1">{img.desc}</p>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [lightbox, setLightbox] = useState<typeof dashboards[number] | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`.font-display { font-family: 'Space Grotesk', sans-serif; }`}</style>
      <Nav />

      {/* HERO */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-brand)" }} />
          <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20" style={{ background: "var(--gradient-brand)" }} />
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-primary bg-accent border border-primary/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Available for AI data projects
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Helping AI Companies Build <span className="gradient-text">High-Quality Datasets</span> Through Professional Coordination
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              I'm <strong className="text-foreground">Zainab Auwal</strong>, a Freelance Project Coordinator, Data Annotation & Transcription Specialist supporting AI and ML teams with reliable data labeling, transcription, QA and training data preparation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:zainab493131@gmail.com" className="inline-flex items-center gap-2 gradient-bg text-white font-medium px-6 py-3 rounded-full shadow-[var(--shadow-elegant)] hover:opacity-90 transition">
                Hire Me <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 glass-card font-medium px-6 py-3 rounded-full hover:bg-white transition">
                View Portfolio
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div><div className="font-display text-2xl font-bold gradient-text">5K+</div><div className="text-xs text-muted-foreground">HITs Completed</div></div>
              <div><div className="font-display text-2xl font-bold gradient-text">0.96</div><div className="text-xs text-muted-foreground">QA Score</div></div>
              <div><div className="font-display text-2xl font-bold gradient-text">700+</div><div className="text-xs text-muted-foreground">Judging Hours</div></div>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-6 rounded-3xl blur-2xl opacity-30" style={{ background: "var(--gradient-brand)" }} />
            <div className="relative glass-card rounded-3xl p-4">
              <img src={heroImg} alt="AI data annotation illustration" width={1200} height={1200} className="rounded-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="About Me" title="Coordinating skilled teams. Delivering dependable AI data." />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-3xl p-8">
              <p className="text-muted-foreground leading-relaxed">
                Welcome! I'm Zainab Auwal, a freelance Project Coordinator specializing in managing teams that deliver high-quality data annotation, transcription and AI data preparation services. I coordinate skilled freelancers, ensuring projects are completed accurately, on schedule and to client requirements.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I have worked on multiple projects through <strong className="text-foreground">DCP Global</strong>, owned by Colins Crawford, consistently delivering accurate results while maintaining quality standards and deadlines.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Assigning tasks","Monitoring project quality","Reviewing completed work","Maintaining communication","Managing workflows","Consistent delivery","Text & Image Annotation","Audio Transcription","Data Validation","Quality Assurance"].map(item => (
                <div key={item} className="glass-card rounded-2xl p-4 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Services" title="Premium AI data services" subtitle="A complete suite for building and maintaining high-quality datasets." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="glass-card rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="What I Do" title="Day-to-day, end-to-end" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whatIDo.map((w, i) => (
              <div key={w} className="glass-card rounded-2xl p-6 relative overflow-hidden">
                <div className="text-xs font-display font-bold text-primary/40">0{i+1}</div>
                <div className="mt-2 font-medium">{w}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="Industries" title="Industries served" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(i => (
              <div key={i.name} className="glass-card rounded-2xl p-8 text-center hover:-translate-y-1 transition">
                <div className="w-14 h-14 mx-auto rounded-2xl gradient-bg flex items-center justify-center text-white mb-4">
                  <i.icon className="w-7 h-7" />
                </div>
                <div className="font-display font-semibold">{i.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionTitle eyebrow="Experience" title="Professional timeline" />
          <div className="glass-card rounded-3xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Freelance Project Coordinator</h3>
                <p className="text-sm text-muted-foreground">Data Annotation & Transcription Specialist</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">Worked on AI projects involving:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {experienceItems.map(e => (
                <div key={e} className="flex items-center gap-3 p-3 rounded-xl bg-accent/50">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm">{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="Skills" title="Tools & expertise" />
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((s, i) => (
              <div key={s} className="glass-card rounded-full px-5 py-2.5 text-sm font-medium hover:gradient-bg hover:text-white transition-all cursor-default" style={{ animationDelay: `${i * 40}ms` }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="Why Me" title="Why work with me" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyMe.map(w => (
              <div key={w.title} className="glass-card rounded-2xl p-5 text-center hover:-translate-y-1 transition">
                <div className="w-11 h-11 mx-auto rounded-xl gradient-bg flex items-center justify-center text-white mb-3">
                  <w.icon className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold">{w.title}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 glass-card rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <Award className="w-10 h-10 mx-auto text-primary mb-4" />
            <h3 className="font-display text-2xl font-bold mb-3">My Commitment</h3>
            <p className="text-muted-foreground">
              Every project is managed with professionalism, transparency and a commitment to quality. Whether coordinating freelance teams or personally reviewing completed work, I focus on delivering dependable, high-quality datasets that help businesses build better AI and Machine Learning solutions.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Portfolio" title="Selected projects" subtitle="A snapshot of AI data work I've contributed to." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map(p => (
              <div key={p.title} className="glass-card rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white group-hover:scale-110 transition">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-primary border border-primary/10">{p.badge}</span>
                </div>
                <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.skills.map(sk => (
                    <span key={sk} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">{sk}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section id="performance" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Evidence" title="Performance & Work Evidence" subtitle="Actual dashboards from completed AI data annotation projects." />
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {dashboards.map(d => (
              <button key={d.title} onClick={() => setLightbox(d)} className="text-left group">
                <div className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] transition-all">
                  <div className="overflow-hidden bg-white">
                    <img src={d.src} alt={d.title} loading="lazy" className="w-full aspect-[16/10] object-cover object-top group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold">{d.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{d.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {stats.map(s => (
              <div key={s.label} className="glass-card rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0">
                  <s.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground max-w-3xl mx-auto italic">
            The performance dashboards displayed above showcase actual work metrics and quality assurance results from completed AI data annotation projects.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto max-w-4xl px-6">
          <SectionTitle eyebrow="Contact" title="Get in touch" subtitle="Looking for a dependable Project Coordinator or Data Annotation Specialist for your AI or ML project? I'd love to discuss how I can help." />
          <div className="grid sm:grid-cols-2 gap-6">
            <a href="mailto:zainab493131@gmail.com" className="glass-card rounded-2xl p-6 flex items-start gap-4 hover:-translate-y-1 transition">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0"><Mail className="w-6 h-6" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-medium mt-1 break-all">zainab493131@gmail.com</div>
              </div>
            </a>
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white shrink-0"><MapPin className="w-6 h-6" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Address</div>
                <div className="font-medium mt-1">Abubakar Gumi Road<br/>Kaduna, Kaduna State<br/>800241, Nigeria</div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a href="mailto:zainab493131@gmail.com" className="inline-flex items-center gap-2 gradient-bg text-white font-medium px-8 py-4 rounded-full shadow-[var(--shadow-elegant)] hover:opacity-90 transition">
              Send Email <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="font-display font-bold text-xl gradient-text">Zainab Auwal</div>
          <div className="text-sm text-muted-foreground mt-1">Freelance Project Coordinator | Data Annotation & Transcription Specialist</div>
          <div className="text-sm text-muted-foreground mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> zainab493131@gmail.com</span>
            <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> Abubakar Gumi Road, Kaduna, Nigeria</span>
          </div>
          <div className="text-xs text-muted-foreground mt-6">© {new Date().getFullYear()} Zainab Auwal. All rights reserved.</div>
        </div>
      </footer>

      <Lightbox img={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}
