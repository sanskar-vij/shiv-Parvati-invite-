import React, { useState } from 'react';
import { X, MapPin, Calendar, Compass, Sun, Flower2, Copy, Check, Sparkles, Shirt } from 'lucide-react';
import { LotusMotif, OrnamentalDivider, DiyaIcon } from './Decorations';
import { DressCodeModal } from './DressCodeModal';

interface VenueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VenueModal: React.FC<VenueModalProps> = ({ isOpen, onClose }) => {
  const [activeStation, setActiveStation] = useState(3);
  const [flowerOfferings, setFlowerOfferings] = useState(108);
  const [copied, setCopied] = useState(false);
  const [dressCodeOpen, setDressCodeOpen] = useState(false);

  if (!isOpen) return null;

  const pilgrimageSteps = [
    {
      id: 0,
      name: 'Haridwar Gateway',
      title: 'Sacred Ganga Snana & Pilgrim Assembly',
      desc: 'The celestial descent where pilgrims gather for purifying waters and receive the blessing of Agni Aarti.',
      elevation: '314 m',
      significance: 'Spiritual Cleansing',
    },
    {
      id: 1,
      name: 'Rishikesh Sanctum',
      title: 'Himalayan Foothills & Sage Chants',
      desc: 'Meditation groves of ancient rishis echoing with continuous chanting of Om Namah Shivaya.',
      elevation: '1,200 m',
      significance: 'Vedic Resonance',
    },
    {
      id: 2,
      name: 'Lake Mansarovar',
      title: 'Sacred Mirror Lake of Pure Consciousness',
      desc: 'Crystal turquoise alpine lake created by Lord Brahma, reflecting the divine peaks of Kailash.',
      elevation: '4,590 m',
      significance: 'Amrit Snana (Nectar Dip)',
    },
    {
      id: 3,
      name: 'Mount Kailash Mandap',
      title: 'Sanctum Sanctorum of the Divine Vivaha',
      desc: 'The eternal crystal-and-gold palace where the supreme union of Shiva & Shakti takes place before the cosmos.',
      elevation: '6,638 m (Celestial)',
      significance: 'Supreme Union (Shiva-Shakti)',
    },
  ];

