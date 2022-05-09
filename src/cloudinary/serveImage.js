
import {Cloudinary} from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: 'comic-app'
  }
});

const serveImage = (cloudPath) => {
    const myImage = cld.image(cloudPath);
    myImage.toURL();
}

export default serveImage
