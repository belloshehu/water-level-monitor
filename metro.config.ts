// Learn more https://docs.expo.io/guides/customizing-metro
require("tsx/cjs"); // Add this to import TypeScript files

import { getDefaultConfig } from "expo/metro-config";

const config = getDefaultConfig(__dirname);

module.exports = config;
