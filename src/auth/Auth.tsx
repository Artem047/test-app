import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="flex w-full h-screen">
      <img src="/auth.svg" alt="" className="w-full max-w-[800px]" />
      <Outlet />
    </div>
  );
};

export default Auth;
