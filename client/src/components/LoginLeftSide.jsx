
import {
  Users,
  CalendarCheck,
  Wallet,
  CalendarDays,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const LoginLeftSide = () => {
  const features = [
    {
      icon: Users,
      title: "Employee Management",
      desc: "All your people, organized",
      color: "text-sky-300",
      bg: "bg-sky-400/15",
    },
    {
      icon: CalendarCheck,
      title: "Attendance Tracking",
      desc: "Stay on top of every workday",
      color: "text-emerald-300",
      bg: "bg-emerald-400/15",
    },
    {
      icon: Wallet,
      title: "Payroll Management",
      desc: "Salary records made simple",
      color: "text-violet-300",
      bg: "bg-violet-400/15",
    },
    {
      icon: CalendarDays,
      title: "Leave Management",
      desc: "Requests without the hassle",
      color: "text-amber-300",
      bg: "bg-amber-400/15",
    },
  ];

  return (
    <div className="relative hidden min-h-screen w-1/2 flex-col justify-center overflow-hidden bg-[#08152e] px-10 py-12 md:flex lg:px-14 xl:px-16">

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-[#102b59] to-indigo-950" />

      {/* Ambient glow */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/25 blur-[100px]" />
      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-violet-500/20 blur-[100px]" />
      <div className="absolute right-10 top-20 h-64 w-64 rounded-full border border-white/5" />
      <div className="absolute right-20 top-30 h-44 w-44 rounded-full border border-white/5" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(#93c5fd 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-xl">

        {/* Brand */}
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-400/15 shadow-lg shadow-blue-950/30">
            <Users size={25} className="text-sky-300" />
          </div>

          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-white">
              WORKFORCE
            </p>
            <p className="text-xs tracking-widest text-blue-200/70">
              MANAGEMENT PLATFORM
            </p>
          </div>
        </div>

        {/* Main heading */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-200">
          <Sparkles size={14} className="text-sky-300" />
          A smarter way to work
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-[1.12] tracking-tight text-white lg:text-5xl xl:text-6xl">
          Employee
          <br />
          <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
            Management
          </span>
          <br />
          System<span className="text-sky-300">.</span>
        </h1>

        <p className="mb-9 max-w-lg text-base leading-7 text-blue-100/70 lg:text-lg">
          Bring your entire workforce together. Manage employee
          records, track attendance, simplify leave requests, and
          organize payroll — all from one central platform.
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/10"
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${feature.bg}`}
                >
                  <Icon size={22} className={feature.color} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-blue-100/55">
                    {feature.desc}
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-blue-200/30 transition group-hover:text-sky-300"
                />
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/10">
            <ShieldCheck size={19} className="text-emerald-300" />
          </div>

          <div>
            <p className="text-sm font-medium text-white/90">
              Everything in one place
            </p>
            <p className="mt-1 text-xs text-blue-100/50">
              Organized workflows. Simplified management.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginLeftSide;
