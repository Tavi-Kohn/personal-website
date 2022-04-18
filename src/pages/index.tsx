import React from "react";

import { Button, MantineProvider, MantineThemeOverride, TypographyStylesProvider } from "@mantine/core";

const mainStyle: React.CSSProperties = {
  fontFamily: "Barlow, Cabin, Atkinson Hyperlegible",
};

const mantineTheme: MantineThemeOverride = {
  colorScheme: "light",
  colors: {
  },
  fontFamily: "Barlow, Cabin, Atkinson Hyperlegible, Helvetica Neue, Helvetica, Arial, sans-serif",
  fontFamilyMonospace: "Fira Code, Courier New, monospace",
  primaryColor: "teal",
  defaultRadius: "sm",
  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
  },
  headings: {
    fontFamily: "Bitter, Cambria, Cochin, Georgia, Times, Times New Roman, serif",
    fontWeight: "700",
  },
}

const IndexPage = () => {
  return (
    <MantineProvider theme={mantineTheme}>
      <TypographyStylesProvider>
        <main style={mainStyle}>
          <h1>
            Tavi Kohn
          </h1>
        </main>
      </TypographyStylesProvider>
    </MantineProvider>
  );
};

export default IndexPage;
