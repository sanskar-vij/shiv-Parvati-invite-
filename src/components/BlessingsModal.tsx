import React, { useState } from 'react';
import { X, Heart, Sparkles, Send, CheckCircle2, User, Users, MessageSquare } from 'lucide-react';
import { LotusMotif, OrnamentalDivider, DiyaIcon } from './Decorations';
import confetti from 'canvas-confetti';

export interface Blessing {
  id: string;
  name: string;
  realm: string;
  guests: string;
  message: string;
  timestamp: string;
}

interface BlessingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  blessingsList: Blessing[];
  onAddBlessing: (blessing: Blessing) => void;
}

export const BlessingsModal: React.FC<BlessingsModalProps> = ({
  isOpen,
  onClose,
  blessingsList,
  onAddBlessing,
}) => {
  const [name, setName] = useState('');
  const [realm, setRealm] = useState('Vaikuntha / Celestial Earth');
  const [guests, setGuests] = useState('2');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newBlessing: Blessing = {
      id: Date.now().toString(),
      name: name.trim(),
      realm: realm.trim() || 'Sacred Earth',
      guests,
      message: message.trim(),
      timestamp: 'Just now',
    };

    onAddBlessing(newBlessing);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FF758F', '#8B1E2B', '#FFF275', '#E5383B'],
      });
    } catch {
      // fallback
    }

    setIsSuccess(true);
    setName('');
    setMessage('');
    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
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
            GUESTBOOK &amp; BLESSINGS
          </p>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-wider text-[#2C1810] uppercase mt-1">
            CELESTIAL BLESSINGS BOARD
          </h2>
          <p className="font-cormorant italic text-sm sm:text-base text-[#6E4A28] mt-1">
            Send your heartfelt wishes to Lord Shiva &amp; Goddess Parvati on their eternal wedding
          </p>
          <OrnamentalDivider className="mt-3 max-w-xs" />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Blessing Submission Form */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-[#8B1E2B]">
              <Heart className="w-5 h-5 fill-current" />
              <h3 className="font-cinzel text-base font-bold uppercase tracking-wider text-[#2C1810]">
                Write Your Blessing
              </h3>
            </div>

            {isSuccess && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center gap-3 animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <p className="text-xs font-cinzel">
                  Your divine blessing has been received and enshrined on the sacred altar!
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 bg-[#F4E9D5] p-5 rounded-2xl border border-[#D4AF37]/60 shadow-sm">
              <div>
                <label className="block text-[11px] font-cinzel font-bold text-[#5C3A1E] uppercase tracking-wider mb-1">
                  Your Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A5D28]" />
                  <input
                    type="text"
                    required
                    placeholder="E.g. Devarshi Narada / Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full py-2 pl-9 pr-3 rounded-xl bg-white border border-[#C29B38] text-sm text-[#2C1810] focus:ring-2 focus:ring-[#8B1E2B] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-cinzel font-bold text-[#5C3A1E] uppercase tracking-wider mb-1">
                  City / Sacred Realm
                </label>
                <input
                  type="text"
                  placeholder="E.g. Varanasi, Kailash Valley, Bengaluru"
                  value={realm}
                  onChange={(e) => setRealm(e.target.value)}
                  className="w-full py-2 px-3 rounded-xl bg-white border border-[#C29B38] text-sm text-[#2C1810] focus:ring-2 focus:ring-[#8B1E2B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-cinzel font-bold text-[#5C3A1E] uppercase tracking-wider mb-1">
                  Number of Attendees
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A5D28]" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full py-2 pl-9 pr-3 rounded-xl bg-white border border-[#C29B38] text-sm text-[#2C1810] focus:ring-2 focus:ring-[#8B1E2B] focus:outline-none"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests (Devotee Group)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-cinzel font-bold text-[#5C3A1E] uppercase tracking-wider mb-1">
                  Divine Blessing Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-[#8A5D28]" />
                  <textarea
                    required
                    rows={3}
                    placeholder="Write your prayers, auspicious wishes, or Sanskrit verses for the Divine Couple..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full py-2 pl-9 pr-3 rounded-xl bg-white border border-[#C29B38] text-sm text-[#2C1810] focus:ring-2 focus:ring-[#8B1E2B] focus:outline-none resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-[#7A1521] via-[#8B1E2B] to-[#6E101B] hover:from-[#8E1927] hover:to-[#7E131E] border border-[#D4AF37] text-amber-100 font-cinzel text-xs font-bold tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                Submit Divine Blessing
              </button>
            </form>
          </div>

          {/* Right: Wall of Real-time Celestial Blessings */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8B1E2B]" />
                <h3 className="font-cinzel text-base font-bold uppercase tracking-wider text-[#2C1810]">
                  Blessings from Cosmos ({blessingsList.length})
                </h3>
              </div>
              <span className="text-[11px] font-cinzel text-[#8A5D28]">
                Enshrined Forever
              </span>
            </div>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2">
              {blessingsList.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-[#F8F1E4] border border-[#D4AF37]/50 shadow-sm relative group hover:border-[#8B1E2B] transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#8B1E2B] text-amber-100 flex items-center justify-center font-cinzel font-bold text-xs shadow-sm">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-cinzel text-xs font-bold text-[#2C1810] uppercase">
                          {item.name}
                        </h4>
                        <p className="text-[10px] font-cormorant text-[#7A4B11] italic">
                          {item.realm} • {item.guests} Attending
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-cormorant text-[#8A5D28]">
                      {item.timestamp}
                    </span>
                  </div>

                  <p className="font-cormorant text-sm sm:text-base text-[#3E2718] italic pl-9">
                    « {item.message} »
                  </p>

                  <div className="absolute right-3 bottom-2 opacity-30 group-hover:opacity-100 transition-opacity">
                    <DiyaIcon size={16} />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/30 flex justify-stretch sm:justify-end mt-4">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 sm:py-2 bg-[#2C1810] hover:bg-[#452718] text-[#FAF5EB] rounded-full font-cinzel text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Close Guestbook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
