import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
<<<<<<< HEAD
=======
  deleteObject
>>>>>>> original
} from 'firebase/storage';

import { storage } from '../firebase/firebase';

class FileService {

  uploadImage(file, onUploadProgress) {
    return new Promise((resolve, reject) => {
<<<<<<< HEAD

      const fileRef = ref(storage, 'images/' + file.name);
=======
      // get a reference to the firebase file location we want to store our file
      const fileRef = ref(storage, 'images/' + this.getUniqueFileName(file));
>>>>>>> original
      const uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
<<<<<<< HEAD
          // handle update
          this.handleProgressUpdate(snapshot, onUploadProgress);
        },
        (error) => {
          // handle error
          reject(error.message);
        },
        () => {
          // get downloadUrl for complete upload
          // resolve our promise
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            // resolve the download url
            resolve(downloadUrl);
          });
        },
      );
=======

          // called when an update happens (progress on upload)
          this.handleProgress(snapshot, onUploadProgress);
        },
        (error) => {
          // an error occurred
          console.log(error)
          reject(this.handleError(error));
        },
        () => {
          // upload complete successful
          console.log("UPLOAD SUCCESSFUL");
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            resolve(downloadUrl);
          });
        });
>>>>>>> original

    });
  }

<<<<<<< HEAD
  handleProgressUpdate(snapshot, onUploadProgress) {
    if (onUploadProgress) {
      const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      onUploadProgress(progress);
    }
  }
}

=======
  getUniqueFileName(file) {
    const dotIndex = file.name.lastIndexOf('.');
    const fileName = file.name.substring(0, dotIndex);
    const fileExtension = file.name.substring(dotIndex);
    const timestamp = (new Date()).getTime();
    return fileName + '-' + timestamp + fileExtension;
  }

  handleProgress(snapshot, onUploadProgress) {
    // calculate the percentage complete
    const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
    if (onUploadProgress) { onUploadProgress(progress); }
  }

  handleError(error) {
    return error.message;
  }


  async deleteFile(downloadUrl) {
    // get a reference to the file we want to remove
    const fileRef = ref(storage, downloadUrl);
    // remove the file using the file reference
    await deleteObject(fileRef);
  }

}
>>>>>>> original

const service = new FileService();
export default service;
