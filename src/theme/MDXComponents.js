import React from "react";
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from "@theme-original/MDXComponents";

import Timeline from "@site/src/components/Timeline";
import TimelineItem from "@site/src/components/Timeline/TimelineItem";

export default {
  // Reusing the default mapping
  ...MDXComponents,
  Timeline,
  TimelineItem,
};
