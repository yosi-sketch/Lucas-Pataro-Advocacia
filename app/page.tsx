"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  CheckCircle2,
  Clock,
  HeartHandshake,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5531972159695";
const PHONE_DISPLAY = "(31) 97215-9695";
const INSTAGRAM_URL = "https://www.instagram.com/lucas.e.pataroadvocacia/";
const INSTAGRAM_HANDLE = "@lucas.e.pataroadvocacia";

function getWhatsAppUrl(message?: string) {
  const defaultText =
    "Olá! Gostaria de agendar uma consulta com o escritório Lucas & Pataro Advocacia e Consultoria Jurídica.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Lucas+%26+Pataro+Advocacia+e+Consultoria+Jur%C3%ADdica%2C+Av.+Dom+B%C3%B4sco%2C+300+-+SL+304+-+Palmeiras%2C+Pte.+Nova+-+MG%2C+35430-232";

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário & INSS",
    icon: Award,
    tag: "Expertise Comprovada",
    summary:
      "Concessão do benefício mais vantajoso, planejamento de aposentadorias, pensão por morte, auxílios e reversão de indeferimentos.",
    details:
      "Com sólida atuação técnica e histórico de resultados expressivos, o escritório analisa minuciosamente cada histórico contributivo para garantir o melhor benefício ao segurado. Atuamos desde o planejamento previdenciário preventivo até a concessão e restabelecimento de aposentadorias (tempo, idade, especial, rural), auxílio por incapacidade temporária ou permanente, BPC/LOAS e recursos contra negativas indevidas do INSS.",
    topics: [
      "Planejamento previdenciário e cálculo da melhor renda inicial",
      "Aposentadoria por tempo, idade, especial e da pessoa com deficiência",
      "Pensão por morte e auxílio-reclusão para dependentes",
      "Auxílio por incapacidade temporária (doença) e BPC/LOAS",
      "Revisões de aposentadorias e recursos judiciais contra o INSS",
    ],
    whatsAppText:
      "Olá! Gostaria de uma consulta com o escritório Lucas & Pataro sobre Direito Previdenciário e Benefícios do INSS.",
  },
  {
    id: "direito-penal",
    title: "Direito Penal & Defesa Criminal",
    icon: ShieldCheck,
    tag: "Atuação Combativa",
    summary:
      "Defesa intransigente da liberdade e garantias individuais em inquéritos policiais, flagrantes, audiências de custódia e ações penais.",
    details:
      "A proteção da liberdade e da presunção de inocência exige agilidade, rigor técnico e firmeza estratégica. O escritório atua em todas as etapas da persecução penal: acompanhamento em delegacias e interrogatórios, audiências de custódia, pedidos de revogação de prisão preventiva, impetração de Habeas Corpus perante os Tribunais, tribunal do júri e sustentação oral nos Tribunais Superiores.",
    topics: [
      "Acompanhamento em delegacia e flagrantes 24h",
      "Audiência de custódia e pedidos de revogação de prisão",
      "Habeas Corpus e medidas cautelares perante os Tribunais",
      "Defesa técnica em inquéritos policiais e processos criminais",
      "Atuação no Tribunal do Júri e recursos aos Tribunais Superiores",
    ],
    whatsAppText:
      "Olá! Preciso de orientação jurídica com o escritório Lucas & Pataro na área de Direito Penal e Defesa Criminal.",
  },
  {
    id: "direito-civel-contratos",
    title: "Direito Cível & Contratos",
    icon: Scale,
    tag: "Segurança & Precisão",
    summary:
      "Proteção de patrimônio, ações indenizatórias por danos morais e materiais, elaboração e revisão estratégica de contratos.",
    details:
      "Atuação voltada a resguardar direitos patrimoniais e civis com o mais elevado critério jurídico. Conduzimos ações indenizatórias contra abusos e prejuízos, cobranças e execuções de títulos, resolução de disputas contratuais, bem como a redação preventiva e auditoria de contratos civis e comerciais de alto impacto.",
    topics: [
      "Ações indenizatórias por danos morais, materiais e estéticos",
      "Elaboração, análise e auditoria preventiva de contratos",
      "Cobrança judicial, execuções de títulos e recuperação de crédito",
      "Rescisões contratuais e disputas patrimoniais",
      "Responsabilidade civil e proteção de direitos civis",
    ],
    whatsAppText:
      "Olá! Gostaria de consultar o escritório Lucas & Pataro sobre demandas em Direito Cível e Contratos.",
  },
  {
    id: "familia-sucessoes",
    title: "Família & Sucessões",
    icon: HeartHandshake,
    tag: "Acolhimento & Agilidade",
    summary:
      "Inventários judiciais e em cartório, partilha de patrimônio, divórcios, pensão alimentícia e planejamento sucessório.",
    details:
      "Conduzimos as questões familiares com a seriedade, discrição e acolhimento humano que momentos sensíveis exigem. Atuamos com extrema agilidade em inventários extrajudiciais em cartório e judiciais, divórcios consensuais e litigiosos, fixação e revisão de alimentos, guarda de filhos e estruturação de planejamento sucessório para preservação de bens.",
    topics: [
      "Inventários judiciais e extrajudiciais ágeis em cartório",
      "Divórcio consensual e litigioso com partilha de patrimônio",
      "Pensão alimentícia, guarda e regulamentação de convivência",
      "Planejamento sucessório e doações com reserva de usufruto",
      "Dissolução de união estável e partilha equilibrada",
    ],
    whatsAppText:
      "Olá! Gostaria de orientações do escritório Lucas & Pataro sobre Direito de Família e Sucessões / Inventário.",
  },
  {
    id: "consultoria-empresarial",
    title: "Consultoria Jurídica & Empresarial",
    icon: Briefcase,
    tag: "Visão Estratégica",
    summary:
      "Assessoria preventiva contínua para empresas e profissionais, mitigação de riscos e estruturação de soluções seguras.",
    details:
      "A consultoria jurídica estratégica antecipa litígios e resguarda a saúde financeira e jurídica do seu negócio. O escritório oferece assessoria preventiva empresarial personalizada, orientação em relações trabalhistas, análise de conformidade contratual e mediação de controvérsias com segurança e agilidade.",
    topics: [
      "Consultoria jurídica preventiva para empresas e empreendedores",
      "Auditoria contratual e redução de passivos operacionais",
      "Orientação em relações e disputas trabalhistas estratégicas",
      "Mediação e resolução amigável de controvérsias negociais",
    ],
    whatsAppText:
      "Olá! Gostaria de falar com o escritório Lucas & Pataro sobre Consultoria Jurídica Empresarial.",
  },
];

