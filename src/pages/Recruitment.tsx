import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone,
  Presentation,
  UserSearch,
  CalendarCheck,
  RefreshCw,
  BarChart3,
  Clock,
  Hourglass,
  Percent,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Sparkles,
  Target,
  UserCheck,
  Send,
  ShieldCheck,
  Zap,
  ListChecks,
  Headphones,
  Mountain,
  Repeat,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ui/ScrollToTop';
import { CustomCursor } from '../components/ui/CustomCursor';
import { ApplicationForm } from '../components/recruitment/ApplicationForm';

const PAGE_TITLE = 'Recrutement étudiants | SAIBOU ABDOU SALAM';

const missions = [
  { icon: Phone, title: 'Prospecter', text: 'Contacter des entreprises par téléphone.' },
  { icon: Presentation, title: 'Présenter', text: 'Présenter clairement nos services aux décideurs.' },
  { icon: UserSearch, title: 'Qualifier', text: 'Identifier les prospects réellement intéressés.' },
  { icon: CalendarCheck, title: 'Planifier', text: 'Obtenir et planifier des rendez-vous professionnels.' },
  { icon: RefreshCw, title: 'Suivre', text: 'Assurer le suivi régulier de vos prospects.' },
  { icon: BarChart3, title: 'Reporter', text: 'Effectuer un reporting régulier de votre activité.' },
];

const highlights = [
  { icon: Clock, value: '25 h', label: 'par semaine' },
  { icon: Percent, value: '10 – 15 %', label: 'de commission' },
  { icon: Hourglass, value: '2 – 3 mois', label: "d'évaluation" },
  { icon: TrendingUp, value: 'CDI', label: 'possible ensuite' },
];

const qualities = [
  { icon: ShieldCheck, label: 'Sérieux' },
  { icon: Zap, label: 'Motivés' },
  { icon: ListChecks, label: 'Organisés' },
  { icon: Headphones, label: 'À l’aise au téléphone' },
  { icon: Mountain, label: 'Persévérants' },
  { icon: Repeat, label: 'Réguliers dans leur suivi' },
];

const outcomes = [
  { icon: Briefcase, label: 'CDD étudiant' },
  { icon: ShieldCheck, label: 'CDI' },
  { icon: GraduationCap, label: 'Alternance' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut' },
} as const;

function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  children,
}: {
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">
        <Icon className="w-4 h-4" />
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{title}</h2>
      {children && <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">{children}</p>}
    </motion.div>
  );
}

export function Recruitment() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950" />
          <div className="absolute -top-32 -right-32 -z-10 w-96 h-96 rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-3xl" />
          <div className="absolute top-40 -left-32 -z-10 w-96 h-96 rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 pt-28 pb-16 sm:pt-36 sm:pb-24 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Recrutement — Étudiants
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto"
            >
              Développez votre talent{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                commercial
              </span>{' '}
              pendant vos études
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Nous recrutons des étudiants pour développer notre activité commerciale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3"
            >
              <a
                href="#candidature"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-600/25 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl transition-all"
              >
                Postuler maintenant
                <ArrowRight className="w-5 h-5" />
              </a>
              <RouterLink
                to="/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Découvrir mon portfolio
              </RouterLink>
            </motion.div>

            {/* Highlights */}
            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
            >
              {highlights.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 shadow-sm"
                >
                  <Icon className="w-5 h-5 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                  <dt className="sr-only">{label}</dt>
                  <dd className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{value}</dd>
                  <dd className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/60">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeading icon={Target} eyebrow="Votre mission" title="Ce que vous ferez au quotidien" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {missions.map(({ icon: Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeading icon={Clock} eyebrow="Conditions" title="Un cadre pensé pour les étudiants" />
            <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
              <motion.div {...fadeUp} className="lg:col-span-2 flex flex-col gap-4 sm:gap-6">
                <div className="flex-1 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg">
                  <Clock className="w-8 h-8 mb-4 opacity-90" />
                  <p className="text-4xl sm:text-5xl font-extrabold">25 h</p>
                  <p className="mt-1 text-lg font-medium">par semaine</p>
                  <p className="mt-3 text-blue-100">Un rythme compatible avec vos études.</p>
                </div>
                <div className="flex-1 p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <Hourglass className="w-7 h-7 mb-3 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-lg font-semibold mb-2">Période d'évaluation de 2 à 3 mois</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Elle permettra d’évaluer votre implication, votre régularité et la qualité de votre travail.
                  </p>
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-3 p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <Percent className="w-7 h-7 mb-3 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-semibold mb-5">Rémunération et commissions</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-200">
                      Rémunération liée à l’exécution et au suivi des missions
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-200">
                      Commission de <strong className="text-gray-900 dark:text-white">10 à 15 %</strong> selon les
                      conditions et résultats
                    </span>
                  </li>
                </ul>
                <div className="mt-6 flex gap-3 p-4 sm:p-5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50">
                  <Sparkles className="w-5 h-5 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                  <p className="text-sm sm:text-base text-blue-900 dark:text-blue-100">
                    Les missions correctement réalisées et suivies seront prises en compte,{' '}
                    <strong>même en l’absence de résultat commercial immédiat.</strong>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Évolution */}
        <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/60">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeading icon={TrendingUp} eyebrow="Possibilités d’évolution" title="Et après ?">
              À l’issue de la période d'évaluation, selon le profil et les possibilités :
            </SectionHeading>
            <motion.div
              {...fadeUp}
              className="max-w-4xl mx-auto flex flex-col md:flex-row items-stretch md:items-center gap-4"
            >
              <div className="md:w-56 shrink-0 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center">
                <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">Étape 1</p>
                <p className="mt-1 font-semibold">Période de 2 à 3 mois</p>
              </div>
              <ArrowRight className="w-6 h-6 mx-auto rotate-90 md:rotate-0 text-blue-500 shrink-0" />
              <div className="flex-1 grid grid-cols-3 gap-3">
                {outcomes.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-500/15 dark:to-purple-500/15 border border-blue-200 dark:border-blue-900 text-center"
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
                    <p className="text-sm sm:text-base font-semibold">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Profil */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeading icon={UserCheck} eyebrow="Profil recherché" title="Nous recherchons avant tout des étudiants" />
            <motion.ul {...fadeUp} className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {qualities.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                >
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-sm sm:text-base font-medium">{label}</span>
                </li>
              ))}
            </motion.ul>
            <motion.p {...fadeUp} className="mt-8 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Une première expérience commerciale est appréciée, mais{' '}
              <strong className="text-gray-900 dark:text-white">la motivation et le sérieux sont essentiels.</strong>
            </motion.p>
          </div>
        </section>

        {/* Candidature */}
        <section id="candidature" className="scroll-mt-20 py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/60">
          <div className="container mx-auto px-4 sm:px-6">
            <SectionHeading icon={Send} eyebrow="Candidature" title="Postulez en 3 minutes">
              Remplissez le formulaire ci-dessous. Nous revenons vers chaque candidat rapidement.
            </SectionHeading>
            <motion.div
              {...fadeUp}
              className="max-w-3xl mx-auto p-5 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none"
            >
              <ApplicationForm />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
