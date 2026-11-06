import { useState, useCallback, useEffect } from 'react';
import { PetalRain } from './components/PetalRain';
import { AudioPlayer } from './components/AudioPlayer';
import { Reveal, useScrollY, useScrollProgress } from './components/Reveal';
import { RoyalFrame, RoyalMonogram } from './components/Royal';
import { InviteIntro } from './components/InviteIntro';
import { BlessingBurst } from './components/BlessingBurst';
import { Tilt } from './components/Tilt';
import { DiyaRow } from './components/DiyaRow';
import { CountdownTimer } from './components/CountdownTimer';
import { CardHero } from './components/Cards/CardHero';
import { CardFamilies } from './components/Cards/CardFamilies';
import { CardStory } from './components/Cards/CardStory';
import { CardMoments } from './components/Cards/CardMoments';
import { CardVenue } from './components/Cards/CardVenue';
import { CardRSVP } from './components/Cards/CardRSVP';
import { CardForever } from './components/Cards/CardForever';
import { Events } from './components/sections/Events';
import { VenueModal } from './components/VenueModal';
import { CeremoniesModal } from './components/CeremoniesModal';
import { LotusMotif } from './components/Decorations';
import type { CeremonyKey } from './data/ceremoniesData';
import { Sparkles, CheckCircle2, ChevronDown, CalendarPlus, Share2 } from 'lucide-react';

const PAGES = [
  { id: 'cover', name: 'The Divine Wedding' },
  { id: 'families', name: 'Our Families' },
  { id: 'story', name: 'Our Story' },
  { id: 'celebrations', name: '15 Celebrations' },
  { id: 'moments', name: 'Moments of Love' },
  { id: 'venue', name: 'The Venue' },
  { id: 'rsvp', name: 'Blessings & RSVP' },
  { id: 'forever', name: 'Forever Together' },
];

/* Card sized to fit the viewport so each page reads as one full screen */
const CARD_WRAP =
  'w-[min(calc(100vw-32px),400px,calc((100svh-150px)*9/14))]';

const PageDivider = () => (
  <div aria-hidden="true" className="flex items-center justify-center gap-3 py-6 select-none opacity-90">
    <span className="h-[1.5px] w-14 sm:w-28 hairline-gold animate-hairline-shimmer" />
    <span className="text-[#D4AF37] text-xs animate-sparkle-twinkle">✦</span>
    <span className="animate-lotus-breathe">
      <LotusMotif size={22} color="#B8860B" />
    </span>
    <span className="text-[#D4AF37] text-xs animate-sparkle-twinkle" style={{ animationDelay: '1.2s' }}>✦</span>
    <span className="h-[1.5px] w-14 sm:w-28 hairline-gold animate-hairline-shimmer" />
  </div>
);

