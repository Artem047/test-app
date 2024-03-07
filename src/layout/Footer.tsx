import { dataIcon } from "../data/data";

const Footer = () => {
  return (
    <div className="mt-20 flex flex-col gap-7 justify-center items-center py-14">
      <div className="flex gap-8">
        {dataIcon.map((icon, id) => {
          return (
            <div key={id}>
              <img src={icon.image} alt="" />
            </div>
          );
        })}
      </div>
      <p className="text-sm text-[#21243D]">Copyright ©2020 All rights reserved </p>
    </div>
  );
};

export default Footer;
