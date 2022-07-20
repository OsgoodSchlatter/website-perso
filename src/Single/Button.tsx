import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  label?: string | ReactNode;
  danger?: boolean;
  loading?: boolean;
  onClick?: () => any;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  label,
  danger,
  className,
  disabled,
  loading,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(className, "rounded bg-cyan-600")}
      onClick={onClick}
    >
      <div className="p-2">{label}</div>
    </button>
  );
};
