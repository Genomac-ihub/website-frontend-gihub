import { Link, useLocation } from "react-router-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user?: { firstName?: string } | undefined;
  mode?: "overlay" | "push";
};

// export default function MyLearningSidebar
export default function MyLearningSidebar({
  isOpen,
  onClose,
  user,
  mode = "overlay",
}: Props) {
  const { pathname } = useLocation();

  const items = [
    { to: "/my-learning", label: "Videos", icon: "bi bi-play-btn" },
    { to: "/bioengineering", label: "Courses", icon: "bi bi-book" },
    { to: "/event", label: "Calendar", icon: "bi bi-calendar" },
    { to: "/earn", label: "Earn", icon: "bi bi-journal" },
    { to: "#", label: "Account", icon: "bi bi-person" },
    { to: "#", label: "History", icon: "bi bi-arrow-counterclockwise" },
    { to: "#", label: "Help", icon: "bi bi-question-circle" },
  ];
  const clickableLabels = new Set(["Videos", "Earn"]);

  if (mode === "push") {
    return (
      <aside
        className={`fixed left-0 top-0 h-full w-72 bg-[#151515] text-white shadow-2xl transform transition-transform duration-300 z-[40] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center font-bold">
              G
            </div>
            <span className="text-lg">-IHub</span>
          </div>

          <div className="text-sm text-gray-300">
            {/* Welcome to Genomach{user?.firstName ? `, ${user.firstName}` : ''} */}
          </div>

          <nav className="space-y-2">
            {items.map(({ to, label, icon }) => {
              const isClickable = clickableLabels.has(label);
              const isActive = isClickable && pathname === to;
              const baseClasses =
                "flex items-center justify-between px-4 py-3 rounded-xl transition";

              return isClickable ? (
                <Link
                  key={label}
                  to={to}
                  onClick={onClose}
                  className={`${baseClasses} ${
                    isActive ? "bg-white text-black" : "hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <i className={`${icon} text-xl`}></i>
                    <span className="text-base">{label}</span>
                  </div>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              ) : (
                <div
                  key={label}
                  className={`${baseClasses} opacity-50 cursor-not-allowed pointer-events-none`}
                >
                  <div className="flex items-center gap-3">
                    <i className={`${icon} text-xl`}></i>
                    <span className="text-base">{label}</span>
                  </div>
                  <i className="bi bi-arrow-right"></i>
                </div>
              );
            })}
          </nav>
        </div>
      </aside>
    );
  }

  // default overlay behavior
  return (
    <div className={`fixed inset-0 z-[70] ${isOpen ? "visible" : "invisible"}`}>
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>

      <aside
        className={`absolute left-0 top-0 h-full w-72 bg-[#151515] text-white shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center font-bold">
              G
            </div>
            <span className="text-lg">-IHub</span>
          </div>

          <div className="text-[1.2rem] text-gray-300">
            Hello{user?.firstName ? `, ${user.firstName}` : ""}
          </div>

          <nav className="space-y-2">
            {items.map(({ to, label, icon }) => {
              const isClickable = clickableLabels.has(label);
              const isActive = isClickable && pathname === to;
              const baseClasses =
                "flex items-center justify-between px-4 py-3 rounded-xl transition";

              return isClickable ? (
                <Link
                  key={label}
                  to={to}
                  onClick={onClose}
                  className={`${baseClasses} ${
                    isActive ? "bg-white text-black" : "hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <i className={`${icon} text-xl`}></i>
                    <span className="text-base">{label}</span>
                  </div>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              ) : (
                <div
                  key={label}
                  className={`${baseClasses} opacity-50 cursor-not-allowed pointer-events-none`}
                >
                  <div className="flex items-center gap-3">
                    <i className={`${icon} text-xl`}></i>
                    <span className="text-base">{label}</span>
                  </div>
                  <i className="bi bi-arrow-right"></i>
                </div>
              );
            })}
          </nav>
        </div>
      </aside>
    </div>
  );
}
