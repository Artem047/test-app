import { dataPageBlog } from "../data/data";

const Blog = () => {
  return (
    <div className="px-[235px] mt-[106px]">
      <h1 className="text-[44px] font-bold text-[#21243D]">Blog</h1>
      <div className="mt-12">
        {dataPageBlog.map((blog, id) => {
          return (
            <div className="bg-white py-6 px-5 flex flex-col gap-5" key={id}>
              <h1 className="text-[#21243D] text-[26px] font-bold">
                {blog.title}
              </h1>
              <div className="flex items-center">
                <p>{blog.date}</p>
                <hr className="w-5 h-[2px] rotate-90" color="black" />
                <p>{blog.city}</p>
              </div>
              <p>{blog.desc}</p>
              <hr color="#E0E0E0" className="w-full h-[1px] mt-4" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
