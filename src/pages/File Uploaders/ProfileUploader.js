import React from "react"

const ProfileUploader = () => {
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