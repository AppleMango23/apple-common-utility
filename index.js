import { Dimensions, PixelRatio } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const heightMobileUI = 896;
const widthMobileUI = 414;

const responsiveWidth = (width) => {
  return (screenWidth * width) / widthMobileUI;
};

const responsiveHeight = (height) => {
  return (screenHeight * height) / heightMobileUI;
};

const normalize = (size) => {
  const scale = screenWidth / 411; // Based on Nexus 5X scale
  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const isStringEmpty = (str) => {
  return !str || str.length === 0;
};

const isObjectEmpty = (obj) => {
  if (obj == null) {
    return true;
  }

  if (Object.keys(obj).length === 0 && obj.constructor === Object) {
    return true;
  }

  return false;
};

module.exports = {
  responsiveWidth,
  responsiveHeight,
  normalize,
  isStringEmpty,
  isObjectEmpty,
};
