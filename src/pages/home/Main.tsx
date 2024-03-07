const Main = () => {
  return (
    <div className="mt-[160px]">
      <div className="flex justify-center gap-[115px]">
        <div className="flex flex-col gap-10">
          <h1 className="text-[#21243D] text-4xl font-bold">
            Hi, I am John, <br /> Creative Technologist
          </h1>
          <p className="max-w-[497px] w-full text-[#21243D] text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="w-[208px] h-12 bg-[#FF6464] text-white text-xl">Download Resume</button>
        </div>
        <div className="relative">
          <img src="/people.svg" alt=""  />
          <img src="/bg-people.svg" alt="" className="absolute top-4 -z-10" />
        </div>
      </div>
    </div>
  )
}

export default Main