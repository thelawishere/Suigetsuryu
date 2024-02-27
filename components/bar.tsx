import type { NextPage } from "next";
import Component from "./component";

const Bar: NextPage = () => {
  return (
    <section className="self-stretch rounded-12xs bg-lightsteelblue flex flex-row items-start justify-center pt-0 px-0 pb-[70px] box-border max-w-full text-center text-9xl text-firebrick font-poppins mq1225:gap-[69px] mq450:pb-[45px] mq450:box-border">
      <div className="flex-1 flex flex-row items-end justify-center max-w-full min-h-[357px] mq850:gap-[29px]">
        <div className="flex-1 rounded-12xs flex flex-row flex-wrap items-start justify-between py-0 pr-[118px] pl-[111px] box-border gap-[20px] max-w-full mq1225:pl-[55px] mq1225:pr-[59px] mq1225:box-border mq850:pl-[27px] mq850:pr-[29px] mq850:box-border">
          <div className="w-[509px] rounded-15xl box-border flex flex-col items-start justify-start pt-0 px-0 pb-[53px] relative gap-[67px] max-w-full border-[1px] border-solid border-white mq450:gap-[17px] mq850:gap-[33px]">
            <div className="self-stretch h-[5px] relative box-border border-t-[5px] border-solid border-turquoise" />
            <div className="w-full h-full absolute my-0 mx-[!important] right-[0.5px] bottom-[0px] rounded-12xs bg-white" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-3.5 box-border max-w-full shrink-0">
              <div className="flex-1 flex flex-col items-center justify-start gap-[30px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-0">
                  <h3 className="m-0 h-[42px] w-[135px] relative text-inherit font-bold font-inherit inline-block z-[1] mq450:text-3xl">
                    Live Time
                  </h3>
                </div>
                <div className="self-stretch h-[90px] relative text-41xl text-black inline-block z-[1] mq450:text-17xl mq850:text-29xl">
                  8Pm-10PM
                </div>
              </div>
            </div>
          </div>
          <Component
            totalTrades=" Twitch Followers"
            prop="8"
            propColor="#5347db"
            propWidth1="234px"
          />
          <Component
            totalTrades="Youtube Followers"
            prop="5"
            propWidth="265px"
            propColor="#000"
            propWidth1="unset"
            propAlignSelf="stretch"
          />
        </div>
      </div>
    </section>
  );
};

export default Bar;
