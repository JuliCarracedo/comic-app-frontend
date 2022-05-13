import React, {useState} from "react";

const ProfileUploader = (props) => {
    const {setModal} = props
    const closeModal = () => {
        setModal(false);
    }

    const [file, setFile] = useState(false);

    const handleFile = (e) =>{
      e.stopPropagation();
      setFile(e.target.value)
    }

    const upload = (e) => {
        e.preventDefault();
        console.log(file);
    }
    

    const removeDragData = (ev) => {
        console.log('Removing drag data')
      
        if (ev.dataTransfer.items) {
          // Use DataTransferItemList interface to remove the drag data
          ev.dataTransfer.items.clear();
        } else {
          // Use DataTransfer interface to remove the drag data
          ev.dataTransfer.clearData();
        }
      }

    const dropHandler = (ev) => {
        console.log('Fichero(s) arrastrados');
      
        // Evitar el comportamiendo por defecto (Evitar que el fichero se abra/ejecute)
        ev.preventDefault();
      
        if (ev.dataTransfer.items) {
          // Usar la interfaz DataTransferItemList para acceder a el/los archivos)
          for (let i = 0; i < ev.dataTransfer.items.length; i++) {
            // Si los elementos arrastrados no son ficheros, rechazarlos
            if (ev.dataTransfer.items[i].kind === 'file') {
              var file = ev.dataTransfer.items[i].getAsFile();
              console.log('... file[' + i + '].name = ' + file.name);
            }
          }
        } else {
          // Usar la interfaz DataTransfer para acceder a el/los archivos
          for (let i = 0; i < ev.dataTransfer.files.length; i++) {
            console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
          }
        }
      
        // Pasar el evento a removeDragData para limpiar
        removeDragData(ev);
      }

    return (
    <div className="profile-uploader">
        <form id="profile-form" onSubmit={e=>upload(e)}>
            <div onDrop={e => dropHandler()}>
                <input required onChange={e => handleFile(e)} type="file" name="image" id="image"/>
            </div>
            <input type="submit" value="Upload"/>
            <button type="button" onClick={closeModal} > Close </button>
        </form>
    </div>)

}

export default ProfileUploader;