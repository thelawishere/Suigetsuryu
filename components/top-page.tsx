import type { NextPage } from "next";
import { useCallback } from "react";

const TopPage: NextPage = () => {
  const onFollowersTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='component2Container']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='new']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="self-stretch h-[936px] relative bg-white overflow-hidden shrink-0 max-w-full text-left text-lg text-color-1 font-poppins">
      <div className="absolute top-[145px] left-[100px] w-[1820px] flex flex-col items-start justify-center gap-[48px] min-h-[791px] max-w-full z-[3] text-47xl text-white font-oswald">
        <div className="w-[654px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start shrink-0">
              <h1 className="m-0 self-stretch h-[195px] relative text-inherit font-bold font-inherit inline-block mq450:text-21xl mq850:text-34xl">
                Stream the Universe with Me on Twitch!
              </h1>
            </div>
            <div className="w-[573px] h-[116px] relative text-lgi font-medium font-poppins text-whitesmoke inline-block max-w-full">
              <p className="m-0">
                Embark on a thrilling live adventure with me on Twitch!
              </p>
              <p className="m-0">
                Join the journey, interact in real-time, and be part of the
                excitement. Let's create unforgettable moments together!
                #LiveAdventure #TwitchStream"
              </p>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-4 pr-[41px] pl-8 bg-slateblue h-[58px] rounded-2xl flex flex-row items-center justify-start box-border gap-[20px] max-w-full">
          <div className="h-6 w-6 relative shadow-[0px_4px_2px_rgba(0,_0,_0,_0.5)] overflow-hidden shrink-0">
            <img
              className="absolute h-3/4 w-[58.33%] top-[12.5%] right-[20.83%] bottom-[12.5%] left-[20.83%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle-a.svg"
            />
            <img
              className="absolute top-[0px] left-[44px] w-full h-full overflow-hidden"
              alt=""
              src="/twitch-outline.svg"
            />
          </div>
          <a
            className="h-9 w-[229px] relative text-5xl [text-decoration:underline] font-bold font-poppins text-color-1 whitespace-pre-wrap text-left inline-block [text-shadow:0px_4px_2px_rgba(0,_0,_0,_0.5)] mq450:text-lgi"
            href="https://www.youtube.com/@Suigetsuryu464"
            target="_blank"
          >
            Watch Twitch LIVE
          </a>
        </button>
        <div className="w-[358px] h-10 max-w-full" />
      </div>
      <div className="absolute top-[-227px] left-[-44px] w-[2065px] h-[1684px]">
        <img
          className="absolute top-[227px] left-[0px] w-[2065px] h-[1480px] object-cover"
          alt=""
          src="/vecteezy-bluehalftonecomiccartoonbackground-13454706-1@2x.png"
        />
        <img
          className="absolute h-[calc(100%_-_0.2px)] top-[0px] bottom-[0.2px] left-[642px] max-h-full w-[863.3px] object-cover z-[1]"
          alt=""
          src="/blue-hiar-guy-2transformed-1-2@2x.png"
        />
        <div className="absolute top-[290px] left-[366px] rounded-[50%] [filter:blur(500px)] box-border w-[1273px] h-[846px] z-[2] border-[0px] border-solid border-gray1" />
        <img
          className="absolute top-[259px] left-[108px] w-[264px] h-[108px] object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/423036413-3211921389116300-3383287305469894800-n-1transformed-1@2x.png"
        />
      </div>
      <div
        className="absolute top-[64px] left-[1486px] font-medium cursor-pointer z-[3]"
        onClick={onFollowersTextClick}
      >
        Followers
      </div>
      <div
        className="absolute top-[64px] left-[1635px] font-medium cursor-pointer z-[3]"
        onClick={onAboutUsTextClick}
      >
        About Us
      </div>
      <a
        className="absolute top-[64px] left-[1781px] [text-decoration:underline] font-medium text-[inherit] z-[3]"
        href="https://Subscribe © 2024 Suigetsuryu. All rights reserved."
        target="_blank"
      >
        Subscribe
      </a>
    </section>
  );
};

export default TopPage;
