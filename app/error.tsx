'use client';

import FuzzyText from '@/components/ui/FuzzyText';
import { RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import posthog from 'posthog-js';

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const controls = useAnimation();
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    posthog.captureException(error);
    console.error(error);
  }, [error]);

  const handleClick = async () => {
    if (isSpinning) return;
    setIsSpinning(true);

    // run the spin and wait until it finishes
    await controls.start({
      rotate: 360,
      transition: { duration: 0.6, ease: 'easeInOut' },
    });

    // reset rotation immediately so next click can spin again
    controls.set({ rotate: 0 });

    // now call reset (component may unmount here)
    reset();
    setIsSpinning(false);
  };

  return (
    <div className="h-screen flex flex-col gap-2 justify-center items-center overflow-hidden">
      <FuzzyText fontSize={'clamp(2rem, 6vw, 6rem)'} baseIntensity={0.1}>
        Something went
      </FuzzyText>
      <FuzzyText fontSize={'clamp(2rem, 6vw, 6rem)'} baseIntensity={0.1}>
        wrong!
      </FuzzyText>

      <button
        onClick={handleClick}
        disabled={isSpinning}
        className="flex gap-1 text-xl justify-center items-center bg-red-500 p-2 rounded-full cursor-pointer disabled:opacity-60 mt-5">
        Try again
        <motion.span
          // attach controls so we can await .start()
          animate={controls}
          initial={{ rotate: 0 }}
          // ensure the span rotates around its center
          className="inline-block origin-center ml-1"
          style={{ display: 'inline-block' }}>
          <RefreshCw />
        </motion.span>
      </button>
    </div>
  );
};

export default Error;
