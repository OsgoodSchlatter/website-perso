import { RefObject, useLayoutEffect, useRef } from "react";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";


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
      className={className}
      autoFocus={autoFocus}
      minRows={minRows}
      {...props}
    />
  );
};
