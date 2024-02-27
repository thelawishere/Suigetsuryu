import type { NextPage } from "next";
import TopPage from "../components/top-page";
import Bar from "../components/bar";
import New from "../components/new";
import ContactForm from "../components/contact-form";
import FooterSection from "../components/footer-section";

const Kurkle: NextPage = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-end justify-start pt-0 px-0 pb-[0px] box-border tracking-[normal] text-left text-5xl text-darkslategray font-poppins">
      <TopPage />
      <Bar />
      <div className="self-stretch h-8 rounded-12xs bg-lightsteelblue flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mq1525:h-auto mq850:gap-[19px]">
        <div className="flex-1 rounded-12xs bg-lightsteelblue flex flex-row items-start justify-center pt-0 pb-[209px] pr-5 pl-[21px] box-border [row-gap:20px] max-w-full mq1525:flex-wrap mq1525:justify-center">
          <div className="h-[18px] w-[152px] relative tracking-[0.5px] leading-[28px] font-semibold inline-block shrink-0 mq450:text-lgi mq450:leading-[22px]">
            About Me
          </div>
          <div className="w-[1234px] flex flex-col items-start justify-start py-0 px-0 box-border max-w-full">
            <img
              className="self-stretch h-8 relative max-w-full overflow-hidden shrink-0"
              alt=""
              src="/line.svg"
            />
          </div>
        </div>
      </div>
      <New />
      <ContactForm />
      <FooterSection />
    </div>
  );
};

export default Kurkle;
