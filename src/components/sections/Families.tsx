import React from 'react';
import { Reveal } from '../Reveal';
import { LotusMotif, OrnamentalDivider } from '../Decorations';
import { Crown, Mountain, Sparkles } from 'lucide-react';

const side = {
  groom: {
    label: 'The Groom',
    name: 'Lord Shiva',
    epithet: 'Mahadev · Neelkantha · Chandrashekhara',
    parents: 'Son of the Cosmos',
    detail: 'The eternal ascetic of Mount Kailash, worshipped as the Supreme Consciousness.',
    kin: ['Lord Ganesha', 'Lord Kartikeya', 'Nandi & the Ganas'],
    icon: Mountain,
  },
  bride: {
    label: 'The Bride',
    name: 'Goddess Parvati',
    epithet: 'Gauri · Uma · Shakti',
    parents: 'King Himavat & Queen Mena',
    detail: 'Daughter of the Himalayas, the very embodiment of devotion and divine energy.',
    kin: ['Devi Lakshmi', 'Devi Saraswati', 'The Apsaras of Swarga'],
    icon: Crown,
  },
};

export const Families: React.FC = () => {
  return (
    <section id="families" className="relative py-14 sm:py-20 lg:py-28 bg-white">
      {/* Soft band artwork */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/card2_families.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="text-center">
            <LotusMotif size={26} color="#8B1E2B" />
            <h2 className="mt-2 font-cinzel text-2xl sm:text-4xl font-bold uppercase tracking-[0.16em] text-[#2C1810]">
              Our Families
            </h2>
            <p className="mt-2 font-cormorant italic text-base sm:text-lg text-[#8A5D28]">
              With blessings and love
            </p>
            <OrnamentalDivider color="#B8860B" className="mt-4 max-w-xs mx-auto" />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
          {(['groom', 'bride'] as const).map((key, idx) => {
            const person = side[key];
            const Icon = person.icon;
            return (
              <Reveal key={key} delay={idx * 140} direction={idx === 0 ? 'left' : 'right'}>
                <article className="group relative h-full rounded-2xl border border-[#D4AF37]/60 bg-white p-6 sm:p-8 vintage-shadow transition-all duration-500 hover:border-[#B8860B] hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2B]/10 border border-[#8B1E2B]/40 font-cinzel text-[9px] font-bold uppercase tracking-[0.22em] text-[#8B1E2B]">
                        <Icon className="w-3 h-3" />
                        {person.label}
                      </span>
                      <h3 className="mt-3 font-cinzel text-xl sm:text-2xl font-bold uppercase tracking-[0.1em] text-[#2C1810]">
                        {person.name}
                      </h3>
                      <p className="font-cormorant italic text-sm text-[#8A5D28]">{person.epithet}</p>
                    </div>
                    <LotusMotif size={30} color="#B8860B" className="shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="mt-5 hairline-gold h-[1px]" />

                  <p className="mt-4 font-cinzel text-[10px] uppercase tracking-[0.24em] text-[#8B1E2B] font-bold">
                    {person.parents}
                  </p>
                  <p className="mt-2 font-cormorant text-base text-[#5C3A1E] leading-relaxed">
                    {person.detail}
                  </p>

                  <ul className="mt-5 space-y-1.5">
                    {person.kin.map((member) => (
                      <li key={member} className="flex items-center gap-2 font-cormorant text-sm text-[#6E4A28]">
                        <Sparkles className="w-3 h-3 text-[#B8860B] shrink-0" />
                        {member}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 text-center max-w-2xl mx-auto rounded-2xl border border-[#D4AF37]/50 bg-[#FDF8EE] px-6 py-6 vintage-shadow">
            <p className="font-cormorant text-base sm:text-lg italic text-[#5C3A1E] leading-relaxed">
              “Together with Lord Brahma &amp; Devi Saraswati, Lord Vishnu &amp; Devi Lakshmi,
              the Sapta Rishis, Narada Muni and all the celestial hosts — we stand as one
              family to bless this divine union.”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
