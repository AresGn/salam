import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, GraduationCap, Calendar, Link2, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvggvyar';

const STUDY_LEVELS = ['Bac', 'Bac +1', 'Bac +2', 'Bac +3', 'Bac +4', 'Bac +5 et +'];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  school: string;
  studyLevel: string;
  availability: string;
  experience: string;
  profileUrl: string;
  motivation: string;
  consent: boolean;
  _gotcha: string;
}

type Errors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  school: '',
  studyLevel: '',
  availability: '',
  experience: '',
  profileUrl: '',
  motivation: '',
  consent: false,
  _gotcha: '',
};

const MIN_MOTIVATION_LENGTH = 50;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (!data.firstName.trim()) errors.firstName = 'Veuillez indiquer votre prénom.';
  if (!data.lastName.trim()) errors.lastName = 'Veuillez indiquer votre nom.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = 'Adresse email invalide.';
  if (!/^[+()\d\s.-]+$/.test(data.phone.trim()) || data.phone.replace(/\D/g, '').length < 8) {
    errors.phone = 'Numéro de téléphone invalide.';
  }
  if (!data.school.trim()) errors.school = 'Veuillez indiquer votre école ou formation.';
  if (!data.studyLevel) errors.studyLevel = "Veuillez choisir votre niveau d'études.";
  if (!data.experience) errors.experience = 'Veuillez répondre à cette question.';
  if (data.profileUrl.trim() && !/^https?:\/\/\S+\.\S+/.test(data.profileUrl.trim())) {
    errors.profileUrl = 'Le lien doit commencer par http:// ou https://';
  }
  if (data.motivation.trim().length < MIN_MOTIVATION_LENGTH) {
    errors.motivation = `Quelques mots de plus : au moins ${MIN_MOTIVATION_LENGTH} caractères.`;
  }
  if (!data.consent) errors.consent = 'Votre accord est nécessaire pour traiter votre candidature.';
  return errors;
}

const inputBase =
  'w-full rounded-xl border bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';

function inputClass(hasError: boolean, withIcon = true, paddingRight = 'pr-4') {
  return `${inputBase} ${paddingRight} ${withIcon ? 'pl-11' : 'pl-4'} ${
    hasError ? 'border-red-400 dark:border-red-500' : 'border-gray-200 dark:border-gray-700'
  }`;
}

function choiceClass(selected: boolean, hasError: boolean) {
  const state = selected
    ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 ring-1 ring-blue-500'
    : hasError
    ? 'border-red-400 dark:border-red-500 text-gray-700 dark:text-gray-300'
    : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-700';
  return `flex items-center justify-center text-center px-2 py-3 rounded-xl border cursor-pointer text-sm font-medium transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-blue-500 ${state}`;
}

function FieldError({ message }: { message: string }) {
  return (
    <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
      <AlertCircle className="w-4 h-4 shrink-0" />
      {message}
    </p>
  );
}

interface FieldProps {
  id: keyof FormData;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}

function Field({ id, label, required, error, hint, children, className = '' }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {error}
        </p>
      ) : (
        hint && <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">{hint}</p>
      )}
    </div>
  );
}

function IconInput({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="relative">
      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      {children}
    </div>
  );
}

