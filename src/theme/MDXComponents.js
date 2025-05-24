import React from "react";
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from "@theme-original/MDXComponents";

import Timeline from "@site/src/components/TimeLine";
import TimelineItem from "@site/src/components/TimeLine/TimeLineItem";

export default {
  // Reusing the default mapping
  ...MDXComponents,
  Timeline,
  TimelineItem,
};
