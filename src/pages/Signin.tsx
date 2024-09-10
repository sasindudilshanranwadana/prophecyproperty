import { FunctionComponent } from "react";
import FormBackground from "../components/FormBackground";

const Signin: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-idrealestatecomau-athens-gray flex flex-row items-start justify-center py-[296.3px] px-5 box-border leading-[normal] tracking-[normal]">
      <footer className="w-[500px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.16)] rounded-xl bg-wwwrealestatecomau-white-02 flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border max-w-full text-center text-xl text-black font-idrealestatecomau-inter-regular-1575">
        <div className="w-full flex flex-col items-center justify-start pt-10 px-10 pb-6 box-border gap-[18.4px] max-w-[500px] mq500:max-w-full">
          <div className="flex flex-row items-start justify-center">
            <a className="[text-decoration:none] relative leading-[24px] font-bold text-[inherit] mq450:text-base mq450:leading-[19px]">
              ProphecyProperty
            </a>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-2xl-6 text-idrealestatecomau-ship-gray">
            <div className="flex flex-col items-center justify-start">
              <div className="relative leading-[36px] font-semibold mq450:text-[17px] mq450:leading-[29px]">
                Sign in
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-12 box-border max-w-full mq500:pl-6 mq500:pr-6 mq500:box-border">
          <FormBackground />
        </div>
      </footer>
    </div>
  );
};

export default Signin;
