const envs = {
  ie: is.ie(),
  chrome: is.chrome(),
  firefox: is.firefox(),
  edge: is.edge(),
  opera: is.opera(),
  safari: is.safari(),
  phantom: is.phantom(),
  ios: is.ios(),
  iphone: is.iphone(),
  ipad: is.ipad(),
  ipod: is.ipod(),
  android: is.android(),
  androidPhone: is.androidPhone(),
  androidTablet: is.androidTablet(),
  blackberry: is.blackberry(),
  windowsPhone: is.windowsPhone(),
  windowsTablet: is.windowsTablet(),
  windows: is.windows(),
  mac: is.mac(),
  linux: is.linux(),
  desktop: is.desktop(),
  mobile: is.mobile(),
  tablet: is.tablet(),
  touchDevice: is.touchDevice(),
};

const currentEnv = Object.keys(envs).reduce((obj, property) => {
  if (envs[property]) obj[property] = envs[property];
  return obj;
}, {});

document.querySelector('.browserName').innerText = JSON.stringify(
  currentEnv,
  null,
  2
);
