import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch border-idrealestatecomau-mischka border-t-[0.8px] border-solid box-border flex flex-col items-start justify-start pt-[0.8px] px-0 pb-0 max-w-full ${className}`}
    >
      <div className="self-stretch bg-idrealestatecomau-white flex flex-col items-center justify-center py-0 px-5 box-border max-w-full">
        <div className="w-full flex flex-row items-start justify-between flex-wrap content-start py-3 pl-3 pr-0 box-border max-w-[1126px] gap-5 lg:max-w-full">
          <div className="w-[1126px] flex flex-row items-center justify-center flex-wrap content-center py-[14.8px] px-5 box-border gap-0 max-w-full">
            <div className="flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
              <img
                className="w-6 h-6 relative"
                loading="lazy"
                alt=""
                src="/svg-4.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-4 pr-0">
              <div className="flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative"
                  loading="lazy"
                  alt=""
                  src="/svg-5.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-4 pr-0">
              <div className="flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative"
                  loading="lazy"
                  alt=""
                  src="/svg-6.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-4 pr-0">
              <div className="flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative"
                  loading="lazy"
                  alt=""
                  src="/svg-7.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-4 pr-0">
              <div className="flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative"
                  loading="lazy"
                  alt=""
                  src="/svg-8.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