export function ApplicationForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const nextValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setData((prev) => ({ ...prev, [name]: nextValue }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(data);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus('submitting');
    setServerError('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Candidature étudiant — ${data.firstName.trim()} ${data.lastName.trim()}`,
          _replyto: data.email.trim(),
          _gotcha: data._gotcha,
          formulaire: 'Recrutement étudiants',
          prenom: data.firstName.trim(),
          nom: data.lastName.trim(),
          email: data.email.trim(),
          telephone: data.phone.trim(),
          ville: data.city.trim() || 'Non renseignée',
          ecole: data.school.trim(),
          niveau_etudes: data.studyLevel,
          disponibilite: data.availability || 'Non renseignée',
          experience_commerciale: data.experience,
          cv_ou_linkedin: data.profileUrl.trim() || 'Non renseigné',
          motivation: data.motivation.trim(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setData(initialData);
      } else {
        const body = await response.json().catch(() => null);
        setServerError(
          body?.errors?.map((err: { message: string }) => err.message).join(' ') ||
            "L'envoi a échoué. Merci de réessayer dans quelques instants."
        );
        setStatus('error');
      }
    } catch {
      setServerError('Impossible de joindre le serveur. Vérifiez votre connexion puis réessayez.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-10 px-4" role="status">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-9 h-9 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Candidature envoyée !</h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-8">
          Merci pour votre intérêt. Nous étudions chaque candidature avec attention et revenons vers vous
          rapidement par email ou par téléphone.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          Envoyer une autre candidature
        </button>
      </div>
    );
  }

  const describedBy = (id: keyof FormData) => (errors[id] ? `${id}-error` : undefined);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot anti-spam (Formspree) */}
      <input
        type="text"
        name="_gotcha"
        value={data._gotcha}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="firstName" label="Prénom" required error={errors.firstName}>
          <IconInput icon={User}>
            <input id="firstName" name="firstName" type="text" autoComplete="given-name" value={data.firstName}
              onChange={handleChange} placeholder="Votre prénom" aria-invalid={!!errors.firstName}
              aria-describedby={describedBy('firstName')} className={inputClass(!!errors.firstName)} />
          </IconInput>
        </Field>
        <Field id="lastName" label="Nom" required error={errors.lastName}>
          <IconInput icon={User}>
            <input id="lastName" name="lastName" type="text" autoComplete="family-name" value={data.lastName}
              onChange={handleChange} placeholder="Votre nom" aria-invalid={!!errors.lastName}
              aria-describedby={describedBy('lastName')} className={inputClass(!!errors.lastName)} />
          </IconInput>
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <IconInput icon={Mail}>
            <input id="email" name="email" type="email" autoComplete="email" inputMode="email" value={data.email}
              onChange={handleChange} placeholder="prenom.nom@email.com" aria-invalid={!!errors.email}
              aria-describedby={describedBy('email')} className={inputClass(!!errors.email)} />
          </IconInput>
        </Field>
        <Field id="phone" label="Téléphone" required error={errors.phone}>
          <IconInput icon={Phone}>
            <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" value={data.phone}
              onChange={handleChange} placeholder="06 12 34 56 78" aria-invalid={!!errors.phone}
              aria-describedby={describedBy('phone')} className={inputClass(!!errors.phone)} />
          </IconInput>
        </Field>
        <Field id="school" label="École / formation" required error={errors.school} className="sm:col-span-2">
          <IconInput icon={GraduationCap}>
            <input id="school" name="school" type="text" value={data.school} onChange={handleChange}
              placeholder="Ex. : BTS NDRC, IUT TC…" aria-invalid={!!errors.school}
              aria-describedby={describedBy('school')} className={inputClass(!!errors.school)} />
          </IconInput>
        </Field>
        <Field id="city" label="Ville" hint="Facultatif">
          <IconInput icon={MapPin}>
            <input id="city" name="city" type="text" autoComplete="address-level2" value={data.city}
              onChange={handleChange} placeholder="Votre ville" className={inputClass(false)} />
          </IconInput>
        </Field>
        <Field id="availability" label="Disponible à partir du" hint="Facultatif">
          <IconInput icon={Calendar}>
            <input id="availability" name="availability" type="date" value={data.availability}
              onChange={handleChange} className={inputClass(false)} />
          </IconInput>
        </Field>
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Niveau d'études<span className="text-red-500 ml-0.5">*</span>
        </legend>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {STUDY_LEVELS.map((level, i) => (
            <label key={level} className={choiceClass(data.studyLevel === level, !!errors.studyLevel)}>
              <input
                type="radio"
                id={i === 0 ? 'studyLevel' : undefined}
                name="studyLevel"
                value={level}
                checked={data.studyLevel === level}
                onChange={handleChange}
                className="sr-only"
              />
              {level}
            </label>
          ))}
        </div>
        {errors.studyLevel && <FieldError message={errors.studyLevel} />}
      </fieldset>

      <fieldset>
        <legend className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Avez-vous déjà une expérience commerciale ?<span className="text-red-500 ml-0.5">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-3">
          {['Oui', 'Non'].map((option) => (
            <label key={option} className={choiceClass(data.experience === option, !!errors.experience)}>
              <input
                type="radio"
                id={option === 'Oui' ? 'experience' : undefined}
                name="experience"
                value={option}
                checked={data.experience === option}
                onChange={handleChange}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
        {errors.experience && <FieldError message={errors.experience} />}
      </fieldset>

      <Field id="profileUrl" label="Lien vers votre CV ou profil LinkedIn" error={errors.profileUrl}
        hint="Facultatif — Google Drive, LinkedIn, Dropbox…">
        <IconInput icon={Link2}>
          <input id="profileUrl" name="profileUrl" type="url" inputMode="url" value={data.profileUrl}
            onChange={handleChange} placeholder="https://linkedin.com/in/…" aria-invalid={!!errors.profileUrl}
            aria-describedby={describedBy('profileUrl')} className={inputClass(!!errors.profileUrl)} />
        </IconInput>
      </Field>

      <Field id="motivation" label="Pourquoi souhaitez-vous nous rejoindre ?" required error={errors.motivation}>
        <textarea id="motivation" name="motivation" rows={5} value={data.motivation} onChange={handleChange}
          placeholder="Parlez-nous de vous, de votre motivation et de votre rapport au téléphone et à la prospection…"
          aria-invalid={!!errors.motivation} aria-describedby={describedBy('motivation')}
          className={`${inputClass(!!errors.motivation, false)} resize-y min-h-[8rem]`} />
        <div className="mt-1 text-right text-xs text-gray-400">
          {data.motivation.trim().length} / {MIN_MOTIVATION_LENGTH} min.
        </div>
      </Field>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input id="consent" name="consent" type="checkbox" checked={data.consent} onChange={handleChange}
            aria-invalid={!!errors.consent} aria-describedby={describedBy('consent')}
            className="mt-0.5 w-5 h-5 shrink-0 rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            J'accepte que mes informations soient utilisées uniquement dans le cadre de ce recrutement.
            <span className="text-red-500 ml-0.5">*</span>
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {errors.consent}
          </p>
        )}
      </div>

      {status === 'error' && (
        <div role="alert" className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-sm text-red-700 dark:text-red-300">
          <AlertCircle className="w-5 h-5 shrink-0" />
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:from-blue-700 hover:to-purple-700 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          <>
            Envoyer ma candidature
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
      <p className="text-xs text-center text-gray-500 dark:text-gray-400">
        Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires.
      </p>
    </form>
  );
}
