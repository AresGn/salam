import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Users, Briefcase } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from './Link';
import { useTheme } from '../hooks/useTheme';
import { ThemeToggle } from './ui/ThemeToggle';
import { useAnimatedLogo } from '../hooks/useAnimatedLogo';
import { LoadingScreen } from './loading/LoadingScreen';
import { motion } from 'framer-motion';

interface NavChild {
  href: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
}

interface NavItem {
  href: string;
  label: string;
  children?: NavChild[];
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { isDark, setIsDark } = useTheme();
  const { isLogoAnimating, handleLogoClick } = useAnimatedLogo();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === '/';

  const onLogoClick = () => {
    if (isHome) {
      handleLogoClick();
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navLinks: NavItem[] = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#projects', label: 'Projets' },
    {
      href: '#team',
      label: 'Équipe',
      children: [
        { href: '#team', label: 'Notre équipe', icon: Users },
        { href: '/recrutement', label: 'Recrutement', icon: Briefcase, badge: 'On recrute' },
      ],
    },
    { href: '#experience', label: 'Parcours' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <LoadingScreen isLoading={isLogoAnimating} />
      <nav
        className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl
                    ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md outline outline-1 outline-blue-600' : 'bg-transparent'}`}
      >
        <div className="flex items-center justify-between h-12 px-4">
          {/* Logo */}
          <div className="cursor-pointer" onClick={onLogoClick}>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 font-sans">
              SALAM
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-5 items-center relative">
            {navLinks.map((link) => {
              const isActive =
                (isHome && activeSection === link.href.substring(1)) ||
                (!!link.children && link.children.some((child) => child.href === pathname));
              const underline = isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 dark:bg-blue-400"
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }} // Faster animation
                />
              );

              if (!link.children) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105"
                  >
                    {link.label}
                    {underline}
                  </Link>
                );
              }

              return (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="relative flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                    {underline}
                  </Link>
                  {/* pt-3 bridges the gap so the menu stays open while the pointer moves down */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200">
                    <div className="w-64 p-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl">
                      {link.children.map(({ href, label, icon: Icon, badge }) => (
                        <Link
                          key={href + label}
                          href={href}
                          onClick={() => (document.activeElement as HTMLElement | null)?.blur()}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm hover:bg-blue-50 dark:hover:bg-gray-800"
                        >
                          <span className="w-8 h-8 shrink-0 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                            <Icon className="w-4 h-4" />
                          </span>
                          <span className="flex-1 font-medium">{label}</span>
                          {badge && (
                            <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-[10px] font-semibold uppercase tracking-wide whitespace-nowrap">
                              {badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <a
              href="https://www.fiablitech-projet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm hover:from-purple-700 hover:to-blue-700 hover:text-white dark:text-white dark:hover:text-white transition-all duration-300"
            >
              Fiablitech
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link
              href="#contact"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 hover:text-white dark:text-white dark:hover:text-white"
            >
              Me contacter
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 rounded-b-xl shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <React.Fragment key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-sm text-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                  {link.children
                    ?.filter((child) => child.href !== link.href)
                    .map(({ href, label, icon: Icon, badge }) => (
                      <Link
                        key={href}
                        href={href}
                        className="flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        {label}
                        {badge && (
                          <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-[10px] font-semibold uppercase tracking-wide whitespace-nowrap">
                            {badge}
                          </span>
                        )}
                      </Link>
                    ))}
                </React.Fragment>
              ))}
              <a
                href="https://www.fiablitech-projet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm hover:from-purple-700 hover:to-blue-700 hover:text-white dark:text-white dark:hover:text-white transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Fiablitech
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 hover:text-white dark:text-white dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Me contacter
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
