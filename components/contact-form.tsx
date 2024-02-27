import type { NextPage } from "next";

const ContactForm: NextPage = () => {
  return (
    <section className="self-stretch h-[361px] bg-white flex flex-row items-center justify-center py-[86px] px-[5px] box-border max-w-full text-center text-46xl text-white font-inter mq450:gap-[27px] mq850:pt-14 mq850:pb-14 mq850:box-border">
      <div className="w-[886px] flex flex-row items-start justify-center py-0 px-2.5 box-border max-w-[900px] shrink-0 mq1225:max-w-full mq850:gap-[20px]">
        <div className="h-[341px] w-[1937px] rounded-xl [background:linear-gradient(133.54deg,_#6441a5,_#000_67.5%,_#000)] shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-7 px-[30px] box-border gap-[17px] max-w-[224%] shrink-0 mq450:pt-5 mq450:pb-5 mq450:box-border">
          <div className="w-[408px] h-[131px] flex flex-col items-center justify-start max-w-full">
            <h1 className="m-0 w-[497px] h-[333px] relative text-inherit leading-[72px] font-semibold font-inherit inline-block shrink-0 max-w-[122%] mq450:text-20xl mq450:leading-[43px] mq850:text-33xl mq850:leading-[58px]">
              Watch Me Live On TWITCH
            </h1>
          </div>
          <div className="w-[408px] flex flex-col items-center justify-start max-w-full min-h-[84px] shrink-0 text-lgi">
            <div className="w-[426px] h-[46px] relative leading-[23px] font-extralight inline-block max-w-[104%] shrink-0">
              Join my Twitch live adventure! Interact and share unforgettable
              moments. #TwitchLive
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start max-w-full text-2xl font-poppins">
            <div className="w-[381px] h-[47px] rounded-2xl [background:linear-gradient(94.54deg,_rgba(154,_219,_236,_0),_rgba(159,_154,_219,_0.49)_64.58%,_rgba(162,_123,_211,_0.26))] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[22px] px-[77px] box-border whitespace-nowrap max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
              <a
                className="h-8 w-[99px] relative [text-decoration:underline] font-semibold text-[inherit] inline-block"
                href="https://www.youtube.com/@Suigetsuryu464"
                target="_blank"
              >
                Lets Start
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
