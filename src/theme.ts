const deviceSizes = {
  fold: 300,
  mobile: 768,
  tablit: 1024,
};

const device = {
  fold: `screen and (max-width: ${deviceSizes.fold}px)`,
  mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
  tablit: `screen and (max-width: ${deviceSizes.tablit}px)`,
};

const theme = {
  device,
};

export default theme;
