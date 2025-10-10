import WaveLoader from '@/components/ui/WaveLoader';

const Loading = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <WaveLoader className="w-2 h-8" />
    </div>
  );
};

export default Loading;
