import type { NextPage } from "next";

const FooterSection: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start p-[50px] box-border max-w-full text-left text-5xl text-gray-black font-header-heading-4 mq1225:pl-[25px] mq1225:pr-[25px] mq1225:box-border">
      <div className="h-[123px] w-[1520px] flex flex-row items-start justify-between gap-[20px] max-w-full">
        <div className="h-[300px] w-[312px] flex flex-col items-start justify-start">
          <div className="self-stretch h-[168px] flex flex-col items-start justify-start gap-[13px]">
            <div className="w-[115px] h-8 relative leading-[32px] font-semibold inline-block mq450:text-lgi mq450:leading-[26px]">
              Subscribe
            </div>
            <div className="w-[115px] flex flex-row items-center justify-between gap-[11px]">
              <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/youtube-outline.svg"
                />
              </div>
              <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
                <img
                  className="w-6 h-6 relative rounded-31xl overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/-discord.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[85px] w-[172px] flex flex-col items-start justify-start text-xs mq850:gap-[16px]">
          <div className="w-[516px] h-[167px] flex flex-col items-end justify-end max-w-[300%] shrink-0">
            <div className="w-[239px] h-8 relative leading-[32px] flex items-end">
              © 2024 Suigetsuryu. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
