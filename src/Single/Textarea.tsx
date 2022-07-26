import { RefObject, useLayoutEffect, useRef } from "react";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";
import classNames from "classnames";

import styles from "./textarea.module.css";

export type TextareaProps = TextareaAutosizeProps & {
  hasError?: boolean;
  inputRef?: RefObject<HTMLTextAreaElement>;
};

export const Textarea = ({
  inputRef,
  hasError,
  className,
  minRows = 3,
  autoFocus,
  ...props
}: TextareaProps) => {
  const defaultInputRef = useRef<HTMLTextAreaElement>(null);

  const usedInputRef = inputRef ?? defaultInputRef;
  useLayoutEffect(() => {
    if (!autoFocus) return;
    const length = usedInputRef.current!.value.length;
    usedInputRef.current!.setSelectionRange(length, length);
  }, [autoFocus, usedInputRef]);

  return (
    <TextareaAutosize
      ref={usedInputRef}
      className="bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900"
      autoFocus={autoFocus}
      minRows={minRows}
      {...props}
    />
  );
};
