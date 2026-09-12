import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';

const leader = {
  initials: 'SS',
  name: 'SAIBOU ABDOU Salam',
  role: 'FONDATEUR & PDG',
  description: [
    'Business Developer Tech · Responsable',
    'du Développement Commercial (RDC) ·',
    'Stratégie & solutions digitales',
  ],
};

const members = [
  {
    initials: 'GA',
    name: 'GNIMAGNON Arès',
    role: 'DESIGNER',
    description: 'Design graphique & identité visuelle',
    avatar: 'bg-gradient-to-br from-pink-400 to-pink-600',
    badge: 'bg-pink-500/20 border-pink-400/60 text-pink-200',
    line: 'bg-pink-400/60',
  },
  {
    initials: 'AS',
    name: 'ADJASSOHO Silvère',
    role: 'DÉVELOPPEUR FRONTEND',
    description: 'Interfaces & expérience utilisateur',
    avatar: 'bg-gradient-to-br from-cyan-300 to-cyan-500',
    badge: 'bg-cyan-500/20 border-cyan-400/60 text-cyan-200',
    line: 'bg-cyan-400/60',
  },
  {
    initials: 'LH',
    name: 'LOKO Harris',
    role: 'DÉVELOPPEUR BACKEND',
    description: 'Serveurs, API & bases de données',
    avatar: 'bg-gradient-to-br from-green-300 to-green-500',
    badge: 'bg-green-500/20 border-green-400/60 text-green-200',
    line: 'bg-green-400/60',
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-8">
        <SectionTitle>Découvrir l'équipe</SectionTitle>

        <p className="max-w-2xl mx-auto -mt-6 mb-12 text-center text-gray-600 dark:text-gray-400">
          Derrière chaque projet Fiablitech, une équipe pluridisciplinaire : stratégie
          commerciale, design, frontend et backend réunis sous une même direction.
        </p>

        {/* Organigramme — reproduction du document officiel Fiablitech */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto rounded-3xl p-1 shadow-2xl bg-[radial-gradient(circle_at_top_left,#0f4c5c_0%,#2b2a6b_35%,#4338ca_70%,#6d28d9_100%)]"
        >
          <div className="rounded-[1.4rem] border border-white/20 px-6 py-12 sm:px-10 lg:px-16">
            {/* En-tête */}
            <div className="text-center">
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.08em] text-white">
                FIABLITECH
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-bold tracking-[0.2em] text-white">
                AGENCE WEB
              </p>

              <h4 className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-bold">
                <span className="text-white">Organigramme </span>
                <span className="bg-gradient-to-r from-indigo-300 to-sky-400 bg-clip-text text-transparent">
                  de l'entreprise
                </span>
              </h4>
              <p className="mt-2 text-[0.7rem] sm:text-sm uppercase tracking-[0.25em] text-indigo-200">
                Structure organisationnelle · 2026
              </p>
            </div>

            {/* Direction */}
            <div className="mt-12 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="w-full max-w-sm rounded-2xl border border-amber-400/70 bg-white/10 px-6 py-7 text-center shadow-lg backdrop-blur-sm"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 ring-4 ring-white/25">
                  <span className="text-xl font-bold text-gray-900">{leader.initials}</span>
                </div>
                <h5 className="mt-4 text-lg font-bold text-white">{leader.name}</h5>
                <span className="mt-3 inline-block rounded-full border border-amber-400/70 bg-amber-500/15 px-4 py-1 text-xs font-semibold tracking-[0.15em] text-amber-300">
                  {leader.role}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-indigo-100">
                  {leader.description.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </motion.div>
            </div>

            {/* Connecteurs (desktop) */}
            <div className="relative hidden h-16 md:block" aria-hidden="true">
              <div className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-white/40" />
              <div className="absolute left-[16.666%] right-[16.666%] top-8 h-px bg-white/40" />
              <div className="absolute left-[16.666%] top-8 h-8 w-px bg-white/40" />
              <div className="absolute left-1/2 top-8 h-8 w-px -translate-x-1/2 bg-white/40" />
              <div className="absolute right-[16.666%] top-8 h-8 w-px bg-white/40" />
            </div>

            {/* Équipe */}
            <div className="mt-10 grid gap-6 md:mt-0 md:grid-cols-3 md:gap-8">
              {members.map((member, index) => (
                <motion.div
                  key={member.initials}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + index * 0.12 }}
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-7 text-center shadow-lg backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-white/40"
                >
                  <div
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ring-4 ring-white/25 ${member.avatar}`}
                  >
                    <span className="text-xl font-bold text-gray-900">{member.initials}</span>
                  </div>
                  <h5 className="mt-4 text-lg font-bold text-white">{member.name}</h5>
                  <span
                    className={`mt-3 inline-block rounded-full border px-4 py-1 text-xs font-semibold tracking-[0.15em] ${member.badge}`}
                  >
                    {member.role}
                  </span>
                  <p className="mt-4 text-sm text-indigo-100">{member.description}</p>
                </motion.div>
              ))}
            </div>

            <p className="mt-12 text-center text-xs tracking-[0.2em] text-indigo-200/80">
              FIABLITECH • Organigramme officiel
            </p>
          </div>
        </motion.div>

        {/* Appel à l'action */}
        <div className="mt-10 text-center">
          <a
            href="https://www.fiablitech-projet.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:shadow-lg"
          >
            Travailler avec l'équipe Fiablitech
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
