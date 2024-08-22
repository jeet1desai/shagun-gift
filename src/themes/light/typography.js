const Typography = (fontFamily) => ({
  htmlFontSize: 16,
  fontFamily,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 500,
    fontSize: "56px",
    lineHeight: "64px",
  },
  h2: {
    fontWeight: 600,
    fontSize: "1.875rem",
    lineHeight: 1.27,
  },
  h3: {
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: 1.33,
  },
  h4: {
    fontWeight: 600,
    fontSize: "1.25rem",
    lineHeight: 1.4,
  },
  h5: {
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "32px",
  },
  h6: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
  },
  caption: {
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "16px",
  },
  body1: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
  },
  body2: {
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "16px",
  },
  subtitle1: {
    fontSize: "14px",
    lineHeight: "20px",
  },
  subtitle2: {
    fontSize: "12px",
    lineHeight: "16px",
  },
  overline: {
    lineHeight: 1.66,
  },
  button: {
    textTransform: "capitalize",
  },
});

export default Typography;
