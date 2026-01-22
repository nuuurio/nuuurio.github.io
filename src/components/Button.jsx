import clsx from "clsx";

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}) {
  const baseStyles =
    "relative inline-flex items-center justify-center " +
    "rounded-4xl px-5 py-3 lg:text-lg xl:text-2xl font-medium " +
    "transition-all duration-300 ease-out " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 " +
    "shadow-md hover:shadow-lg active:shadow-sm " +
    "hover:-translate-y-0.5 active:translate-y-0" +
    "overflow-hidden";

  const variants = {
    primary:
      "bg-cyan-500 text-white " +
      "hover:bg-cyan-600 focus:ring-cyan-300 " +
      "backdrop-blur-sm",

    secondary:
      "border-3 border-cyan-300 text-plum " +
      "bg-white/40 backdrop-blur-sm " +
      "hover:bg-cyan-100 focus:ring-cyan-200",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {/* ✨ glass shine
      <span
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-br from-white/40 via-white/10 to-transparent
          opacity-60
        "
      /> */}

      {/* ✨ top edge highlight
      <span
        aria-hidden
        className="
          pointer-events-none absolute top-0 left-0 right-0 h-px
          bg-white/60
        "
      /> */}

      {/* content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
