import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  label?: string | ReactNode;
  danger?: boolean;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  label,
  danger,
  className,
  disabled,
  loading,
  ...rest
}: ButtonProps) => {
  return (
    <button className={classNames(className, "rounded bg-cyan-600")}>
      <div className="p-2">{label}</div>
    </button>
  );
};
