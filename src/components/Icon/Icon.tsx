import { BaseComponent } from "@src/theme/BaseComponent";
import * as icons from "./svgs/_index";

interface IconProps {
  name: string;
}

export default function Icon({ name }) {
  const CurrentIcon = icons[name] || icons['default_icon'];
  return (
    <BaseComponent
      as="svg"
      styleSheet={{
        width: '24px',
        height: '24px',
      }}
      color="inherit"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <CurrentIcon />
    </BaseComponent>
  )

}
