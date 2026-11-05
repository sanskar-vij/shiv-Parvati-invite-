import React from 'react';
import { Reveal } from '../Reveal';
import { LotusMotif, OrnamentalDivider } from '../Decorations';
import { MapPin, Navigation, CalendarPlus, Compass, Mountain, ThermometerSun } from 'lucide-react';

interface VenueProps {
  onOpenVenue: () => void;
  onDownloadCalendar: () => void;
}

const facts = [
  { icon: Mountain, label: 'Sanctum', value: 'Kailash Golden Mandap' },
  { icon: Compass, label: 'Coordinates', value: '31.0674° N, 81.3119° E' },
  { icon: Navigation, label: 'Nearest Yatra Base', value: 'Lake Mansarovar (4,590 m)' },
  { icon: ThermometerSun, label: 'Climate', value: '18°C · Fragrant Himalayan breeze' },
];

export const Venue: React.FC<VenueProps> = ({ onOpenVenue, onDownloadCalendar }) => {
  return (
    <section id="venue" className="relative py-14 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="text-center">
            <LotusMotif size={26} color="#8B1E2B" />
            <h2 className="mt-2 font-cinzel text-2xl sm:text-4xl font-bold uppercase tracking-[0.16em] text-[#2C1810]">
              The Wedding Venue
            </h2>
            <p className="mt-2 font-cormorant italic text-base sm:text-lg text-[#8A5D28]">
              Where heaven and earth unite in golden light
            </p>
            <OrnamentalDivider color="#B8860B" className="mt-4 max-w-xs mx-auto" />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Artwork */}
          <Reveal direction="left" className="lg:col-span-7 h-full">
            <figure className="group relative h-full min-h-[320px] rounded-2xl overflow-hidden border border-[#D4AF37]/60 vintage-shadow-lg bg-white">
              <img
                src="/images/card6_venue.jpg"
                alt="The golden celestial palace mandap on Mount Kailash"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0604]/90 via-[#0B0604]/20 to-transparent" />
              <figcaption className="absolute bottom-5 left-5 right-5">
                <span className="inline-block px-3 py-1 rounded-full bg-[#8B1E2B] border border-[#D4AF37]/70 font-cinzel text-[9px] font-bold uppercase tracking-[0.22em] text-[#F2D06B]">
                  Sacred Sanctum
                </span>
                <h3 className="mt-2 font-cinzel text-xl sm:text-2xl font-bold uppercase tracking-[0.1em] text-[#FFF5D6]">
                  Kailash Golden Vivaha Mandap
                </h3>
                <p className="mt-1 font-cormorant text-sm text-amber-100/85 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F2D06B]" />
                  Mount Kailash · Western Himalayas
                </p>
              </figcaption>
            </figure>
          </Reveal>

          {/* Facts */}
          <Reveal direction="right" delay={120} className="lg:col-span-5 h-full">
            <div className="h-full rounded-2xl border border-[#D4AF37]/60 bg-white p-6 sm:p-8 vintage-shadow flex flex-col">
              <h3 className="font-cinzel text-sm font-bold uppercase tracking-[0.24em] text-[#8B1E2B]">
                Pilgrim Information
              </h3>
              <div className="mt-5 space-y-4 flex-1">
                {facts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.label} className="flex items-start gap-3">
                      <span className="mt-0.5 w-8 h-8 shrink-0 rounded-full bg-[#8B1E2B]/10 border border-[#D4AF37]/50 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-[#8B1E2B]" />
                      </span>
                      <div>
                        <p className="font-cinzel text-[9px] uppercase tracking-[0.24em] text-[#8A5D28]">
                          {fact.label}
                        </p>
                        <p className="font-cormorant text-base text-[#2C1810]">{fact.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-5 border-t border-[#D4AF37]/40 flex flex-col gap-2.5">
                <button
                  onClick={onOpenVenue}
                  className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#8B1E2B] to-[#6E101B] hover:from-[#9C2232] hover:to-[#7E1523] border border-[#8B1E2B] text-white font-cinzel text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#F2D06B]" />
                  Interactive Yatra Map
                </button>
                <button
                  onClick={onDownloadCalendar}
                  className="w-full py-2.5 rounded-full bg-white hover:bg-[#FDF6E9] border border-[#D4AF37]/60 text-[#5C3A1E] font-cinzel text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <CalendarPlus className="w-3.5 h-3.5 text-[#8B1E2B]" />
                  Add Muhurat to Calendar
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
