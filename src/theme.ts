const deviceSizes = {
  fold: 300,
  mobile: 768,
  tablit: 1023,
};

const device = {
  fold: `screen and (min-width: 0px) and (max-width: ${deviceSizes.fold}px)`,
  mobile: `screen and (min-width: 301px) and (max-width: ${deviceSizes.mobile}px)`,
  tablit: `screen and (min-width: 769px) and (max-width: ${deviceSizes.tablit}px)`,
};

const theme = {
  device,
};

export default theme;
