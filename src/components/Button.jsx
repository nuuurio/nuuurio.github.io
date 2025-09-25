import clsx from "clsx";

export default function Button({ variant = "primary", children, className, ...props }) {
    const baseStyles = "items-center justify-center rounded-4xl px-5 py-3 lg:text-lg xl:text-2xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-cyan-500 text-white hover:bg-cyan-700 focus:ring-cyan-300",
        secondary: "border-3 border-cyan-300 text-plum hover:bg-cyan-100 hover:text-plum focus:ring-cyan-200",
    };

    return (
        <button className={clsx(baseStyles, variants[variant], className)} {...props}>
            {children}
        </button>
    );
}