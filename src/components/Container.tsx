import { FunctionComponent } from "react";

export type ContainerType = {
  className?: string;
  image?: string;
};

const Container: FunctionComponent<ContainerType> = ({
  className = "",
  image,
}) => {
  return (
    <div
      className={`self-stretch h-32 flex flex-col items-start justify-start ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
        <button className="cursor-pointer border-idrealestatecomau-mountain-mist border-[1px] border-solid py-2.5 px-12 bg-idrealestatecomau-white self-stretch rounded-lg flex flex-row items-center justify-start relative mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex flex-col items-center justify-start py-0 px-16 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative text-base-8 leading-[24px] font-idrealestatecomau-inter-regular-1575 text-idrealestatecomau-ship-gray text-center">
              Continue with Google
            </div>
          </div>
          <img
            className="h-[41.67%] w-5 absolute !m-[0] top-[29.17%] bottom-[29.17%] left-[14.8px] max-h-full object-cover"
            alt=""
            src={image}
          />
        </button>
      </div>
      <div className="self-stretch flex-1" />
    </div>
  );
};

export default Container;
