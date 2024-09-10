import { FunctionComponent } from "react";

export type SectionType = {
  className?: string;
};

const Section: FunctionComponent<SectionType> = ({ className = "" }) => {
  return (
    <footer
      className={`w-full flex flex-col items-start justify-start pt-4 px-4 pb-0 box-border gap-6 max-w-[1142px] text-center text-mini-6 text-idrealestatecomau-salt-box font-idrealestatecomau-inter-regular-1575 lg:max-w-full ${className}`}
    >
      <div className="self-stretch border-idrealestatecomau-mischka border-b-[0.8px] border-solid box-border flex flex-row items-start justify-start pt-0 px-0 pb-[0.8px] max-w-full">
        <div className="h-12 flex-1 flex flex-row items-start justify-start max-w-full">
          <div className="mt-[-2px] ml-[-2px] flex-1 overflow-auto flex flex-row items-start justify-start pt-0.5 px-0.5 pb-[11px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start relative text-mini-8 text-idrealestatecomau-ship-gray">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-3 px-[98px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="relative leading-[24px] font-medium">
                  Real estate
                </div>
              </div>
              <div className="h-0.5 w-full absolute !m-[0] right-[0px] bottom-[-1px] left-[0px] bg-wwwrealestatecomau-monza z-[1]" />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-3 px-24 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="relative leading-[24px] font-medium">
                  New homes
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-3 px-[90px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="relative leading-[24px] font-medium">
                  Popular areas
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start">
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-3 px-[77px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="relative leading-[24px] font-medium">
                  Popular searches
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-left text-base-6 text-idrealestatecomau-ship-gray">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 relative leading-[24px] inline-block max-w-full">
            Real estate in Australia
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full text-base-8 text-idrealestatecomau-salt-box">
          <div className="w-[896px] flex flex-row items-start justify-between gap-5 max-w-full mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="flex flex-row items-start justify-start">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-nsw/list-1"
                  target="_blank"
                >
                  Real estate NSW
                </a>
              </div>
              <div className="flex flex-row items-start justify-start">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-wa/list-1"
                  target="_blank"
                >
                  Real estate WA
                </a>
              </div>
              <div className="flex flex-row items-start justify-start text-base-5">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-act/list-1"
                  target="_blank"
                >
                  Real estate ACT
                </a>
              </div>
              <div className="flex flex-row items-start justify-start">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-melbourne,+vic+3000/list-1"
                  target="_blank"
                >
                  Real estate Melbourne
                </a>
              </div>
              <div className="flex flex-row items-start justify-start">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-adelaide,+sa+5000/list-1"
                  target="_blank"
                >
                  Real estate Adelaide
                </a>
              </div>
              <div className="flex flex-row items-start justify-start text-base-6">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-darwin+-+greater+region,+nt/list-1"
                  target="_blank"
                >
                  Real estate Darwin
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[15px] gap-2 text-base-6">
              <div className="flex flex-row items-start justify-start">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-vic/list-1"
                  target="_blank"
                >
                  Real estate VIC
                </a>
              </div>
              <div className="flex flex-row items-start justify-start">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-sa/list-1"
                  target="_blank"
                >
                  Real estate SA
                </a>
              </div>
              <div className="flex flex-row items-start justify-start">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-nt/list-1"
                  target="_blank"
                >
                  Real estate NT
                </a>
              </div>
              <div className="flex flex-row items-start justify-start">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-brisbane+city,+qld+4000/list-1"
                  target="_blank"
                >
                  Real estate Brisbane
                </a>
              </div>
              <div className="flex flex-row items-start justify-start">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-hobart,+tas+7000/list-1"
                  target="_blank"
                >
                  Real estate Hobart
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-2 text-base-5">
              <div className="flex flex-row items-start justify-start text-base-9">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-qld/list-1"
                  target="_blank"
                >
                  Real estate QLD
                </a>
              </div>
              <div className="flex flex-row items-start justify-start">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-tas/list-1"
                  target="_blank"
                >
                  Real estate TAS
                </a>
              </div>
              <div className="flex flex-row items-start justify-start text-base-6">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-sydney,+nsw+2000/list-1"
                  target="_blank"
                >
                  Real estate Sydney
                </a>
              </div>
              <div className="flex flex-row items-start justify-start">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-perth,+wa+6000/list-1"
                  target="_blank"
                >
                  Real estate Perth
                </a>
              </div>
              <div className="flex flex-row items-start justify-start text-base-6">
                <a
                  className="relative [text-decoration:underline] leading-[24px] text-[inherit]"
                  href="https://www.realestate.com.au/buy/in-canberra+-+greater+region,+act/list-1"
                  target="_blank"
                >
                  Real estate Canberra
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Section;