  const handleCopyCoords = () => {
    navigator.clipboard.writeText('31.0674° N, 81.3119° E (Mount Kailash)');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Shiv & Parvati Divine Wedding//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:Shiv & Parvati — The Divine Wedding (Maha Vivaha)
DESCRIPTION:Celebrate the eternal celestial wedding of Lord Shiva & Goddess Parvati at Mount Kailash with devas and rishis.
LOCATION:Mount Kailash Mandap, Himalayas (31.0674° N, 81.3119° E)
DTSTART:20270306T181500Z
DTEND:20270307T023000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Shiv_Parvati_Divine_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[94svh] sm:max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-[#FAF5EB] border-2 border-b-0 sm:border-b-2 border-[#D4AF37] shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-[#2C1810] animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile bottom-sheet grabber */}
        <div aria-hidden="true" className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-[#B8860B]/60 z-30" />
        {/* Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-b from-[#F2E5CE] to-[#FAF5EB] border-b border-[#D4AF37]/40 flex flex-col items-center text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#2C1810]/70 text-[#FFF2CE] hover:bg-[#8B1E2B] transition-colors shadow-md"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <LotusMotif size={24} color="#8A5D28" className="mb-1" />
          <p className="font-cinzel text-xs tracking-[0.28em] text-[#8A5D28] uppercase font-bold">
            SACRED PILGRIMAGE GUIDE &amp; VENUE
          </p>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-wider text-[#2C1810] uppercase mt-1">
            MOUNT KAILASH PALACE MANDAP
          </h2>
          <p className="font-cormorant italic text-sm sm:text-base text-[#6E4A28] mt-1">
            Abode of Eternal Bliss — Where Heaven and Earth Unite
          </p>
          <OrnamentalDivider className="mt-3 max-w-xs" />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Visual Showcase Banner */}
          <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border border-[#D4AF37] shadow-xl">
            <img
              src="/images/card6_venue.webp"
              alt="Mount Kailash Celestial Palace"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3 text-white">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-[#8B1E2B] text-amber-200 text-[10px] font-cinzel font-bold tracking-widest uppercase">
                  Sacred Mandap Sanctum
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FFF5D6] uppercase mt-1">
                  Kailash Golden Vivaha Mandap
                </h3>
                <p className="font-cormorant text-xs sm:text-sm text-amber-100/90 flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F2D06B]" />
                  Mount Kailash, Western Himalayas, Sacred Manasarovar Realm
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCoords}
                  className="px-3 py-1.5 bg-black/60 hover:bg-black/80 backdrop-blur-md border border-[#D4AF37]/50 rounded-full font-cinzel text-[10px] tracking-wider uppercase text-amber-200 flex items-center gap-1 transition-colors"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  {copied ? 'Coordinates Copied!' : '31.0674° N, 81.3119° E'}
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Pilgrimage Route Waypoints */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#2C1810] uppercase tracking-wider flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#8B1E2B]" />
                Interactive Pilgrimage Trail (Yatra Route)
              </h4>
              <span className="text-xs font-cormorant italic text-[#8A5D28]">
                Select a waypoint to view sacred lore
              </span>
            </div>

            {/* Stepper buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {pilgrimageSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStation(step.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    activeStation === step.id
                      ? 'bg-[#8B1E2B] text-amber-100 border-[#D4AF37] shadow-md ring-2 ring-[#D4AF37]/40'
                      : 'bg-[#F5EAD6] text-[#3D2311] border-[#C29B38]/40 hover:bg-[#EFE0C7]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-cinzel font-bold tracking-widest opacity-80 uppercase">
                      Stage {step.id + 1}
                    </span>
                    {activeStation === step.id ? (
                      <Sparkles className="w-3.5 h-3.5 text-[#F2D06B]" />
                    ) : (
                      <MapPin className="w-3 h-3 text-[#8A5D28]" />
                    )}
                  </div>
                  <p className="font-cinzel text-xs font-bold leading-tight uppercase">
                    {step.name}
                  </p>
                  <p className="text-[10px] font-cormorant opacity-80 mt-0.5">
                    {step.elevation}
                  </p>
                </button>
              ))}
            </div>

            {/* Selected Waypoint Detail Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#F2E5CE] border border-[#D4AF37] shadow-inner">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h5 className="font-cinzel text-base font-bold text-[#8B1E2B] uppercase">
                  {pilgrimageSteps[activeStation].title}
                </h5>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF5EB] border border-[#B37E28]/50 font-cinzel text-[10px] font-bold text-[#7A4B11] uppercase tracking-wider">
                  {pilgrimageSteps[activeStation].significance}
                </span>
              </div>
              <p className="font-cormorant text-base text-[#3E2718] leading-relaxed">
                {pilgrimageSteps[activeStation].desc}
              </p>
            </div>
          </div>

          {/* Muhurat & Auspicious Timings Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#F5EAD6] border border-[#D4AF37]/60 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-[#8B1E2B] mb-2">
                <Calendar className="w-4 h-4" />
                <span className="font-cinzel text-xs font-bold tracking-wider uppercase">
                  Auspicious Muhurat
                </span>
              </div>
              <div>
                <p className="font-cinzel text-base font-bold text-[#2C1810]">
                  Godhuli Vela · 6:45 PM
                </p>
                <p className="font-cormorant text-xs text-[#6E4A28] mt-1">
                  Sat, 6 March 2027 • Rohini Nakshatra • Vrishabha Lagna
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-[#D4AF37]/30 text-[11px] font-cinzel text-[#8A5D28]">
                Vivaha Lagna: Dusk to Dawn
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F5EAD6] border border-[#D4AF37]/60 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-[#8B1E2B] mb-2">
                <Sun className="w-4 h-4" />
                <span className="font-cinzel text-xs font-bold tracking-wider uppercase">
                  Celestial Climate
                </span>
              </div>
              <div>
                <p className="font-cinzel text-base font-bold text-[#2C1810]">
                  18°C • Divine Sunlight
                </p>
                <p className="font-cormorant text-xs text-[#6E4A28] mt-1">
                  Fragrant breeze filled with Parijata and sandalwood mist.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDressCodeOpen(true)}
                className="mt-3 pt-2.5 border-t border-[#D4AF37]/40 w-full text-left flex items-center justify-between group/dc transition-colors hover:text-[#8B1E2B] cursor-pointer"
                title="Tap to view full ceremonial dress code guide"
              >
                <div className="flex items-center gap-1.5 text-[11px] font-cinzel text-[#8A5D28] group-hover/dc:text-[#8B1E2B]">
                  <Shirt className="w-3.5 h-3.5 text-[#8B1E2B]" />
                  <span><strong>Dress Code:</strong> Indian Festive</span>
                </div>
                <span className="text-[9px] font-cinzel font-bold text-[#8B1E2B] uppercase tracking-wider bg-white/90 px-2 py-0.5 rounded-full border border-[#D4AF37]/50 shadow-sm group-hover/dc:bg-[#8B1E2B] group-hover/dc:text-white transition-all">
                  Guide →
                </span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-[#F5EAD6] border border-[#D4AF37]/60 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-[#8B1E2B] mb-2">
                <Flower2 className="w-4 h-4" />
                <span className="font-cinzel text-xs font-bold tracking-wider uppercase">
                  Offer Flowers &amp; Bilva
                </span>
              </div>
              <div>
                <p className="font-cinzel text-base font-bold text-[#2C1810]">
                  {flowerOfferings} Offerings Made
                </p>
                <p className="font-cormorant text-xs text-[#6E4A28] mt-1">
                  Offer a holy flower or Bilva leaf at the sanctum doorstep.
                </p>
              </div>
              <button
                onClick={() => setFlowerOfferings((prev) => prev + 1)}
                className="mt-3 w-full py-1.5 bg-[#8B1E2B] hover:bg-[#721521] text-amber-100 rounded-full font-cinzel text-[11px] font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow"
              >
                <DiyaIcon size={16} />
                Offer Flower (पुष्पांजलि)
              </button>
            </div>
          </div>

          {/* Action Bar */}
          <div className="pt-4 border-t border-[#D4AF37]/40 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-2.5 sm:gap-3">
            <button
              onClick={handleDownloadCalendar}
              className="w-full sm:w-auto justify-center px-5 py-3 sm:py-2.5 bg-[#8B1E2B] hover:bg-[#721521] text-amber-100 rounded-full font-cinzel text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#F2D06B]" />
              Add To Calendar (.ics)
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-[#2C1810] hover:bg-[#452718] text-[#FAF5EB] rounded-full font-cinzel text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Close Venue Guide
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Ceremonial Dress Code Guide Modal */}
      <DressCodeModal isOpen={dressCodeOpen} onClose={() => setDressCodeOpen(false)} />
    </div>
  );
};
