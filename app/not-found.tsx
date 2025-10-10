import FuzzyText from '@/components/ui/FuzzyText';

const NotFound = () => {
  return (
    <div className="h-screen  overflow-clip flex flex-col gap-4 justify-center items-center">
      <FuzzyText baseIntensity={0.1}>404</FuzzyText>
      <FuzzyText fontSize={'clamp(2rem, 4vw, 4rem)'} baseIntensity={0.1}>
        Page not found
      </FuzzyText>
    </div>
  );
};

export default NotFound;
