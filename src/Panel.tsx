import React from "react";
import { useStorybookApi } from "@storybook/api";
import { AddonPanel } from "@storybook/components";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  const api = useStorybookApi();

  const story: any = api.getCurrentStoryData();

  if (!story) {
    return null;
  }

  return (
    <AddonPanel {...props}>
      <pre>story: {JSON.stringify(story)}</pre>
      <br/>
      <pre>args: {JSON.stringify(story.args)}</pre>
    </AddonPanel>
  );
};
