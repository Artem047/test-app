import { Link } from "react-router-dom";
import { dataWork } from "../data/data";

const Work = () => {
  return (
    <div className="px-[235px] mt-20">
      <h1 className="text-[44px] font-bold text-[#21243D]">Work</h1>
      <div className="mt-10 flex flex-col gap-7">
        {dataWork.map((work, id) => {
          return (
            <Link to={`/work/${work.title}`} key={id}>
              <div className="flex gap-4">
                <img src={work.image} alt="" />
                <div className="flex flex-col gap-4">
                  <h1 className="text-[#21243D] text-[30px]">{work.title}</h1>
                  <div className="flex gap-6">
                    <p className="w-14 h-6 bg-[#142850] text-white text-center rounded-2xl">
                      {work.year}
                    </p>
                    <p className="text-xl text-[#8695A4]">{work.text}</p>
                  </div>
                  <p className="text-[#21243D] text-base max-w-[594px]">
                    {work.desc}
                  </p>
                </div>
              </div>
              <hr color="#E0E0E0" className="w-full h-[1px] mt-4" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
