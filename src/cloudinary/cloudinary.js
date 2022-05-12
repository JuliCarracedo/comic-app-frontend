
import {Cloudinary} from "@cloudinary/url-gen";

const URL = " https://api.cloudinary.com/v1_1/comic-app/image/upload";

const cld = new Cloudinary({
  cloud: {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  }
});

const signUpload = async () => {
    const timestamp = Math.round(newDate() /1000);
    const params = {
      timestamp: timestamp
    };
    const signature = await cloudinary.utils.api_sign_request(params, process.env.CLOUDINARY_SECRET);
    return { timestamp, signature };
  }

export const uploadImage = (image) => {
    const { timestamp, signature} = signUpload();

    const data = new FormData()
    data.append('file', image)


    obj = fetch(URL,{
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
    })
    console.log()
}

const getCloudinaryURL = (publicId) => {cld.image(publicId).toURL();}

export default getCloudinaryURL;