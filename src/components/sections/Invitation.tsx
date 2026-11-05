import React from 'react';
import { Reveal } from '../Reveal';
import { LotusMotif, OrnamentalDivider, DiyaIcon, TempleBellIcon } from '../Decorations';
import { CountdownTimer } from '../CountdownTimer';

export const Invitation: React.FC = () => {
  return (
    <section id="invitation" className="relative py-14 sm:py-20 lg:py-28 px-5">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center">
            <p className="font-cormorant text-lg text-[#8A5D28] tracking-[0.2em]">॥ शुभ विवाह ॥</p>
            <h2 className="mt-2 font-cinzel text-2xl sm:text-4xl font-bold uppercase tracking-[0.16em] text-[#2C1810]">
              The Invitation
            </h2>
            <OrnamentalDivider color="#B8860B" className="mt-4 max-w-xs mx-auto" />
          </div>
        </Reveal>

        {/* Parchment letter */}
        <Reveal delay={120} direction="scale">
          <article className="relative mt-10 card-parchment rounded-2xl p-6 sm:p-12 vintage-shadow-lg border border-[#D4AF37]/70">
            {/* Corner knots */}
            <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#B37E28]" />
            <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#B37E28]" />
            <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#B37E28]" />
            <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#B37E28]" />

            <div className="flex items-center justify-center gap-3 text-[#8A5D28]">
              <TempleBellIcon size={20} />
              <LotusMotif size={26} color="#8A5D28" />
              <TempleBellIcon size={20} />
            </div>

            <p className="mt-5 font-cormorant text-lg sm:text-xl text-[#4A2E16] text-center leading-relaxed">
              With the grace of the Almighty Cosmos and the blessings of our revered
              elders, we joyfully invite you and your family to grace the sacred
              occasion of the celestial wedding of
            </p>

            <h3 className="mt-5 text-center font-cinzel text-xl sm:text-3xl font-bold uppercase tracking-[0.14em] gold-text-dark">
              Shiv &amp; Parvati
            </h3>

            <p className="mt-2 text-center font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8A5D28]">
              The Divine Wedding
            </p>

            <OrnamentalDivider color="#B37E28" className="my-6 max-w-sm mx-auto" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-cinzel text-[10px] uppercase tracking-[0.26em] text-[#8B1E2B] font-bold">
                  Muhurat
                </p>
                <p className="mt-1.5 font-cormorant text-lg text-[#2C1810] font-semibold">
                  Godhuli Vela · 6:45 PM
                </p>
                <p className="font-cormorant text-sm text-[#6E4A28] italic">
                  Rohini Nakshatra · Vrishabha Lagna
                </p>
              </div>
              <div className="sm:border-x border-[#D4AF37]/40 sm:px-4">
                <p className="font-cinzel text-[10px] uppercase tracking-[0.26em] text-[#8B1E2B] font-bold">
                  Date
                </p>
                <p className="mt-1.5 font-cormorant text-lg text-[#2C1810] font-semibold">
                  Saturday, 6 March 2027
                </p>
                <p className="font-cormorant text-sm text-[#6E4A28] italic">
                  Phalguna · Shukla Paksha
                </p>
              </div>
              <div>
                <p className="font-cinzel text-[10px] uppercase tracking-[0.26em] text-[#8B1E2B] font-bold">
                  Venue
                </p>
                <p className="mt-1.5 font-cormorant text-lg text-[#2C1810] font-semibold">
                  Kailash Golden Mandap
                </p>
                <p className="font-cormorant text-sm text-[#6E4A28] italic">
                  Mount Kailash · Himalayas
                </p>
              </div>
            </div>

            {/* Shloka */}
            <div className="mt-8 rounded-xl bg-[#F2E5CE] border-l-4 border-[#8B1E2B] px-5 py-4 text-center shadow-inner">
              <p className="font-cormorant text-base sm:text-lg font-bold italic text-[#3D2311] leading-relaxed">
                « वागर्थाविव सम्पृक्तौ वागर्थप्रतिपत्तये ।<br className="hidden sm:inline" />
                जगतः पितरौ वन्दे पार्वतीपरमेश्वरौ ॥ »
              </p>
              <p className="mt-2 font-cormorant text-sm text-[#6E4A28]">
                I bow to Parvati and Parameshwara — inseparable as word and meaning,
                the beloved parents of the universe.
              </p>
            </div>

            <div className="mt-7 flex items-center justify-center gap-3">
              <DiyaIcon size={22} />
              <p className="font-cinzel text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#7A4B11]">
                Your presence is our blessing
              </p>
              <DiyaIcon size={22} />
            </div>
          </article>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex justify-center">
            <CountdownTimer variant="light" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