interface ReviewItem {
  name: string;
  reviewsCount: string;
  date: string;
  highlight: string;
  content: string;
}

const clientReviews: ReviewItem[] = [
  {
    name: "Matheus Silveira",
    reviewsCount: "9 avaliações",
    date: "Avaliação recente",
    highlight: "Profissionais de primeira linha e seriedade imediata",
    content:
      "Profissionais atenciosos e de primeira linha. Na primeira conversa já se nota a seriedade e o profissionalismo, depois é só deixar na mão deles e confiar. Deu certo pra mim. Obrigado Diego e Clarissa.",
  },
  {
    name: "Aninha Malta",
    reviewsCount: "3 avaliações",
    date: "Avaliação recente",
    highlight: "Excelência técnica aliada à dimensão humana",
    content:
      "Existem profissionais que exercem a advocacia com excelência técnica. E existem aqueles que, além da excelência, compreendem a verdadeira dimensão humana de exercer o Direito. Este escritório, sem dúvida, está entre esses últimos.",
  },
  {
    name: "Luciene Carvalho Pataro",
    reviewsCount: "4 avaliações",
    date: "Há 1 mês",
    highlight: "Seriedade, competência e extrema agilidade",
    content:
      "Lucas & Pataro, um escritório que preza pela seriedade, competência e agilidade. Ótima experiência tratar nossa demanda com vocês.",
  },
  {
    name: "Andrea Vieira",
    reviewsCount: "1 avaliação",
    date: "Avaliação recente",
    highlight: "Atendimento humano que faz toda a diferença",
    content:
      "Profissionalismo, dedicação e, acima de tudo, um atendimento humano que faz toda a diferença. Dra Clarissa não é apenas uma excelente profissional, mas alguém que realmente se importa. Grata por toda a ajuda e pelo cuidado com as questões.",
  },
  {
    name: "Wanise Prado",
    reviewsCount: "8 avaliações",
    date: "Avaliação recente",
    highlight: "Profissionais íntegros e expertise em Previdenciário",
    content:
      "O escritório conta com profissionais íntegros e muito competentes, com expertise em Direito Previdenciário e atuação para obtenção do benefício mais adequado ao cliente. Eu tive a oportunidade de ter trabalhado com o Dr. Diego Lucas e posso atestar.",
  },
  {
    name: "Richard Samuel",
    reviewsCount: "2 avaliações",
    date: "Há 2 semanas",
    highlight: "Segurança, transparência e dedicação no processo",
    content:
      "Excelente escritório de advocacia! Atendimento atencioso, profissionais competentes e muito comprometidos. Demonstraram segurança, transparência e dedicação durante todo o processo. Recomendo pelo profissionalismo e pela qualidade do atendimento.",
  },
  {
    name: "Jose Geraldo",
    reviewsCount: "2 avaliações",
    date: "Há 1 mês",
    highlight: "Clareza nas explicações e agilidade nos processos",
    content:
      "Gostei muito do atendimento, clareza nas explicações e esclarecimentos, cordialidade e agilidade nos processos.",
  },
  {
    name: "Nágila Santos",
    reviewsCount: "3 avaliações",
    date: "Avaliação recente",
    highlight: "Serviço advocatício de alta qualidade e dedicação",
    content:
      "Excelente atendimento e serviço advocatício de alta qualidade. Profissionalismo, competência, dedicação e atenção em cada etapa do processo. Fiquei muito satisfeita com o trabalho realizado e recomendo os serviços com total confiança.",
  },
  {
    name: "Gabriela Monique",
    reviewsCount: "4 avaliações",
    date: "Há 2 semanas",
    highlight: "Profissionais humanos e especializados em previdenciário",
    content:
      "Ótimo atendimento. Profissionais humanos e especializados em previdenciário. Recomendo!",
  },
  {
    name: "Estefania Araujo",
    reviewsCount: "2 avaliações",
    date: "Há 2 semanas",
    highlight: "Profissionais resolutivos, competentes e atenciosos",
    content:
      "Excelente atendimento, profissionais resolutivos, competentes e atenciosos. Recomendo o escritório pela resolutividade e seriedade...",
  },
  {
    name: "lucas almeida",
    reviewsCount: "1 avaliação",
    date: "Há 2 semanas",
    highlight: "Solução e justiça comprovada no processo",
    content:
      "Fui indiciado por um crime que não cometi e, durante o processo, cheguei a contratar outro advogado, mas infelizmente não tive o resultado que esperava. Com o escritório Lucas & Pataro consegui a verdadeira defesa e justiça.",
  },
  {
    name: "Angelica Gonzaga",
    reviewsCount: "3 avaliações",
    date: "Há 2 semanas",
    highlight: "Ótimos advogados e trabalho com total transparência",
    content:
      "Ótimos advogados, trabalha com total transparência.",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>{eyebrow}</p>
      <h2
        className={
          light
            ? "font-cinzel text-3xl leading-[1.18] tracking-[-0.015em] text-white sm:text-4xl lg:text-[3.25rem]"
            : "font-cinzel text-3xl leading-[1.18] tracking-[-0.015em] text-ink sm:text-4xl lg:text-[3.25rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-white/70"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    if (!activeArea) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-ivory text-ink">
        {/* Top Announcement Bar */}
        <div className="border-b border-brand-900/10 bg-brand-950 px-4 py-2.5 text-center text-[11px] font-medium tracking-wide text-brand-200 sm:px-6">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 font-cinzel tracking-[0.14em]">
            <span className="hidden items-center gap-2 sm:inline-flex text-[10px]">
              <MapPin size={13} className="text-brand-300" /> Ponte Nova - MG · Av. Dom Bôsco, 300 - SL 304
            </span>
            <span className="mx-auto flex items-center gap-2 sm:mx-0 text-[10px]">
              <Star size={13} className="fill-brand-300 text-brand-300" /> 5,0 no Google com 66+ avaliações de clientes
            </span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 transition-colors hover:text-white sm:inline-flex text-[10px]"
            >
              <InstagramIcon size={13} /> {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[112px] lg:h-[124px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Lucas & Pataro Advocacia e Consultoria Jurídica — Início"
              onClick={closeMenu}
              className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.01]"
            >
              <Image
                src="/logo.png"
                width={1200}
                height={400}
                alt="Lucas & Pataro Advocacia e Consultoria Jurídica"
                priority
                className="h-14 w-auto object-contain transition-all duration-300 sm:h-[74px] lg:h-[88px] xl:h-[94px]"
              />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                O Escritório
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações
              </a>
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </nav>

            <div className="hidden items-center gap-3.5 lg:flex">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram do escritório Lucas & Pataro"
                className="grid size-11 place-items-center rounded-full border border-ink/15 text-brand-700 transition-all hover:border-brand-700 hover:bg-brand-50 hover:text-brand-800"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp do escritório Lucas & Pataro"
                className="grid size-11 place-items-center rounded-full border border-ink/15 text-brand-700 transition-all hover:border-brand-700 hover:bg-brand-50 hover:text-brand-800"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl()}
                target="_blank"
                size="sm"
                className="rounded-full shadow-bronze"
              >
                Consulta no WhatsApp <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-12 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-ink/10 bg-ivory px-6 pb-6 pt-4 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-2">
                  <div className="mb-4 pb-3 border-b border-ink/10 flex justify-center">
                    <Image
                      src="/logo.png"
                      width={600}
                      height={200}
                      alt="Lucas & Pataro"
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                  {[
                    ["Início", "#inicio"],
                    ["O Escritório & Sócios", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Nossos Diferenciais", "#diferenciais"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Localização", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 font-cinzel text-xs font-semibold tracking-[0.14em] text-ink-soft hover:text-brand-700"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-4 flex flex-col gap-2.5 pt-3 border-t border-ink/10">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3.5 font-cinzel text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-md transition-all hover:bg-brand-800"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> Falar no WhatsApp
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-5 py-3 text-xs font-semibold text-ink transition-colors hover:text-brand-700"
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <InstagramIcon size={15} /> Acompanhar no Instagram
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-ink/10"
        >
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-brand-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-brand-100/50 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[730px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-4"
            >
              <motion.div variants={reveal} className="eyebrow mb-6">
                <span className="size-2 rounded-full bg-brand-700" />
                Dra. Clarissa Pataro & Dr. Diego Lucas · Ponte Nova - MG
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-cinzel text-[2.65rem] leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[4.25rem]"
              >
                Segurança jurídica e{" "}
                <span className="text-bronze-metallic">
                  excelência técnica
                </span>{" "}
                com compromisso humano.
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Atendimento ético, resolutivo e próximo conduzido pelos sócios
                fundadores. Defesa estratégica em Direito Previdenciário (INSS),
                Direito Penal, Cível, Família & Sucessões e Consultoria Jurídica —
                atendimento presencial em Ponte Nova e on-line em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de consultar um dos advogados sócios do escritório Lucas & Pataro."
                  )}
                  target="_blank"
                  size="lg"
                  className="rounded-full shadow-bronze"
                >
                  <WhatsAppIcon size={16} /> Falar com os Advogados
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-2 py-3 font-cinzel text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:text-brand-700"
                >
                  Conhecer áreas de atuação{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-ink/10 pt-6 text-xs text-ink-soft"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-brand-700 text-brand-700" />{" "}
                  5,0 estrelas no Google (66+ avaliações)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <Award size={15} className="text-brand-700" /> Atuação
                  Previdenciária, Penal e Cível
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-brand-700" /> Sede em Ponte Nova - MG
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Image Presentation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[470px] lg:ml-auto lg:mr-2"
            >
              {/* Outer decorative bronze border */}
              <div className="absolute -inset-3 -rotate-2 rounded-[44%_44%_4%_4%] border border-brand-700/30 sm:-inset-4" />

              {/* Main portrait of founders */}
              <div className="relative aspect-[0.82] overflow-hidden rounded-[44%_44%_4%_4%] bg-[#ded7cf] shadow-card">
                <Image
                  src="/advogados-lucas-pataro.jpg"
                  alt="Dra. Clarissa Pataro e Dr. Diego Lucas — Sócios Fundadores de Lucas & Pataro Advocacia"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-[50%_18%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-950/90 via-brand-950/45 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-cinzel text-xl sm:text-2xl font-semibold tracking-wide">
                      Dra. Clarissa & Dr. Diego
                    </p>
                    <p className="mt-1 font-cinzel text-[10px] uppercase tracking-[0.24em] text-brand-200">
                      Lucas & Pataro Advocacia
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-300/40 bg-brand-950/50 text-brand-200 backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-3 top-[14%] rounded-full border border-brand-700/25 bg-ivory px-4 py-2.5 font-cinzel text-[10px] font-bold tracking-[0.18em] text-brand-800 shadow-card sm:-left-8 sm:px-5">
                RESOLUTIVIDADE & ÉTICA
              </div>

              <div className="absolute -right-3 bottom-[18%] rounded-2xl border border-brand-700/25 bg-white/95 p-3.5 shadow-card backdrop-blur-md sm:-right-8">
                <div className="flex items-center gap-2 text-brand-700">
                  <Star size={14} className="fill-brand-700" />
                  <span className="font-cinzel text-lg font-bold text-ink">
                    5,0 / 5,0
                  </span>
                </div>
                <p className="mt-0.5 font-cinzel text-[9px] uppercase tracking-[0.16em] text-ink-soft">
                  66 Avaliações Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-ink/10 bg-white/80 py-8 lg:py-10"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink/10">
              {[
                {
                  icon: Star,
                  value: "5,0 ★ no Google",
                  label: "Classificação máxima com 66 avaliações públicas verificadas",
                },
                {
                  icon: Award,
                  value: "Previdenciário",
                  label: "Planejamento e conquista do benefício mais vantajoso no INSS",
                },
                {
                  icon: ShieldCheck,
                  value: "Penal & Cível",
                  label: "Defesa combativa da liberdade e proteção de patrimônio",
                },
                {
                  icon: MapPin,
                  value: "Ponte Nova & Brasil",
                  label: "Atendimento presencial na sede e assessoria 100% on-line",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.value}
                    className="flex flex-col items-center text-center px-4 lg:px-6"
                  >
                    <span className="grid size-10 place-items-center rounded-full bg-brand-50 text-brand-700 mb-2">
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                    <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wide text-brand-700">
                      {item.value}
                    </span>
                    <span className="mt-2 text-xs leading-relaxed text-ink-soft max-w-[240px]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sobre o Escritório & Sócios */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
            {/* Themis Statue / Office presentation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[500px]"
            >
              <div className="relative aspect-[0.88] overflow-hidden rounded-[2px] bg-[#1a120c] shadow-card border border-brand-700/20">
                <Image
                  src="/justica-themis.jpg"
                  alt="Estátua da Justiça Têmis com iluminação em bronze — Lucas & Pataro Advocacia"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-cinzel text-xl sm:text-2xl font-semibold">
                    Justiça, Rigor e Humanidade
                  </p>
                  <p className="mt-1 font-cinzel text-[11px] uppercase tracking-[0.2em] text-brand-200">
                    Lucas & Pataro Advocacia e Consultoria Jurídica
                  </p>
                </div>
              </div>

              {/* Authority card */}
              <div className="absolute -bottom-6 right-2 max-w-[280px] border-l-2 border-brand-700 bg-ivory px-5 py-4 shadow-card sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-brand-700">
                  <ShieldCheck size={16} />
                  <p className="font-cinzel text-[10px] font-bold uppercase tracking-[0.2em]">
                    Compromisso Real
                  </p>
                </div>
                <p className="mt-1 font-cinzel text-lg leading-snug text-ink font-semibold">
                  A dimensão humana do Direito
                </p>
                <p className="mt-1 text-[11px] leading-4 text-ink-soft">
                  Atendimento direto e personalizado conduzido com respeito por cada história.
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l border-t border-brand-700/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Text description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow">
                TRAJETÓRIA & PROPÓSITO
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-cinzel text-3xl leading-[1.18] tracking-[-0.015em] text-ink sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia que alia{" "}
                <span className="text-bronze-metallic">
                  profundidade técnica
                </span>{" "}
                e sensibilidade no atendimento.
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                O escritório <strong className="text-ink">Lucas & Pataro Advocacia e Consultoria Jurídica</strong> nasceu do compromisso inegociável de exercer o Direito com rigor técnico, honestidade absoluta e acolhimento humano. Sob a liderança da <strong className="text-ink">Dra. Clarissa Pataro</strong> e do <strong className="text-ink">Dr. Diego Lucas</strong>, cada causa é tratada de forma exclusiva e estratégica.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Como destacam os clientes em avaliações públicas, nosso diferencial está na capacidade de ouvir atentamente, explicar cada passo em linguagem acessível e defender os interesses de quem confia em nós com dedicação incansável — seja na obtenção de aposentadorias e benefícios do INSS, na defesa criminal combativa, ou em inventários e causas cíveis de grande relevância.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Atendimento direto pelos sócios fundadores</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Explicações claras sem jargões desnecessários</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Sede no Centro/Palmeiras em Ponte Nova - MG</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Atendimento digital estruturado em todo o país</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de conversar com a Dra. Clarissa ou o Dr. Diego para entender como o escritório pode atuar no meu caso."
                  )}
                  target="_blank"
                  size="md"
                  className="rounded-full shadow-bronze"
                >
                  <WhatsAppIcon size={16} /> Agendar Consulta Inicial
                </GlowingButton>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 font-cinzel text-xs font-semibold tracking-[0.1em] text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  <InstagramIcon size={15} /> Ver no Instagram
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section
          id="atuacao"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="ÁREAS DE ATUAÇÃO ESTRATÉGICA"
                description="Expertise aprofundada nas matérias mais sensíveis e decisivas para sua vida, sua liberdade, seus direitos e seu patrimônio."
              >
                Segurança jurídica e estratégia nos{" "}
                <span className="text-bronze-metallic">
                  momentos mais decisivos.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-ink-soft">
                Selecione uma área para visualizar os temas atendidos e consultar
                diretamente nossa equipe jurídica.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[350px] flex-col border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-700/40 hover:shadow-card sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-cinzel text-2xl font-bold text-brand-700/40">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-full bg-brand-50 px-3 py-1 font-cinzel text-[9px] font-bold uppercase tracking-[0.18em] text-brand-800">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-cinzel text-[1.45rem] font-semibold leading-tight text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-ink-soft">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 font-cinzel text-[10px] font-bold uppercase tracking-[0.18em] text-brand-800 hover:text-brand-700"
                    >
                      Ver detalhes e tópicos{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Pilares e Diferenciais de Atuação */}
        <section
          id="diferenciais"
          className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-brand-700/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-brand-800/15 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
            <Heading
              eyebrow="NOSSO COMPROMISSO ÉTICO"
              light
              description="A condução de cada demanda com a máxima técnica, transparência total e respeito ao tempo e aos anseios de quem nos procura."
            >
              Excelência técnica aliada ao{" "}
              <span className="text-bronze-light-metallic">
                respeito que sua história merece.
              </span>
            </Heading>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/15"
            >
              {[
                [
                  "01",
                  "Ética e Transparência Irrestrita",
                  "Você é mantido informado sobre cada movimentação em linguagem direta e clara. Apresentamos cenários reais, riscos e probabilidades com total franqueza.",
                ],
                [
                  "02",
                  "Segurança Técnica e Estudo Aprofundado",
                  "Não usamos modelos genéricos. Cada petição, cálculo previdenciário e estratégia de defesa é elaborada sob medida com rigor doutrinário e jurisprudencial.",
                ],
                [
                  "03",
                  "Eficiência e Agilidade Processual",
                  "Sabemos que o tempo é precioso. Atuamos com proatividade nas secretarias, cartórios e audiências para dar a máxima celeridade ao andamento da sua causa.",
                ],
                [
                  "04",
                  "Atenção Personalizada e Humanizada",
                  "Entendemos que por trás de cada processo existe uma pessoa, uma família ou um negócio. O acolhimento e a atenção direta dos sócios fazem toda a diferença.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-cinzel text-2xl font-bold text-bronze-light-metallic">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-cinzel text-2xl font-semibold text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-white/70">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-center">
              <div>
                <Heading
                  eyebrow="PROVA SOCIAL & AVALIAÇÕES REAIS"
                  description="A reputação do escritório Lucas & Pataro é construída a cada atendimento. Confira os depoimentos públicos e verificados no Google Meu Negócio."
                >
                  Confiança comprovada por{" "}
                  <span className="text-bronze-metallic">
                    quem já teve sua causa defendida.
                  </span>
                </Heading>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border-b-2 border-brand-700/60 pb-1.5 font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-brand-800 hover:border-brand-700 hover:text-brand-700"
                  >
                    Ver todas as avaliações no Google <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Rating highlights pills */}
                <div className="mt-9 flex flex-wrap gap-2">
                  {[
                    "Ética e seriedade",
                    "Segurança e agilidade",
                    "Eficiência técnica",
                    "Atenção humanizada",
                    "Resolução comprovada",
                    "Transparência total",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-ivory px-3.5 py-1.5 text-[11px] font-medium text-ink-soft"
                    >
                      <CheckCircle2 size={13} className="text-brand-700" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Public score box */}
              <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden border border-brand-700/25 bg-ivory p-8 shadow-card sm:p-10">
                <div className="absolute -right-10 -top-16 size-56 rounded-full border border-brand-700/10" />
                <div className="absolute -right-2 -top-8 size-40 rounded-full border border-brand-700/10" />

                <div className="relative flex items-center justify-between gap-4">
                  <span className="font-cinzel text-[10px] font-bold uppercase tracking-[0.2em] text-brand-800">
                    Avaliações Verificadas · Google Maps
                  </span>
                  <div className="flex gap-1 text-brand-700" aria-label="5 estrelas">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        size={17}
                        fill="currentColor"
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative mt-8 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <span className="font-cinzel text-7xl font-bold leading-none text-ink sm:text-8xl">
                      5,0
                    </span>
                    <p className="mt-2 font-cinzel text-xs font-semibold tracking-wider text-brand-800">
                      Classificação Máxima Absoluta
                    </p>
                  </div>
                  <div className="pb-1 text-right">
                    <p className="font-cinzel text-3xl font-bold text-brand-700">
                      66 avaliações
                    </p>
                    <p className="mt-1 text-xs text-ink-soft">
                      100% de avaliações 5 estrelas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Grid (First Row) */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clientReviews.slice(0, 4).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between border border-ink/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-brand-700">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-ink-soft">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-brand-800 font-cinzel tracking-wide">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-cinzel text-sm font-bold text-ink">
                      {review.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                      {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second row of reviews */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clientReviews.slice(4, 8).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between border border-ink/10 bg-ivory/60 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-brand-700">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-ink-soft">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-brand-800 font-cinzel tracking-wide">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-cinzel text-sm font-bold text-ink">
                      {review.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                      {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Third row of reviews */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clientReviews.slice(8, 12).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between border border-ink/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-brand-700">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-ink-soft">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-brand-800 font-cinzel tracking-wide">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-cinzel text-sm font-bold text-ink">
                      {review.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                      {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato & Localização */}
        <section
          id="contato"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & LOCALIZAÇÃO"
                description="Agende sua consulta presencial em nossa sede em Ponte Nova - MG ou realize seu atendimento de forma on-line com sigilo e segurança."
              >
                Estamos prontos para{" "}
                <span className="text-bronze-metallic">atender você.</span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  className="rounded-full shadow-bronze"
                >
                  <WhatsAppIcon size={17} /> Iniciar conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-ink-soft">
                  Atendimento direto e retorno com agilidade:{" "}
                  <strong className="text-ink">{PHONE_DISPLAY}</strong>.
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-ink-soft">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-brand-700" />
                  <span>Segunda a Sexta: 08h30 às 18h (sob agendamento)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-brand-700" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="hover:text-brand-700 transition-colors font-medium text-ink"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="text-brand-700" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-700 transition-colors font-medium text-ink"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={16} className="text-brand-700" />
                  <span className="font-cinzel tracking-wider text-ink font-semibold">Dra. Clarissa Pataro & Dr. Diego Lucas</span>
                </div>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="relative overflow-hidden border border-ink/10 bg-white p-7 sm:p-10 shadow-card">
              <div className="absolute right-0 top-0 h-1.5 w-36 bg-brand-700" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <MapPin size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="font-cinzel text-[10px] font-bold uppercase tracking-[0.2em] text-brand-700">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-cinzel text-2xl font-semibold text-ink">
                    Ponte Nova · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
                <strong className="text-ink font-cinzel font-semibold tracking-wide block mb-1">
                  Lucas & Pataro Advocacia e Consultoria Jurídica
                </strong>
                Av. Dom Bôsco, 300 - SL 304 - Palmeiras
                <br />
                Ponte Nova - MG, CEP 35430-232, Brasil
              </address>

              <div className="my-7 h-px bg-ink/10" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Atendimento presencial no bairro Palmeiras e on-line para todo o Brasil
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 font-cinzel text-[10px] font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:border-brand-700 hover:bg-brand-50 hover:text-brand-800"
                >
                  Abrir no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="bg-bronze-gradient px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12 shadow-inner">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="font-cinzel text-[10px] font-bold uppercase tracking-[0.22em] text-brand-100">
                LUCAS & PATARO ADVOCACIA E CONSULTORIA JURÍDICA
              </p>
              <h2 className="mt-3 max-w-2xl font-cinzel text-3xl font-semibold leading-tight sm:text-4xl text-white">
                Pronto para defender seus direitos com dedicação, ética e firmeza técnica?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá! Gostaria de falar com o escritório Lucas & Pataro para avaliar minha demanda jurídica."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 font-cinzel text-[11px] font-bold uppercase tracking-[0.16em] text-brand-900 shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-lg"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-950 px-5 py-16 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr]">
            <div>
              <div className="inline-flex rounded-xl bg-white/95 p-4 sm:p-5 shadow-card border border-brand-700/25 backdrop-blur-sm">
                <Image
                  src="/logo.png"
                  width={900}
                  height={300}
                  alt="Lucas & Pataro Advocacia e Consultoria Jurídica"
                  className="h-20 sm:h-24 lg:h-28 w-auto object-contain"
                />
              </div>
              <p className="mt-6 max-w-xs text-xs leading-6 text-white/65">
                Advocacia estratégica, rigor técnico e compromisso humano. Sede em Ponte Nova - MG e atendimento digital seguro para todo o Brasil.
              </p>
              <p className="mt-4 font-cinzel text-xs font-semibold tracking-wider text-brand-300">
                Dra. Clarissa Pataro & Dr. Diego Lucas
              </p>
            </div>

            <div>
              <h2 className="font-cinzel text-[11px] font-bold uppercase tracking-[0.22em] text-brand-300">
                Navegação
              </h2>
              <div className="mt-5 flex flex-col items-start gap-3.5 text-xs text-white/70">
                <a className="footer-link hover:text-brand-300" href="#inicio">
                  Início
                </a>
                <a className="footer-link hover:text-brand-300" href="#sobre">
                  O Escritório & Sócios
                </a>
                <a className="footer-link hover:text-brand-300" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link hover:text-brand-300" href="#diferenciais">
                  Nossos Diferenciais
                </a>
                <a className="footer-link hover:text-brand-300" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link hover:text-brand-300" href="#contato">
                  Contato & Localização
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-cinzel text-[11px] font-bold uppercase tracking-[0.22em] text-brand-300">
                Contato Direto
              </h2>
              <div className="mt-5 flex flex-col items-start gap-3.5 text-xs text-white/70">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 hover:text-brand-300"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2 hover:text-brand-300"
                >
                  <InstagramIcon size={15} className="shrink-0" /> {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2 hover:text-brand-300"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>Av. Dom Bôsco, 300 - SL 304 - Palmeiras, Ponte Nova - MG</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-[10px] text-white/50 sm:flex-row sm:items-center sm:justify-between font-cinzel tracking-wider">
            <p>
              © {new Date().getFullYear()} Lucas & Pataro Advocacia e Consultoria Jurídica. Todos os direitos reservados.
            </p>
            <p>
              Em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Modal de Detalhes da Área de Atuação */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-ink/10 bg-ivory p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ÁREA DE ATUAÇÃO ESTRATÉGICA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-cinzel text-2xl font-bold leading-tight text-ink sm:text-3xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-ink/10 pt-5">
                  <p className="font-cinzel text-[10px] font-bold uppercase tracking-[0.18em] text-brand-800">
                    Principais temas e demandas atendidas:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-ink"
                      >
                        <span className="size-2 rounded-full bg-brand-700 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    className="rounded-full shadow-bronze"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta área
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 font-cinzel text-xs font-semibold text-ink-soft hover:text-ink transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
