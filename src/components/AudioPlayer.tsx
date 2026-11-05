import React, { useState, useEffect, useRef } from 'react';
import { Music } from 'lucide-react';
import weddingSongUrl from '../assets/audio/wedding_song.mp3';

interface AudioPlayerProps {
  startSignal?: number;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ startSignal = 0 }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const autoStarted = useRef(false);
  const wasPlayingBeforeTabChange = useRef(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      wasPlayingBeforeTabChange.current = false;
    } else {
      audio.play().catch((err) => {
        console.warn('Playback blocked or failed:', err);
      });
      wasPlayingBeforeTabChange.current = true;
    }
  };

  // Auto-start wedding song once the invitation is opened
  useEffect(() => {
    if (startSignal > 0 && !autoStarted.current) {
      autoStarted.current = true;
      if (audioRef.current) {
        audioRef.current.volume = 0.6;
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            wasPlayingBeforeTabChange.current = true;
          })
          .catch((err) => {
            console.warn('Auto-play blocked by browser:', err);
          });
      }
    }
  }, [startSignal]);

  // Stop music when website is closed, tab changes, or window is minimized
  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        // Tab changed or browser minimized -> pause audio immediately
        if (!audio.paused) {
          wasPlayingBeforeTabChange.current = true;
          audio.pause();
        }
      } else {
        // Tab active again -> resume only if it was playing prior to tab switch
        if (wasPlayingBeforeTabChange.current) {
          audio
            .play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              // Gracefully handle browser policy
            });
        }
      }
    };

    // When website is closed or refreshed, stop audio immediately
    const handleStopAudio = () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      wasPlayingBeforeTabChange.current = false;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handleStopAudio);
    window.addEventListener('beforeunload', handleStopAudio);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handleStopAudio);
      window.removeEventListener('beforeunload', handleStopAudio);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingSongUrl || '/audio/wedding_song.mp3'}
        preload="auto"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Play/Pause Button with animated Equalizer bars */}
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={isPlaying ? 'Pause divine music' : 'Play divine music'}
        className="group relative flex flex-col items-center active:scale-90 transition-transform cursor-pointer"
      >
        <span className="absolute -inset-1 rounded-full border border-[#D4AF37]/60 animate-slow-ping pointer-events-none" />
        <span className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#8B1E2B] to-[#5A0F1A] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_12px_28px_-8px_rgba(139,30,43,0.65)] group-hover:shadow-[0_14px_32px_-8px_rgba(139,30,43,0.8)]">
          {isPlaying ? (
            <span className="flex items-end gap-[3px] h-5 shrink-0" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="eq-bar w-[3px] rounded-full bg-[#F2D06B]"
                  style={{ height: '100%', animationDelay: `${i * 0.18}s` }}
                />
              ))}
            </span>
          ) : (
            <Music className="w-6 h-6 text-[#F2D06B] group-hover:scale-110 transition-transform" />
          )}
        </span>
      </button>
    </>
  );
};
