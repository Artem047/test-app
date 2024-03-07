import { dataPost } from "../../data/data";

const Posts = () => {
  return (
    <div className="bg-[#EDF7FA] w-full mt-[70px] py-8 flex flex-col px-[148px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[22px]">Recent posts</h1>
        <p className="text-[#00A8CC] text-base">View all</p>
      </div>
      <div className="flex gap-5 mt-5">
        {dataPost.map((post, id) => {
          return (
            <div className="bg-white py-6 px-5 flex flex-col gap-5" key={id}>
              <h1 className="text-[#21243D] text-[26px] font-bold">
                {post.title}
              </h1>
              <div className="flex items-center">
                <p>{post.date}</p>
                <hr className="w-5 h-[2px] rotate-90" color="black" />
                <p>{post.city}</p>
              </div>
              <p>
                {post.desc}
              </p>
            </div>
          );
        })}
        {/*  */}
      </div>
    </div>
  );
};

export default Posts;
