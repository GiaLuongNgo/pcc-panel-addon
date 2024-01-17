import React from "react";
import { useStorybookApi } from "@storybook/api";
import { AddonPanel } from "@storybook/components";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  const api = useStorybookApi();

  const story = api.getCurrentStoryData();

  if (!story) {
    return null;
  }

  return (
    <AddonPanel {...props}>
      <p>{JSON.stringify(story.args)}</p>
    </AddonPanel>
  );
};
