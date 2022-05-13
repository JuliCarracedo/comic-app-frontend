
import {Cloudinary} from "@cloudinary/url-gen";

const URL = " https://api.cloudinary.com/v1_1/comic-app/image/upload";

const cld = new Cloudinary({
  cloud: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  }
});

function hash(string) {
  const utf8 = new TextEncoder().encode(string);
  return crypto.subtle.digest('SHA-1', utf8).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  });
}

export const uploadImage = async(image) => {
    const timestamp = Math.round(new Date() /1000);
    const signature = await hash(`timestamp=${timestamp}${process.env.CLOUDINARY_SECRET}`);

    const data = new FormData()
    data.append('file', image);

    return fetch(URL,{
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
        },
        body: {
            api_key: process.env.CLOUDINARY_API_KEY,
            timestamp: timestamp,
            signature: signature,
            file: data
        }
    }).then(response => response.json());

}

const getCloudinaryURL = (publicId) => {cld.image(publicId).toURL();}

export default getCloudinaryURL;