import { ButtonHTMLAttributes } from "react";

export default function PrintButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button {...props} onClick={() => window.print()}>
      {props.children}
    </button>
  );
}
