import React from "react";
import { Text } from "react";
import { StatusBar } from "expo-status-bar";

import Box from "../componets/Box";

export default () => {
  return (
    <Box color="#f00">
      <Text>Open App.js to start woking on your app!</Text>
      <StatusBar style="auto" />
    </Box>
  );
};
