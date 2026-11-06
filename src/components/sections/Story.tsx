import React from 'react';
import { Reveal } from '../Reveal';
import { LotusMotif, OrnamentalDivider } from '../Decorations';

const milestones = [
  {
    step: 'I',
    kicker: 'A Divine Meeting',
    title: 'Devotion in the Kailash Forest',
    text: 'Sent by the sages, the young Parvati first serves the meditating ascetic with bilva leaves and mountain blooms. Service becomes devotion; devotion becomes love.',
    image: '/images/story_meeting.webp',
    verse: 'सा ध्यायति सदा भक्त्या — She meditates upon Him with unwavering devotion.',
  },
  {
    step: 'II',
    kicker: 'A Deeper Bond',
    title: 'Tapasya by Lake Mansarovar',
    text: 'For a thousand years she endures the snows. Disguised sages test her resolve; Mahadev himself arrives, moved at last, and accepts her as Ardhangini — half of his own being.',
    image: '/images/story_lake.webp',
    verse: 'अर्धनारीश्वरः — The Lord whose half is the Goddess.',
  },
  {
    step: 'III',
    kicker: 'A Forever Together',
    title: 'The Cosmic Union',
    text: 'Blessed by Brahma, witnessed by Vishnu and all of creation, Shiva and Shakti are united — consciousness and energy rejoined, and the universe blooms once more.',
    image: '/images/event_pheras.webp',
    verse: 'शिवः शक्त्या युतो यत्र तत्र भति — Where Shiva is united with Shakti, there alone is power.',
  },
];

export const Story: React.FC = () => {
  return (
    <section id="story" className="relative py-14 sm:py-20 lg:py-28 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center">
            <LotusMotif size={26} color="#8B1E2B" />
            <h2 className="mt-2 font-cinzel text-2xl sm:text-4xl font-bold uppercase tracking-[0.16em] text-[#2C1810]">
              Our Story
            </h2>
            <p className="mt-2 font-cormorant italic text-base sm:text-lg text-[#8A5D28]">
              A saga of tapasya, devotion and eternal union
            </p>
            <OrnamentalDivider color="#B8860B" className="mt-4 max-w-xs mx-auto" />
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Central golden rail */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-0 md:-translate-x-1/2 bg-gradient-to-b from-transparent via-[#B8860B]/60 to-transparent" />

          <div className="space-y-12 md:space-y-20">
            {milestones.map((item, idx) => {
              const flip = idx % 2 === 1;
              return (
                <div
                  key={item.step}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center pl-14 md:pl-0"
                >
                  {/* Node */}
                  <span className="absolute left-5 md:left-1/2 top-4 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white border-2 border-[#B8860B] text-[#8B1E2B] font-cinzel text-xs font-bold shadow-[0_4px_16px_rgba(180,134,11,0.3)]">
                    {item.step}
                  </span>

                  {/* Image */}
                  <Reveal direction={flip ? 'right' : 'left'} className={flip ? 'md:order-2' : ''}>
                    <figure className="group relative rounded-2xl overflow-hidden border border-[#D4AF37]/60 vintage-shadow-lg bg-white">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-56 sm:h-72 object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0604]/70 via-transparent to-transparent" />
                      <figcaption className="absolute bottom-3 left-4 right-4 font-cinzel text-[10px] uppercase tracking-[0.22em] text-[#F2D06B]">
                        {item.kicker}
                      </figcaption>
                    </figure>
                  </Reveal>

                  {/* Copy */}
                  <Reveal delay={100} className={flip ? 'md:order-1 md:text-right' : ''}>
                    <div>
                      <h3 className="font-cinzel text-lg sm:text-2xl font-bold uppercase tracking-[0.1em] text-[#2C1810]">
                        {item.title}
                      </h3>
                      <div className={`mt-3 h-[1px] w-20 hairline-gold ${flip ? 'md:ml-auto' : ''}`} />
                      <p className="mt-4 font-cormorant text-base sm:text-lg text-[#5C3A1E] leading-relaxed">
                        {item.text}
                      </p>
                      <p className="mt-3 font-cormorant italic text-sm text-[#8A5D28]">
                        {item.verse}
                      </p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
