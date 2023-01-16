import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode, useState } from "react";

export type ButtonProps = {
  label?: string | ReactNode;
  danger?: boolean;
  loading?: boolean;
  onClick?: () => any;
  tooltip_content?: string;
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
    <>
      <button
        className={className}
        onClick={onClick}
        data-tooltip-target="tooltip-default"
      >
        <div className="p-2">{label}</div>
      </button>
    </>
  );
};
