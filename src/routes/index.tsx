import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Scale,
  FileText,
  Clock,
  ShieldAlert,
  BadgeCheck,
  Lock,
  Users,
  MessageCircle,
  ArrowRight,
  Plus,
  Minus,
  CheckCircle2,
  Handshake,
  Gavel,
} from "lucide-react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-justice.png";

// Substitua pelo número de WhatsApp do escritório (formato internacional, só dígitos).
const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE =
  "Olá! Gostaria de falar com um advogado trabalhista para analisar meu caso.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Advocacia Trabalhista | Defesa dos Direitos do Trabalhador" },
      {
        name: "description",
        content:
          "Análise rápida e sigilosa do seu caso por advogados especialistas em Direito Trabalhista. Saiba se você tem direito a rescisão indireta, horas extras ou indenização.",
      },
      {
        property: "og:title",
        content: "Defesa Especializada nos Seus Direitos Trabalhistas",
      },
      {
        property: "og:description",
        content:
          "Análise rápida e sigilosa do seu caso por advogados especialistas. Fale com um advogado no WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ----------------------------- Reveal on scroll ---------------------------- */
function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* -------------------------------- Helpers --------------------------------- */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02ZM12.05 20.15a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.06.8.82-2.98-.2-.31a8.16 8.16 0 0 1-1.26-4.35c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.25 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

/* --------------------------------- Page ----------------------------------- */
function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Areas />
        <WhyUs />
        <Steps />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* --------------------------------- Header --------------------------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-[0_8px_30px_-18px_rgba(15,27,61,0.45)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:py-4">
        <a href="#topo" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-gradient text-gold">
            <Scale className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-[Playfair_Display] text-base font-bold leading-tight text-navy sm:text-lg">
              Advocacia Trabalhista
            </span>
            <span className="block truncate text-[11px] font-medium uppercase tracking-[0.18em] text-bronze">
              Defesa do Trabalhador
            </span>
          </span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_-10px_var(--whatsapp-dark)] transition-transform hover:scale-[1.03] active:scale-95"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Falar agora</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

/* ---------------------------------- Hero ---------------------------------- */
function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-soft opacity-40 blur-3xl" />
        <div className="absolute -left-20 top-40 h-64 w-64 rounded-full bg-navy-soft opacity-10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-14 pt-6 sm:pt-10 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-14">
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/30 px-3.5 py-1.5 text-xs font-semibold text-bronze">
              <BadgeCheck className="h-4 w-4" />
              Atendimento Especializado · Resposta Rápida no WhatsApp
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-balance font-[Playfair_Display] text-[2rem] font-bold leading-[1.08] text-navy sm:text-5xl lg:text-[3.25rem]">
              Defesa Especializada nos Seus{" "}
              <span className="text-gold-gradient">Direitos Trabalhistas</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
              Análise rápida e sigilosa do seu caso por advogados especialistas.
              Saiba se você tem direito a rescisão indireta, horas extras ou
              indenização.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-whatsapp px-6 py-3.5 text-base font-bold text-white shadow-[0_14px_34px_-12px_var(--whatsapp-dark)] transition-transform hover:scale-[1.03] active:scale-95"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Falar com Advogado no WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-medium text-muted-foreground">
              <li className="inline-flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-bronze" /> 100% Sigiloso
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Handshake className="h-4 w-4 text-bronze" /> Online em todo o Brasil
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-bronze" /> Resposta Rápida
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gold-gradient opacity-25 blur-2xl" />
            <div className="overflow-hidden rounded-[1.75rem] border border-gold/30 bg-navy-gradient shadow-elegant">
              <img
                src={heroImage}
                alt="Balança da justiça em tons dourados sobre fundo azul marinho"
                width={896}
                height={1024}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-gold/30 bg-background px-4 py-2 text-xs font-semibold text-navy shadow-elegant">
              <Gavel className="h-4 w-4 text-bronze" />
              Especialistas em Direito do Trabalho
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- Section heading ---------------------------- */
function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance font-[Playfair_Display] text-2xl font-bold text-navy sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gold-gradient" />
    </Reveal>
  );
}

/* --------------------------------- Areas ---------------------------------- */
const AREAS = [
  {
    icon: FileText,
    title: "Demissão e Rescisão",
    text: "Cálculo de direitos, verbas rescisórias e análise de justa causa.",
  },
  {
    icon: Clock,
    title: "Horas Extras e Adicionais",
    text: "Insalubridade, periculosidade e trabalho noturno não pagos.",
  },
  {
    icon: ShieldAlert,
    title: "Acidente de Trabalho",
    text: "Estabilidade, indenização por danos e auxílio do INSS.",
  },
  {
    icon: BadgeCheck,
    title: "Sem Carteira Assinada",
    text: "Reconhecimento de vínculo empregatício e direitos retroativos.",
  },
];

