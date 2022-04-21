/** @format */
import type { Theme } from "styled-system";

const theme: Theme = {
  fontFamily: "Nunito",

  //SPACE are not complete/verified
  space: [0, 2, 4, 8, 16, 24, 32],

  fontSizes: [12, 14, 16, 20, 24, 32],
  fontWeights: [500, 600, 700, 800],

  lineHeight: [1.4, 1.3, 1.3, 1.5, 1.5, 1.3, 1.4, 1.2],
  letterSpacings: [0],

  //what exactly is SIZES? Do we need that?
  sizes: [],

  //should we split up BORDERS?? Is borderstyles really necessary? Bestpractices?
  borders: [],
  borderWidths: [0, 1, 2, 3],
  borderStyles: ["dashed", "solid"],

  //RADII are not complete/verified
  radii: [10, 18, 20, 24, 28, 30],

  //OPACITIES are not complete/verified
  opacities: [0.4, 0.6, 0.75],

  //SHADOWS are not complete/verified
  shadows: [
    "0px 12px 18px -8px rgba(186, 160, 79, 0.2)",
    "0px -4px 10px 4px rgba(255, 255, 255, 0.2)",
  ],

  //Does Louis define the TRANSITIONS??
  transitions: [],

  //bestpractice for ZINDICES??
  zIndices: [0, 1],

  colors: {
    primary: {
      160: "#d6ab00",
      140: "#e8ba02",
      120: "#f2c71c",
      100: "#fed957",
      75: "#fee381",
      50: "#feecab",
      35: "#fff2c4",
      20: "#fff7dd",
    },
    beige: {
      100: "#e2b736",
      75: "#e9c968",
      50: "#f0db9a",
      35: "#f5e6b9",
      20: "#f9f1d7",
      10: "#fcf8eb",
      "75-tra": "rgba(226, 183, 54, 0.75)",
      "50-tra": "rgba(226, 183, 54, 0.5)",
      "35-tra": "rgba(226, 183, 54, 0.35)",
      "20-tra": "rgba(226, 183, 54, 0.2)",
      "10-tra": "rgba(226, 183, 54, 0.1)",
    },
    brown: {
      100: "#baa04f",
      75: "#cbb87b",
      50: "#dccfa7",
      35: "#e7dec2",
      20: "#f1ecdc",
      10: "#faf8f3",
      7: "#faf8f3",
      4: "#fcfbf8",
      "75-tra": "rgba(186, 160, 79, 0.75)",
      "50-tra": "rgba(186, 160, 79, 0.5)",
      "35-tra": "rgba(186, 160, 79, 0.35)",
      "20-tra": "rgba(186, 160, 79, 0.2)",
      "10-tra": "rgba(186, 160, 79, 0.1)",
      "7-tra": "rgba(186, 160, 79, 0.07)",
      "4-tra": "rgba(186, 160, 79, 0.04)",
    },
    greyscale: {
      100: "#c3baa2",
      75: "#d2cbb9",
      50: "#e1dcd0",
      35: "#eae7df",
      20: "#f3f1ec",
      10: "#f8f7f5",
      8: "#fafaf9",
      5: "#fcfcfb",
      "75-tra": "rgba(195, 186, 162, 0.75)",
      "50-tra": "rgba(195, 186, 162, 0.5)",
      "35-tra": "rgba(195, 186, 162, 0.35)",
      "20-tra": "rgba(195, 186, 162, 0.2)",
      "10-tra": "rgba(195, 186, 162, 0.11)",
      "8-tra": "rgba(192, 188, 175, 0.08)",
      "5-tra": "rgba(192, 188, 175, 0.05)",
    },
    black: {
      "80-tra": "rgba(0, 0, 0, 0.8)",
      "60-tra": "rgba(0, 0, 0, 0.6)",
      "40-tra": "rgba(0, 0, 0, 0.4)",
      "30-tra": "rgba(0, 0, 0, 0.3)",
    },
    signal: {
      redDark: "#ca3336",
      red: "#ff3c3e",
      greenDark: "#00857b",
      green: "#009a8e",
      blueDark: "#241ebe",
      blue: "#322bf3",
    },
  },
};

export default theme;
