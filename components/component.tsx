import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ComponentType = {
  totalTrades?: string;
  prop?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propColor?: CSSProperties["color"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const Component: NextPage<ComponentType> = ({
  totalTrades,
  prop,
  propWidth,
  propColor,
  propWidth1,
  propAlignSelf,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const totalTradesStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const letsStartStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      alignSelf: propAlignSelf,
    };
  }, [propWidth1, propAlignSelf]);

  return (
    <div
      className="w-[510px] flex flex-col items-center justify-start pt-0 px-0 pb-[54px] box-border relative gap-[66px] max-w-full text-center text-9xl text-mediumslateblue font-poppins mq450:gap-[16px] mq850:gap-[33px]"
      data-scroll-to="component2Container"
    >
      <div className="self-stretch h-[5px] relative box-border border-t-[5px] border-solid border-fuchsia" />
      <div className="w-full h-full absolute my-0 mx-[!important] right-[0.5px] bottom-[0px] left-[-0.5px] bg-white" />
      <div
        className="flex flex-col items-start justify-start gap-[30px]"
        style={frameDivStyle}
      >
        <h3
          className="m-0 w-[245px] h-[42px] relative text-inherit font-bold font-inherit inline-block z-[1] mq450:text-3xl"
          style={totalTradesStyle}
        >
          {totalTrades}
        </h3>
        <div
          className="w-[234px] flex flex-row items-start justify-start py-0 px-[9px] box-border text-41xl text-black"
          style={letsStartStyle}
        >
          <div className="h-[90px] flex-1 relative inline-block z-[1] mq450:text-17xl mq850:text-29xl">
            {prop}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
