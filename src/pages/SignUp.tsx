import { FunctionComponent } from "react";
import InputBackground from "../components/InputBackground";

const SignUp: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-idrealestatecomau-athens-gray flex flex-row items-start justify-center py-[220.5px] px-5 box-border leading-[normal] tracking-[normal]">
      <footer className="w-[500px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.16)] rounded-xl bg-wwwrealestatecomau-white-02 flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border max-w-full text-center text-xl text-black font-idrealestatecomau-inter-regular-1575">
        <div className="w-full flex flex-col items-center justify-start pt-10 px-10 pb-[31.6px] box-border gap-[18.4px] max-w-[500px] mq500:max-w-full">
          <div className="flex flex-row items-start justify-center">
            <b className="relative leading-[24px] mq450:text-base mq450:leading-[19px]">
              ProphecyProperty
            </b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-3xl-1 text-idrealestatecomau-ship-gray">
            <div className="flex flex-col items-center justify-start">
              <a className="[text-decoration:none] relative leading-[36px] font-semibold text-[inherit] mq450:text-lg mq450:leading-[29px]">
                Create account
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-12 box-border max-w-full mq500:pl-6 mq500:pr-6 mq500:box-border">
          <InputBackground />
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
