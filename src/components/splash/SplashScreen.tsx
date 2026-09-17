import { useEffect, useState } from 'react';
import splashImage from '@/assets/file_00000000408082108acd37b24b49d03a.png';

interface SplashScreenProps {
  onComplete: () => void;
}

const DISPLAY_DURATION = 2200;
const TRANSITION_DURATION = 450;

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    mediaQuery.addEventListener('change', handleMotionPreferenceChange);

    const exitTimer = window.setTimeout(() => {
      if (mediaQuery.matches) {
        onComplete();
        return;
      }
      setIsExiting(true);
    }, DISPLAY_DURATION);

    return () => {
      window.clearTimeout(exitTimer);
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, [onComplete]);

  useEffect(() => {
    if (!isExiting || reducedMotion) return;

    const completeTimer = window.setTimeout(onComplete, TRANSITION_DURATION);
    return () => window.clearTimeout(completeTimer);
  }, [isExiting, onComplete, reducedMotion]);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] overflow-hidden bg-[#180000] ${
        isExiting ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      style={{
        transform: isExiting ? 'scale(1.025)' : 'scale(1)',
        transition: reducedMotion ? 'none' : `opacity ${TRANSITION_DURATION}ms ease-out, transform ${TRANSITION_DURATION}ms ease-out`,
      }}
    >
      <img
        src={splashImage}
        alt=""
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}
