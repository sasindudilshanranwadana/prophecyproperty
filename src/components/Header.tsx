import { FunctionComponent } from "react";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-idrealestatecomau-white flex flex-col items-center justify-center py-0 px-5 box-border max-w-full ${className}`}
    >
      <nav className="m-0 w-full flex flex-row items-center justify-between py-4 px-0 box-border max-w-[1126px] gap-5 whitespace-nowrap text-center text-xl text-black font-idrealestatecomau-inter-regular-1575 lg:max-w-full mq1050:flex-wrap">
        <div className="flex flex-col items-start justify-start py-0 pl-2 pr-8 box-border max-w-[250px]">
          <div className="flex flex-row items-start justify-center pt-0 px-[15px] pb-1 box-border max-w-[210px]">
            <a className="[text-decoration:none] relative leading-[24px] font-bold text-[inherit]">
              ProphecyProperty
            </a>
          </div>
        </div>
        <nav className="m-0 bg-idrealestatecomau-white flex flex-col items-start justify-center max-w-full">
          <nav className="m-0 overflow-auto flex flex-row items-start justify-start py-0 pl-0 pr-[79px] text-center text-mini text-idrealestatecomau-ship-gray font-idrealestatecomau-inter-regular-1575 mq450:pr-5 mq450:box-border">
            <div className="rounded-lg flex flex-row items-center justify-start py-3 pl-2 pr-3 box-border min-w-[48px] min-h-[48px]">
              <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit]">
                Buy
              </a>
            </div>
            <div className="rounded-lg flex flex-row items-center justify-start py-3 px-2 box-border min-w-[48px] min-h-[48px] z-[1]">
              <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit]">
                Rent
              </a>
            </div>
            <div className="rounded-lg flex flex-row items-center justify-start py-3 px-2 box-border min-w-[48px] min-h-[48px] text-base-4">
              <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit]">
                Sold
              </a>
            </div>
            <div className="rounded-lg flex flex-row items-center justify-start py-3 px-2 box-border min-w-[48px] min-h-[48px] text-mini-6">
              <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit]">
                Find agents
              </a>
            </div>
            <div className="rounded-lg flex flex-row items-center justify-start py-3 px-2 box-border min-w-[48px] min-h-[48px] text-mini-8">
              <a className="[text-decoration:none] relative leading-[24px] font-medium text-[inherit]">
                News
              </a>
            </div>
          </nav>
        </nav>
        <div className="flex flex-row items-start justify-end py-0 pl-[5px] pr-0 box-border min-w-[171.2px] text-mini-5 text-idrealestatecomau-ship-gray">
          <div className="flex flex-row items-center justify-start py-0 pl-0 pr-2">
            <div className="flex flex-col items-start justify-start">
              <div className="rounded-lg flex flex-row items-center justify-center p-2 box-border min-w-[32px] min-h-[32px]">
                <a className="[text-decoration:none] relative tracking-[0.2px] leading-[24px] font-medium text-[inherit]">
                  Sign in
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-4 pr-0 box-border min-w-[48px] min-h-[32px]">
              <button className="cursor-pointer [border:none] py-2 px-6 bg-wwwrealestatecomau-blue rounded-lg flex flex-col items-center justify-start box-border min-w-[32px] min-h-[32px] hover:bg-mediumblue">
                <a className="[text-decoration:none] relative text-mini-9 tracking-[0.2px] leading-[24px] font-medium font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-white text-center">
                  Join
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
