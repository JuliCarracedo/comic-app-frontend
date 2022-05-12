import React from "react"

const ProfileUploader = (props) => {
    const {setModal} = props
    const closeModal = () => {
        setModal(false);
    }
    return (
    <div className="profile-uploader">
        <form id="profile-form">
            <label htmlFor="image">Upload a profile picture</label>
            <input type="image" name="image" id="image"/>
            <input type="submit" value="Upload"/>
        </form>
    </div>)

}

export default ProfileUploader;