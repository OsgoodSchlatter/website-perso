import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";

const portal = document.getElementById("tooltip-root")!;

export const Tooltip = ({
  content,
  children,
}: {
  content: ReactNode | (() => ReactNode);
  children: (props: {
    ref: (element: HTMLElement | null) => void;
    onMouseOver: () => void;
    onMouseLeave: () => void;
  }) => JSX.Element;
}) => {
  const [show, setShow] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    strategy: "fixed",
    modifiers: [{ name: "offset", options: { offset: [0, 4] } }],
  });

  return (
    <>
      {children({
        ref: setReferenceElement,
        onMouseOver: () => setShow(true),
        onMouseLeave: () => setShow(false),
      })}
      {show &&
        createPortal(
          <div
            ref={setPopperElement}
            className="z-tooltip bg-[#666] text-white px-6 py-2 rounded-sm whitespace-pre-wrap"
            style={styles.popper}
            {...attributes.popper}
          >
            {typeof content === "function" ? content() : content}
          </div>,
          portal
        )}
    </>
  );
};
