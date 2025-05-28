function importAllImages(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// Import all images from the petplatform folder
const petImages = importAllImages(require.context('../assets/petplatform', false, /\.(png|jpe?g|svg)$/));

export default petImages;