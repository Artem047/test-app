import { dataWork } from "../../data/data";

const Works = () => {
  return (
    <div className="mt-5 px-[146px]">
      <h1 className="text-[22px] text-[#21243D]">Featured works</h1>
      <div className="mt-10 flex flex-col gap-7">
        {dataWork.slice(0, 3).map((work, id) => {
          return (
            <div key={id}>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
