import resinSDK from 'resin-sdk';
const resin = resinSDK({
  apiUrl: "https://api.resin.io/",
  imageMakerUrl: "",
  isBrowser: true,
  debug: true
});

export { resin }
