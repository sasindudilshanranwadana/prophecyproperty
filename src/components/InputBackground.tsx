import { FunctionComponent } from "react";
import Container from "./Container";

export type InputBackgroundType = {
  className?: string;
};

const InputBackground: FunctionComponent<InputBackgroundType> = ({
  className = "",
}) => {
  return (
    <form
      className={`m-0 flex-1 flex flex-col items-start justify-start gap-[23.5px] max-w-full ${className}`}
    >
      <div className="self-stretch rounded-lg bg-idrealestatecomau-white flex flex-row items-start justify-start flex-wrap content-start max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <img
            className="[border:none] [outline:none] bg-[transparent] h-12 flex-1 relative rounded-lg max-w-full overflow-hidden object-cover min-w-[242px]"
            type="text"
            alt=""
            src="/input@2x.png"
          />
          <div className="h-0.5 w-3 absolute !m-[0] top-[calc(50%_-_1px)] left-[36px] bg-idrealestatecomau-white overflow-hidden shrink-0 z-[1]" />
          <div className="!m-[0] absolute top-[calc(50%_-_13px)] left-[36px] bg-idrealestatecomau-white overflow-hidden flex flex-row items-start justify-start py-px px-1.5 box-border max-w-[331.6px] whitespace-nowrap z-[2]">
            <div className="relative text-base-8 leading-[24px] font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-salt-box text-left">
              First Name
            </div>
          </div>
          <img
            className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] left-[12px] z-[1]"
            loading="lazy"
            alt=""
            src="/image.svg"
          />
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-idrealestatecomau-white flex flex-row items-start justify-start flex-wrap content-start max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <img
            className="[border:none] [outline:none] bg-[transparent] h-12 flex-1 relative rounded-lg max-w-full overflow-hidden object-cover min-w-[242px]"
            type="text"
            alt=""
            src="/input@2x.png"
          />
          <div className="h-0.5 w-3 absolute !m-[0] top-[calc(50%_-_1px)] left-[36px] bg-idrealestatecomau-white overflow-hidden shrink-0 z-[1]" />
          <div className="!m-[0] absolute top-[calc(50%_-_13px)] left-[36px] bg-idrealestatecomau-white overflow-hidden flex flex-row items-start justify-start py-px px-1.5 box-border max-w-[331.6px] whitespace-nowrap z-[2]">
            <div className="relative text-base-8 leading-[24px] font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-salt-box text-left">
              Last Name
            </div>
          </div>
          <img
            className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] left-[12px] z-[1]"
            loading="lazy"
            alt=""
            src="/image.svg"
          />
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-idrealestatecomau-white flex flex-row items-start justify-start flex-wrap content-start max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <img
            className="[border:none] [outline:none] bg-[transparent] h-12 flex-1 relative rounded-lg max-w-full overflow-hidden object-cover min-w-[242px]"
            type="text"
            alt=""
            src="/input@2x.png"
          />
          <div className="h-0.5 w-3 absolute !m-[0] top-[calc(50%_-_1px)] left-[36px] bg-idrealestatecomau-white overflow-hidden shrink-0 z-[1]" />
          <div className="!m-[0] absolute top-[calc(50%_-_13px)] left-[36px] bg-idrealestatecomau-white overflow-hidden flex flex-row items-start justify-start py-px px-1.5 box-border max-w-[331.6px] whitespace-nowrap z-[2]">
            <div className="relative text-base-8 leading-[24px] font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-salt-box text-left">
              Email address
            </div>
          </div>
          <img
            className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] left-[12px] z-[1]"
            loading="lazy"
            alt=""
            src="/image.svg"
          />
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-idrealestatecomau-white flex flex-row items-start justify-start flex-wrap content-start max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <img
            className="[border:none] [outline:none] bg-[transparent] h-12 flex-1 relative rounded-lg max-w-full overflow-hidden object-cover min-w-[242px]"
            type="text"
            alt=""
            src="/input@2x.png"
          />
          <div className="h-0.5 w-3 absolute !m-[0] top-[calc(50%_-_1px)] left-[36px] bg-idrealestatecomau-white overflow-hidden shrink-0 z-[1]" />
          <div className="!m-[0] absolute top-[calc(50%_-_13px)] left-[36px] bg-idrealestatecomau-white overflow-hidden flex flex-row items-start justify-start py-px px-1.5 box-border max-w-[331.6px] z-[2]">
            <div className="relative text-base-8 leading-[24px] font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-salt-box text-left">
              Password
            </div>
          </div>
          <img
            className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] left-[12px] z-[1]"
            loading="lazy"
            alt=""
            src="/image.svg"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-5 bg-colors-blue self-stretch rounded-lg flex flex-row items-start justify-center box-border min-h-[48px] hover:bg-cornflowerblue">
        <div className="relative text-base-9 leading-[24px] font-medium font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-white text-center">
          Continue
        </div>
      </button>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[72px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start pt-[1.6px] px-0 pb-0">
            <div className="relative text-base leading-[24px] font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-ship-gray text-center whitespace-nowrap">
              Already have an account? 
            </div>
          </div>
          <div className="rounded-lg flex flex-row items-start justify-start py-[1.6px] px-1">
            <a
              className="relative text-base-8 leading-[24px] font-semibold font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-bahama-blue text-center [text-decoration:none] whitespace-nowrap"
              href="https://id.realestate.com.au/u/login/identifier"
              target="_blank"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[17.8px]">
        <div className="h-[11.2px] flex-1 relative border-idrealestatecomau-mischka border-b-[0.8px] border-solid box-border min-w-[112px]" />
        <div className="relative text-base leading-[24px] uppercase font-semibold font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-ship-gray text-center">
          Or
        </div>
        <div className="h-[11.2px] flex-1 relative border-idrealestatecomau-mischka border-b-[0.8px] border-solid box-border min-w-[112px]" />
      </div>
      <Container image="/image-4@2x.png" />
    </form>
  );
};

export default InputBackground;
