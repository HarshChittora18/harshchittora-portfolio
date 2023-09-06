import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = React.forwardRef(({ children, type, onClick, classes, style }, ref) => {
  const { theme } = useTheme();

  const isPrimary = type === "primary";

  return (
    <button
      style={style}
      ref={ref}
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${
        isPrimary
          ? theme === "white"
            ? "bg-white text-black"
            : "bg-black text-white"
          : `flex items-center ${
              theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-100"
            }`
      } transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${
        data.showCursor && "cursor-none"
      } ${classes}`}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
