import { TypeAnimation } from "react-type-animation";
import type { TypeAnimationProps } from "react-type-animation/dist/esm/components/TypeAnimation/index.types";

export default function TypeAnimationComponent(props: TypeAnimationProps) {
  return (
    <span suppressHydrationWarning>
      <TypeAnimation {...props} />
    </span>
  );
}
