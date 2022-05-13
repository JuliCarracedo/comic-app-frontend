import { uploadImage } from "../../javascript/cloudinary"

const uploadProfileThunk = (file) => async(dispatch) => {
    const response = uploadImage(file);
    console.log(response);
}

export default uploadProfileThunk;