function Areas() {
  return (
    <section id="areas" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Áreas de Atuação"
          title="Como Podemos Ajudar no Seu Caso?"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {AREAS.map((area, i) => (
            <Reveal key={area.title} delay={i * 90}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-gradient text-gold transition-transform duration-300 group-hover:scale-105">
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-[Playfair_Display] text-lg font-bold text-navy">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {area.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Why Us --------------------------------- */
const DIFFERENTIALS = [
  {
    icon: MessageCircle,
    title: "Atendimento 100% Online e Descomplicado",
    text: "Todo o processo acontece pelo WhatsApp, sem burocracia e sem deslocamento.",
  },
  {
    icon: Lock,
    title: "Sigilo Absoluto e Análise Personalizada",
    text: "Seu caso é tratado com total confidencialidade e atenção individual.",
  },
  {
    icon: Users,
    title: "Equipe com Anos de Experiência",
    text: "Advogados dedicados a causas trabalhistas, com histórico de resultados.",
  },
];

function WhyUs() {
  return (
    <section id="diferenciais" className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-navy-gradient opacity-[0.03]" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por Que Escolher Nosso Escritório"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:mt-14">
          {DIFFERENTIALS.map((d, i) => (
            <Reveal key={d.title} delay={i * 90}>
              <article className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-elegant">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gold-soft/40 text-bronze">
                  <d.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-[Playfair_Display] text-lg font-bold text-navy">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Steps ---------------------------------- */
const STEPS = [
  {
    n: "1",
    title: "Clique no WhatsApp e envie sua dúvida",
    text: "Toque no botão e conte, em poucas palavras, o que aconteceu com você.",
  },
  {
    n: "2",
    title: "Um especialista analisa seu caso em sigilo",
    text: "Avaliamos os detalhes com total confidencialidade e atenção.",
  },
  {
    n: "3",
    title: "Receba a orientação jurídica adequada",
    text: "Você recebe a orientação clara sobre os próximos passos do seu problema.",
  },
];

function Steps() {
  return (
    <section id="passo-a-passo" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Passo a Passo"
          title="Atendimento Simples e Direto"
        />
        <div className="relative mt-10 lg:mt-16">
          <div className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-gold via-gold/40 to-transparent sm:block" />
          <ol className="grid gap-5 sm:gap-6">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <li className="flex items-start gap-4 sm:gap-5">
                  <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy-gradient font-[Playfair_Display] text-xl font-bold text-gold shadow-elegant">
                    {step.n}
                  </span>
                  <div className="flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <h3 className="font-[Playfair_Display] text-lg font-bold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- FAQ ----------------------------------- */
const FAQ = [
  {
    q: "Preciso ir até o escritório presencialmente?",
    a: "Não! Realizamos todo o atendimento e envio de documentos de forma digital e segura para todo o Brasil.",
  },
  {
    q: "Quanto custa para analisar meu caso?",
    a: "A primeira análise inicial para entender a situação é rápida e sigilosa no WhatsApp.",
  },
  {
    q: "O que preciso para iniciar a conversa?",
    a: "Apenas relatar o que aconteceu e, se tiver, documentos básicos como carteira de trabalho ou holerites.",
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card transition-colors duration-300",
        open ? "border-gold/50 shadow-elegant" : "border-border hover:border-gold/30",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-[Playfair_Display] text-base font-bold text-navy sm:text-lg">
          {q}
        </span>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-soft/40 text-bronze transition-transform duration-300">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading
          eyebrow="Perguntas Frequentes"
          title="Tire Suas Dúvidas"
        />
        <div className="mt-10 space-y-3 lg:mt-14">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 80}>
              <FaqItem
                q={item.q}
                a={item.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Final CTA -------------------------------- */
function FinalCta() {
  return (
    <section id="contato" className="px-5 pb-20 pt-4 sm:pb-28">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-navy-gradient px-6 py-12 text-center shadow-elegant sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-gold-soft/10 blur-3xl" />
          </div>
          <div className="relative">
            <Scale className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-5 text-balance font-[Playfair_Display] text-2xl font-bold text-white sm:text-4xl">
              Não deixe seus direitos passarem em branco. Tire suas dúvidas
              hoje mesmo.
            </h2>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-whatsapp px-7 py-4 text-base font-bold text-white shadow-[0_16px_38px_-12px_var(--whatsapp-dark)] transition-transform hover:scale-[1.03] active:scale-95 sm:text-lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chamar no WhatsApp Agora
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-5 text-xs text-white/70">
              Atendimento sigiloso · Resposta rápida · Online em todo o Brasil
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* --------------------------------- Footer --------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-gradient text-gold">
              <Scale className="h-4.5 w-4.5" />
            </span>
            <span className="font-[Playfair_Display] text-base font-bold text-navy">
              Advocacia Trabalhista
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-bronze" /> Atendimento
              Online
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-bronze" /> Sigilo Total
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Gavel className="h-3.5 w-3.5 text-bronze" /> OAB/SP 000.000
            </span>
          </div>
          <p className="max-w-2xl text-[11px] leading-relaxed text-muted-foreground/80">
            Advocacia Trabalhista · OAB/SP 000.000 — Todos os direitos
            reservados. Este site possui caráter estritamente informativo,
            respeitando o Código de Ética da OAB.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- WhatsApp FAB -------------------------------- */
function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com advogado no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-4 py-3.5 font-bold text-white shadow-[0_14px_34px_-12px_var(--whatsapp-dark)] transition-transform hover:scale-[1.04] active:scale-95 animate-pulse-ring sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm sm:inline">Falar no WhatsApp</span>
    </a>
  );
}

export default Index;