export function App() {
  const [opened, setOpened] = useState(false);
  const [venueOpen, setVenueOpen] = useState(false);
  const [ceremoniesOpen, setCeremoniesOpen] = useState(false);
  const [ceremonyKey, setCeremonyKey] = useState<CeremonyKey>('haldi');
  const [toast, setToast] = useState<string | null>(null);

  const scrollY = useScrollY();
  const progress = useScrollProgress();

  /* Always reset scroll to top and enforce fresh entrance on page mount/reload */
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const handleResetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    window.addEventListener('load', handleResetScroll);
    window.addEventListener('pageshow', handleResetScroll);
    return () => {
      window.removeEventListener('load', handleResetScroll);
      window.removeEventListener('pageshow', handleResetScroll);
    };
  }, []);

  /* Lock scroll until the invitation is opened */
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [opened]);

  const showToast = useCallback((message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 3600);
  }, []);

  const openCeremony = useCallback((key: CeremonyKey) => {
    setCeremonyKey(key);
    setCeremoniesOpen(true);
  }, []);

  const handleBlessing = useCallback(
    (name: string) => {
      showToast(`Blessing received from ${name} — Shubh!`);
    },
    [showToast]
  );

  const downloadCalendar = useCallback(() => {
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Shiv & Parvati Divine Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'SUMMARY:Shiv & Parvati — The Divine Wedding (Maha Vivaha)',
      'DESCRIPTION:The celestial wedding of Lord Shiva & Goddess Parvati at Mount Kailash.',
      'LOCATION:Kailash Golden Mandap, Mount Kailash (31.0674° N, 81.3119° E)',
      'DTSTART:20270306T181500Z',
      'DTEND:20270307T023000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Shiv_Parvati_Divine_Wedding.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    showToast('Muhurat saved to your calendar');
  }, [showToast]);

  const shareInvite = useCallback(async () => {
    const data = {
      title: 'Shiv & Parvati — The Divine Wedding',
      text: 'You are invited to the divine wedding of Shiv & Parvati · 6 March 2027 · Mount Kailash',
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(data);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Invitation link copied');
      }
    } catch {
      /* dismissed */
    }
  }, [showToast]);

  const renderCard = (id: string) => {
    switch (id) {
      case 'cover':
        return <CardHero />;
      case 'families':
        return <CardFamilies />;
      case 'story':
        return <CardStory />;
      case 'moments':
        return <CardMoments />;
      case 'venue':
        return <CardVenue onOpenMap={() => setVenueOpen(true)} />;
      case 'rsvp':
        return <CardRSVP onSubmitBlessing={handleBlessing} />;
      case 'forever':
        return <CardForever />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#2C1810] font-cormorant relative selection:bg-[#8B1E2B] selection:text-[#FBF4E4]">
      {/* Royal paper: soft glow + faint gold lattice */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(212,175,55,0.14),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(139,30,43,0.06),transparent_70%)]" />
        <div className="absolute inset-0 royal-lattice opacity-40" />
      </div>

      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 z-[55] h-[3px] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#8B1E2B] via-[#D4AF37] to-[#F2D06B] transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <PetalRain isEnabled />

      {/* Royal chrome */}
      <RoyalMonogram />
      <BlessingBurst />
      <div className="fixed bottom-5 right-4 z-40">
        <AudioPlayer startSignal={opened ? 1 : 0} />
      </div>

      {/* Scroll cue (top of invite only) */}
      {opened && scrollY < 140 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-0.5 pointer-events-none animate-fade-in">
          <span className="font-cinzel text-[8px] uppercase tracking-[0.3em] text-[#8A5D28]">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-[#B8860B] animate-bounce" />
        </div>
      )}

      {/* The 8 scrollable pages */}
      <main className="relative z-10">
        {PAGES.map((page, i) => (
          <div key={page.id}>
            {page.id === 'celebrations' ? (
              /* Page 4: the full 15-events explorer */
              <Events onOpenCeremonies={openCeremony} />
            ) : (
              <section
                id={page.id}
                className="relative min-h-[100svh] flex items-center justify-center px-4 py-10 scroll-mt-0 overflow-hidden"
              >
                {/* Giant page numeral watermark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 flex items-center justify-center font-cinzel-dec font-bold leading-none text-transparent select-none text-[36vw] sm:text-[12rem]"
                  style={{ WebkitTextStroke: '1.5px rgba(180, 134, 11, 0.26)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {/* Multi-layered breathing halo behind the card */}
                <div
                  aria-hidden="true"
                  className="animate-glow-pulse pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78vw] max-w-[420px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22),transparent_65%)]"
                />
                <div
                  aria-hidden="true"
                  className="animate-divine-halo pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[460px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(242,208,107,0.12),transparent_70%)]"
                />

                <div className="relative flex flex-col items-center gap-4 sm:gap-5">
                  <Reveal direction="scale" className={CARD_WRAP}>
                    <Tilt>
                      <RoyalFrame>{renderCard(page.id)}</RoyalFrame>
                    </Tilt>
                  </Reveal>
                  {page.id === 'cover' && (
                    <Reveal delay={200} className="w-full max-w-[320px] flex flex-col items-center gap-3">
                      <div className="flex items-center gap-2 w-full">
                        <button
                          onClick={downloadCalendar}
                          className="group/btn relative overflow-hidden flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-[#8B1E2B] hover:bg-[#721521] text-white font-cinzel text-[9px] font-bold uppercase tracking-[0.16em] shadow-md transition-all active:scale-95"
                        >
                          <span className="absolute inset-y-0 -left-full w-2/3 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-btn-shimmer pointer-events-none" />
                          <CalendarPlus className="w-3.5 h-3.5 text-[#F2D06B] transition-transform group-hover/btn:scale-110" />
                          Add to Calendar
                        </button>
                        <button
                          onClick={shareInvite}
                          className="group/btn relative overflow-hidden flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-white hover:bg-[#FDF6E9] border border-[#D4AF37]/70 text-[#5C3A1E] font-cinzel text-[9px] font-bold uppercase tracking-[0.16em] shadow-sm transition-all active:scale-95"
                        >
                          <span className="absolute inset-y-0 -left-full w-2/3 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent animate-btn-shimmer pointer-events-none" style={{ animationDelay: '1.5s' }} />
                          <Share2 className="w-3.5 h-3.5 text-[#8B1E2B] transition-transform group-hover/btn:scale-110" />
                          Share Invite
                        </button>
                      </div>
                      <DiyaRow />
                    </Reveal>
                  )}
                  {page.id === 'forever' && (
                    <Reveal delay={200} className="w-full max-w-[340px] flex flex-col items-center gap-3">
                      <div className="w-full rounded-2xl border border-[#D4AF37]/70 bg-gradient-to-b from-white/95 via-[#FFFDF7]/95 to-[#FAF5EB]/95 backdrop-blur px-4 py-3.5 shadow-lg text-center animate-gold-border-pulse">
                        <p className="font-cinzel text-[10px] uppercase tracking-[0.28em] text-[#8A5D28] mb-2 flex items-center justify-center gap-1.5 font-bold">
                          <span className="text-[#D4AF37] text-[10px] animate-pulse">✦</span>
                          Countdown to the Divine Union
                          <span className="text-[#D4AF37] text-[10px] animate-pulse">✦</span>
                        </p>
                        <CountdownTimer variant="light" />
                        <p className="font-cormorant italic text-xs text-[#8A5D28] mt-2">
                          Saturday, 6 March 2027 · Mount Kailash, Western Himalayas
                        </p>
                      </div>
                    </Reveal>
                  )}
                </div>
              </section>
            )}

            {i < PAGES.length - 1 && <PageDivider />}
          </div>
        ))}
      </main>

      {/* Closing line */}
      <footer className="relative z-10 text-center px-6 pt-4 pb-14">
        <p className="font-cormorant text-sm text-[#8A5D28]/80 italic">
          Shiv &amp; Parvati · A Celebration of Eternal Love
        </p>
        <p className="mt-1.5 font-cinzel text-[9px] text-[#B8860B] tracking-[0.2em] uppercase">
          ॐ नमः शिवाय · सदा शिवो रक्षतु · ॐ शुभं भवतु
        </p>
        <div className="mt-4 pt-3 flex items-center justify-center gap-2">
          <span className="h-[1px] w-8 hairline-gold" />
          <a
            href="https://patrikastudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-cinzel text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#8A5D28] hover:text-[#8B1E2B] transition-colors underline decoration-[#D4AF37]/50 underline-offset-4"
          >
            Designed by Patrika Studio
          </a>
          <span className="h-[1px] w-8 hairline-gold" />
        </div>
      </footer>

      {/* Card-linked popups */}
      <VenueModal isOpen={venueOpen} onClose={() => setVenueOpen(false)} />
      <CeremoniesModal
        isOpen={ceremoniesOpen}
        onClose={() => setCeremoniesOpen(false)}
        defaultCeremony={ceremonyKey}
      />

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:max-w-md z-[80] bg-[#8B1E2B] text-amber-100 border border-[#D4AF37] px-4 py-3 rounded-xl shadow-2xl flex items-center justify-center gap-2.5 animate-fade-up">
          <CheckCircle2 className="w-4 h-4 text-[#F2D06B] shrink-0" />
          <span className="font-cinzel text-[10px] font-bold uppercase tracking-[0.14em] text-center">
            {toast}
          </span>
          <Sparkles className="w-4 h-4 text-[#F2D06B] shrink-0" />
        </div>
      )}

      {/* Tap-to-open royal intro */}
      {!opened && <InviteIntro onOpen={() => setOpened(true)} />}
    </div>
  );
}

export default App;
