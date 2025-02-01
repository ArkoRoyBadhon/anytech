const ButtonHeader = ({
  title,
  isTransparent = false,
}: {
  title: string;
  color?: string;
  hoverColor?: string;
  isTransparent?: boolean;
}) => {
  return (
    <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-md max-w-xl">
      <a
        className={`group md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link  flex items-center justify-center space-x-[8px] ${
          isTransparent
            ? `bg-transparent outline outline-1 hover:bg-white hover:text-black hover:outline-none`
            : `bg-[#fe8b53] hover:bg-[#f06b3c] hover:shadow-lg text-white`
        }  font-semibold rounded-[3px] transition-all duration-300 transform  `}
        href="#"
      >
        <span className="">{title}</span>{" "}
        <svg
          className={`group-hover:translate-x-1 transition-transform duration-300 hover:scale-105 fill-white ${isTransparent ? `hover:fill-slate-800` : ``}`}
          width="6"
          height="9"
          viewBox="0 0 6 9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default ButtonHeader;
