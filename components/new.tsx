import type { NextPage } from "next";

const New: NextPage = () => {
  return (
    <section
      className="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start py-[104px] px-0 box-border min-h-[901px] max-w-full text-left text-6xl-7 text-darkslategray font-poppins mq1225:pt-[68px] mq1225:pb-[68px] mq1225:box-border mq450:pt-11 mq450:pb-11 mq450:box-border"
      data-scroll-to="new"
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-0 box-border max-w-full">
        <div className="flex-1 rounded-12xs bg-lightsteelblue flex flex-row items-start justify-start py-0 pr-[376px] pl-[345px] box-border relative gap-[76px] max-w-full">
          <img
            className="h-[327px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[398px] mq1225:min-w-full"
            loading="lazy"
            alt=""
            src="/422923870-388834590413206-4936779109110632150-n-1@2x.png"
          />
          <div className="w-[510px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[510px] max-w-full mq1525:flex-1 mq1525:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[91px] max-w-full mq450:gap-[23px] mq850:gap-[45px]">
              <div className="w-[471px] flex flex-row items-center justify-start max-w-full">
                <b className="h-[38.5px] w-[471.1px] relative capitalize flex items-center shrink-0 max-w-full z-[1] mq450:text-2xl">
                  How I started
                </b>
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[3px] ml-[-383px] text-mid-1 text-c-black-20">
                  <div className="w-[3px] h-[25px] relative inline-block whitespace-nowrap">
                    ·
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[108px] relative text-xl leading-[29.98px] text-c-black-20 flex items-center shrink-0 mq450:text-base mq450:leading-[24px]">
                As a Twitch streamer, I take my viewers on exhilarating
                adventures across a variety of gaming universes. From
                heart-pounding action sequences to strategic puzzle-solving, my
                streams are a blend of entertainment, skill, and interactive
                fun. With a welcoming community vibe, I encourage live chats,
                making every stream feel like a gathering of friends.
              </div>
            </div>
          </div>
          <textarea
            className="[border:none] bg-silver h-[323px] w-[580px] [outline:none] absolute my-0 mx-[!important] right-[375px] bottom-[0px] opacity-[0.8] z-[2]"
            rows={19}
            cols={32}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start py-0 px-0 box-border text-xl text-c-black-20">
        <div className="flex-1 rounded-12xs bg-lightsteelblue flex flex-row items-start justify-start py-0 pr-[376px] pl-[345px] box-border relative gap-[0px] max-w-full mq1225:gap-[38px] mq1225:pl-[172px] mq1225:pr-[188px] mq1225:box-border mq1525:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border mq850:gap-[19px] mq850:pl-[86px] mq850:pr-[94px] mq850:box-border">
          <textarea
            className="[border:none] bg-silver h-[382px] w-[636px] [outline:none] absolute my-0 mx-[!important] relative opacity-[0.8] z-[2]"
            rows={19}
            cols={32}
          />
          <div className="absolute top-[186.9px] left-[410px] leading-[29.98px] flex items-center w-[471.1px] h-[105.7px] z-[1] mq450:text-base mq450:leading-[24px]">
            {" "}
            Whether it's exploring new worlds in RPGs, battling it out in
            competitive shooters, or chilling with indie gems, I'm all about
            sharing genuine reactions and creating memorable moments. Join me
            live for a mix of laughs, thrills, and gaming expertise. Let's dive
            into the next adventure together!
          </div>
          <b className="absolute top-[90.5px] left-[410px] text-6xl-7 flex text-darkslategray items-center w-[471.1px] h-[38.5px] z-[1] mq450:text-2xl">
            Lets Start
          </b>
          <img
            className="h-[386px] w-[586px] relative object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/422929523-1138289584002937-576099150803234583-n-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default New;
