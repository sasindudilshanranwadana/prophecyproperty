import { FunctionComponent } from "react";
import Container from "./Container";

export type FormBackgroundType = {
  className?: string;
};

const FormBackground: FunctionComponent<FormBackgroundType> = ({
  className = "",
}) => {
  return (
    <form
      className={`m-0 flex-1 flex flex-col items-start justify-start gap-[23.6px] max-w-full ${className}`}
    >
      <div className="self-stretch h-12 rounded-lg bg-idrealestatecomau-white border-idrealestatecomau-mountain-mist border-[1px] border-solid box-border flex flex-row items-start justify-start flex-wrap content-start relative max-w-full">
        <div className="self-stretch w-[404px] relative rounded-lg bg-idrealestatecomau-white border-idrealestatecomau-mountain-mist border-[1px] border-solid box-border overflow-hidden shrink-0 hidden max-w-full z-[0]" />
        <div className="w-[116px] !m-[0] absolute top-[11px] left-[36px] flex flex-row items-start justify-start">
          <div className="h-0.5 w-3 absolute !m-[0] top-[calc(50%_-_1px)] left-[0px] bg-idrealestatecomau-white overflow-hidden shrink-0 z-[1]" />
          <input
            className="w-[calc(100%_-_20px)] [border:none] [outline:none] bg-idrealestatecomau-white h-[26px] flex-1 overflow-hidden flex flex-col items-start justify-start py-px px-1.5 box-border font-idrealestatecomau-inter-regular-1575 text-base-8 text-idrealestatecomau-salt-box min-w-[70px] max-w-[331.6px] z-[2]"
            placeholder="Email address"
            type="text"
          />
        </div>
        <img
          className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] left-[12px] z-[1]"
          alt=""
          src="/image.svg"
        />
      </div>
      <div className="self-stretch rounded-lg bg-idrealestatecomau-white flex flex-row items-start justify-start relative max-w-full">
        <div className="h-12 flex-1 relative rounded-lg bg-idrealestatecomau-white border-idrealestatecomau-mountain-mist border-[1px] border-solid box-border overflow-hidden max-w-full">
          <img
            className="absolute top-[14px] left-[12px] w-5 h-5 overflow-hidden object-cover z-[1]"
            alt=""
            src="/image-11@2x.png"
          />
        </div>
        <div className="h-0.5 w-3 absolute !m-[0] top-[calc(50%_-_1px)] left-[36px] bg-idrealestatecomau-white overflow-hidden shrink-0 z-[1]" />
        <input
          className="w-[85px] [border:none] [outline:none] bg-idrealestatecomau-white h-[26px] !m-[0] absolute top-[calc(50%_-_13px)] left-[36px] overflow-hidden flex flex-row items-start justify-start py-px px-1.5 box-border font-idrealestatecomau-inter-regular-1575 text-base-8 text-idrealestatecomau-salt-box max-w-[331.6px] z-[2]"
          placeholder="Password"
          type="text"
        />
      </div>
      <button className="cursor-pointer [border:none] py-3 px-5 bg-idrealestatecomau-azure-radiance self-stretch rounded-lg flex flex-row items-start justify-center box-border min-h-[48px] hover:bg-dodgerblue">
        <div className="relative text-base-9 leading-[24px] font-medium font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-white text-center">
          Continue
        </div>
      </button>
      <div className="self-stretch flex flex-col items-start justify-start gap-[22.4px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[47px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 flex flex-row items-end justify-start [row-gap:20px] mq450:flex-wrap">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.6px]">
              <div className="relative text-base leading-[24px] font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-ship-gray text-center">
                Don't have an account? 
              </div>
            </div>
            <div className="rounded-lg flex flex-row items-start justify-start py-[1.6px] px-1">
              <a
                className="relative text-base-9 leading-[24px] font-semibold font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-bahama-blue text-center [text-decoration:none]"
                href="https://id.realestate.com.au/u/signup/identifier"
                target="_blank"
              >
                Create account
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
      </div>
      <Container image="/image-2@2x.png" />
    </form>
  );
};

export default FormBackground;
