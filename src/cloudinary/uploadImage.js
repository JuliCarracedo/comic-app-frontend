const uploadImage = (image) => {
    const URL = 'https://735647516826434:Wb9b3YFxaMeRVJZ7YBAlN6H4y9U@api.cloudinary.com/v1_1/comic-app/upload_presets';
    fetch(URL,{
        headers:{
            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
        },
        body:{
            'file' : image
        }
    })
}

export default uploadImage;