import React, { useState } from 'react';
import { Reveal } from '../Reveal';
import { LotusMotif, OrnamentalDivider, DiyaIcon } from '../Decorations';
import type { Blessing } from '../BlessingsModal';
import { User, Users, MapPin, MessageSquare, CheckCircle2, BookHeart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RsvpProps {
  blessingsList: Blessing[];
  onAddBlessing: (blessing: Blessing) => void;
  onOpenGuestbook: () => void;
}

export const Rsvp: React.FC<RsvpProps> = ({ blessingsList, onAddBlessing, onOpenGuestbook }) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [guests, setGuests] = useState('2');
  const [message, setMessage] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    onAddBlessing({
      id: Date.now().toString(),
      name: name.trim(),
      realm: city.trim() || 'Sacred Earth',
      guests,
      message: message.trim(),
      timestamp: 'Just now',
    });

    try {
      confetti({
        particleCount: 110,
        spread: 85,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#FF758F', '#8B1E2B', '#FFF275', '#E5383B'],
      });
    } catch {
      /* no-op */
    }

    setDone(true);
    setName('');
    setCity('');
    setMessage('');
    window.setTimeout(() => setDone(false), 5000);
  };

  const inputBase =
    'w-full py-2.5 pl-10 pr-3.5 rounded-xl bg-[#FAF5EB] border border-[#C29B38] text-sm text-[#2C1810] placeholder-[#8A5D28]/70 focus:outline-none focus:ring-2 focus:ring-[#8B1E2B] focus:border-[#8B1E2B] transition';

  return (
    <section id="rsvp" className="relative py-14 sm:py-20 lg:py-28 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center">
            <LotusMotif size={26} color="#8B1E2B" />
            <h2 className="mt-2 font-cinzel text-2xl sm:text-4xl font-bold uppercase tracking-[0.16em] text-[#2C1810]">
              Join Our Celebration
            </h2>
            <p className="mt-2 font-cormorant italic text-base sm:text-lg text-[#8A5D28]">
              Send your blessings and confirm your presence
            </p>
            <OrnamentalDivider color="#B8860B" className="mt-4 max-w-xs mx-auto" />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form */}
          <Reveal direction="left" className="lg:col-span-6">
            <div className="relative rounded-2xl card-parchment border border-[#D4AF37]/70 p-6 sm:p-8 vintage-shadow-lg">
              <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#B37E28]" />
              <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#B37E28]" />

              <h3 className="font-cinzel text-base font-bold uppercase tracking-[0.18em] text-[#2C1810]">
                Blessing &amp; RSVP
              </h3>
              <p className="mt-1 font-cormorant text-sm text-[#6E4A28] italic">
                Your prayers are the most treasured gift.
              </p>

              {done ? (
                <div className="mt-6 rounded-xl bg-[#8B1E2B]/10 border border-[#8B1E2B]/30 p-6 text-center animate-fade-up">
                  <CheckCircle2 className="w-9 h-9 mx-auto text-[#8B1E2B]" />
                  <p className="mt-3 font-cinzel text-sm font-bold uppercase tracking-[0.16em] text-[#8B1E2B]">
                    Blessings Received
                  </p>
                  <p className="mt-1 font-cormorant text-base text-[#4A2E16] italic">
                    May Mahadev and Devi Maa bless your home with joy.
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <DiyaIcon size={20} />
                    <LotusMotif size={20} color="#8B1E2B" />
                    <DiyaIcon size={20} />
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A5D28]" />
                    <input
                      type="text"
                      required
                      placeholder="YOUR NAME"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`${inputBase} font-cinzel uppercase tracking-[0.14em] text-[11px]`}
                    />
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A5D28]" />
                    <input
                      type="text"
                      placeholder="CITY / REALM"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={`${inputBase} font-cinzel uppercase tracking-[0.14em] text-[11px]`}
                    />
                  </div>

                  <div className="relative">
                    <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A5D28]" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className={`${inputBase} font-cinzel uppercase tracking-[0.14em] text-[11px] appearance-none cursor-pointer`}
                    >
                      <option value="1">1 GUEST</option>
                      <option value="2">2 GUESTS</option>
                      <option value="3">3 GUESTS</option>
                      <option value="4">4 GUESTS</option>
                      <option value="5+">5+ GUESTS (FAMILY)</option>
                    </select>
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#8A5D28]" />
                    <textarea
                      required
                      rows={3}
                      placeholder="Write your blessing for the divine couple…"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`${inputBase} resize-none font-cormorant text-base`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-[#7A1521] via-[#8B1E2B] to-[#6E101B] hover:from-[#8E1927] hover:to-[#7E131E] border border-[#D4AF37] text-[#FFF0C4] font-cinzel text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    Send Blessings
                    <LotusMotif size={14} color="#F2D06B" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Blessings wall */}
          <Reveal direction="right" delay={120} className="lg:col-span-6">
            <div className="h-full rounded-2xl border border-[#D4AF37]/60 bg-white p-6 sm:p-8 vintage-shadow flex flex-col">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-cinzel text-sm font-bold uppercase tracking-[0.2em] text-[#8B1E2B]">
                  Blessings Wall
                </h3>
                <button
                  onClick={onOpenGuestbook}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FDF6E9] hover:bg-[#F7ECD6] border border-[#D4AF37]/50 text-[#5C3A1E] font-cinzel text-[9px] font-bold uppercase tracking-[0.18em] transition-colors shadow-sm"
                >
                  <BookHeart className="w-3.5 h-3.5 text-[#8B1E2B]" />
                  View All ({blessingsList.length})
                </button>
              </div>

              <div className="mt-5 space-y-3 flex-1 max-h-[420px] overflow-y-auto pr-1.5">
                {blessingsList.slice(0, 6).map((item) => (
                  <article
                    key={item.id}
                    className="group rounded-xl border border-[#D4AF37]/40 bg-[#FDF8EE] p-4 hover:border-[#8B1E2B]/50 transition-colors"
                  >
                    <header className="flex items-center gap-2.5">
                      <span className="w-8 h-8 shrink-0 rounded-full bg-gradient-to-br from-[#8B1E2B] to-[#5A0F1A] border border-[#D4AF37]/60 flex items-center justify-center font-cinzel text-xs font-bold text-[#F2D06B]">
                        {item.name.charAt(0)}
                      </span>
                      <div className="min-w-0">
                        <h4 className="font-cinzel text-[11px] font-bold uppercase tracking-[0.14em] text-[#2C1810] truncate">
                          {item.name}
                        </h4>
                        <p className="font-cormorant text-[11px] text-[#8A5D28] italic truncate">
                          {item.realm} · {item.guests} attending
                        </p>
                      </div>
                      <span className="ml-auto font-cormorant text-[10px] text-[#8A5D28]/60 shrink-0">
                        {item.timestamp}
                      </span>
                    </header>
                    <p className="mt-2.5 font-cormorant text-sm sm:text-base italic text-[#4A2E16] leading-relaxed">
                      “{item.message}”
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-[#D4AF37]/40 flex items-center justify-center gap-3">
                <DiyaIcon size={20} />
                <p className="font-cinzel text-[9px] uppercase tracking-[0.26em] text-[#8A5D28]">
                  {blessingsList.length} blessings enshrined
                </p>
                <DiyaIcon size={20} />
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
