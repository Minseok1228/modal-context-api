import React, { ComponentProps } from "react";
import Button from "../Button";
//variant를 가져다 쓰는방법?
interface SuperButtonProps extends ComponentProps<typeof Button> {}
function SuperButton(props: SuperButtonProps) {
  return <button {...props}>SupterButton</button>;
}

export default SuperButton;
