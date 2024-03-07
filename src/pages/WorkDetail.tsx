import { useNavigate, useParams } from "react-router-dom";
import { IWork } from "../interface/work.interface";

const WorkDetail = ({ data }: { data: IWork[] }) => {
  const { title } = useParams();
  const navigate = useNavigate();

  return (
    <div className="px-[235px] mt-20">
      <button onClick={() => navigate(-1)}>Back</button>
      {data
        .filter((item) => item.title === title)
        .map((work, id) => {
          return (
            <div key={id} className="flex flex-col gap-7">
              <h1 className="text-3xl text-[#21243D] font-bold">
                {work.title}
              </h1>
              <div className="flex gap-6">
                <p className="w-14 h-6 bg-[#FF7C7C] text-white text-center rounded-2xl">
                  {work.year}
                </p>
                <p className="text-xl text-[#8695A4]">{work.text}</p>
              </div>
              <p>{work.desc}</p>
              <img src={work.image} alt={work.title} />
            </div>
          );
        })}
    </div>
  );
};

export default WorkDetail;
