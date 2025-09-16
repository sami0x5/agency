import React from 'react';

const SectionHeader = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2 className={`flex justify-center items-center ${className}`}>
      <span className="inline-flex justify-center items-center bg-black px-2 py-1 rounded-full border border-white/20 gap-1">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={20}
            height={20}
            x="0"
            y="0"
            viewBox="0 0 100 100"
            xmlSpace="preserve"
            className="">
            <g>
              <g fill="#ffc100">
                <path
                  d="M50 97.5C46.122 73.289 29.638 54.215 8.86 50.008 29.637 45.8 46.121 26.72 50 2.5c3.878 24.22 20.362 43.3 41.14 47.508C70.363 54.215 53.879 73.288 50 97.5zM82.152 29.976c-.99-6.182-5.2-11.052-10.505-12.126 5.306-1.075 9.515-5.947 10.505-12.131.99 6.184 5.2 11.056 10.505 12.13-5.305 1.075-9.515 5.945-10.505 12.127zM17.848 94.281c-.99-6.182-5.2-11.053-10.505-12.127 5.305-1.074 9.515-5.946 10.505-12.13.99 6.184 5.2 11.056 10.505 12.13-5.306 1.074-9.515 5.945-10.505 12.127z"
                  fill="#ffc100"
                  opacity="1"
                />
              </g>
            </g>
          </svg>
        </span>
        {title}
      </span>
    </h2>
  );
};

export default SectionHeader;
