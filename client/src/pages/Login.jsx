import { useNavigate } from "react-router-dom";
import LoginLeftSide from "../components/LoginLeftSide";

const LoginLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* LEFT SIDE */}
      <LoginLeftSide />

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 min-h-screen bg-white flex items-center justify-center px-8 sm:px-12 lg:px-20">

        <div className="w-full max-w-md">

          {/* Heading */}
          <h1 className="text-3xl font-semibold text-slate-900 mb-3">
            Welcome Back
          </h1>

          <p className="text-slate-500 text-sm mb-10">
            Select your portal to securely access the system.
          </p>

          {/* Admin Portal */}
          <button
            onClick={() => navigate("/login/admin")}
            className="w-full flex items-center justify-between px-6 py-6 mb-4
                       bg-slate-50 border border-slate-200 rounded-xl
                       text-left transition-all duration-200
                       hover:bg-blue-50 hover:border-blue-200"
          >
            <span className="text-base font-medium text-slate-800">
              Admin Portal
            </span>

            <span className="text-xl text-slate-400">
              →
            </span>
          </button>

          {/* Employee Portal */}
          <button
            onClick={() => navigate("/login/employee")}
            className="w-full flex items-center justify-between px-6 py-6
                       bg-slate-50 border border-slate-200 rounded-xl
                       text-left transition-all duration-200
                       hover:bg-blue-50 hover:border-blue-200"
          >
            <span className="text-base font-medium text-slate-800">
              Employee Portal
            </span>

            <span className="text-xl text-slate-400">
              →
            </span>
          </button>

          {/* Footer */}
          <p className="text-xs text-slate-400 mt-12">
            © 2026 TeamStackNova. All rights reserved.
          </p>

        </div>
      </div>

    </div>
  );
};

export default LoginLanding;