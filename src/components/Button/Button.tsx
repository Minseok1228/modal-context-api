import React, { ComponentProps, PropsWithChildren } from "react";
//구린방법
// interface ButtonProps
//   extends React.DetailedHTMLProps<
//     React.ButtonHTMLAttributes<HTMLButtonElement>,
//     HTMLButtonElement
//   > {}
interface ButtonProps extends ComponentProps<"button"> {
  //   variant?: "primary" | "secondary" | "danger";
}

// interface ButtonProps extends ComponentProps<"button"> {}
//ComponentProps
function Button({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const buttonClassName =
    "px-4 py-2 bordeer bg-black  text-white text-[15px] font-semibold rounded-md hover:opacity-85 active:opacity-70" +
    (className ? " " + className : "");
  //hover:bg-black/80 opacity 0.8

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}

export default Button;
