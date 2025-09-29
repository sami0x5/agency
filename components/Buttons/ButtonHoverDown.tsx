import Link from 'next/link';

const ButtonHoverDown = ({
  text = 'Contact Us',
  url,
}: {
  text?: string;
  url: string;
}) => {
  return (
    <>
      <Link
        href={url}
        className="group cursor-pointer relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md  bg-gradient-to-r dark:from-[#026247] dark:to-[#00ac7e] from-[#f6f7ff] to-[#f5f6ff] dark:border-[#00d99f] border-2 border-[#00d99f]  bg-transparent px-6 font-medium dark:text-white text-black transition-all duration-100 [box-shadow:5px_5px_#00a579] dark:[box-shadow:5px_5px_#00d99f] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(38_51_129)] dark:hover:[box-shadow:0px_0px_rgb(76_100_255)]">
        {text}
      </Link>
    </>
  );
};

export default ButtonHoverDown;
