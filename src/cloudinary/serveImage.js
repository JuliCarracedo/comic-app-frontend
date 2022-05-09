
import {Cloudinary} from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: 'comic-app'
  }
});

const serveImage = (cloudPath) => {
    // console.log('Fetching')
    // const myImage = cld.image(cloudPath);
    // console.log(myImage)
    // console.log( myImage.toURL())
    return 'https://res.cloudinary.com/comic-app/image/upload/c_fill,h_200,w_300/r_20/file.jpg'
}

export default serveImage
