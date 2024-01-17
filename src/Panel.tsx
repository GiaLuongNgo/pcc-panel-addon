import React from "react";
import { useAddonState, useChannel, useParameter } from "@storybook/manager-api";
import { AddonPanel } from "@storybook/components";
import { ADDON_ID, EVENTS, PARAM_KEY } from "./constants";


interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useaddonstate
  const args = useParameter(PARAM_KEY, {});
  const text = JSON.stringify(args, null, 2);

  return (
    <AddonPanel {...props}>
      <p>{text}</p>
    </AddonPanel>
  );
};
