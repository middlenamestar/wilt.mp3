const cloudName = "df60zox38";
const uploadPreset = "adbsipsa";

const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      // console.log("Done! Here is the image info: ", result.info.url);
      // const url = result.info.url;
      $(`<audio controls src="https://res.cloudinary.com/df60zox38/video/upload/v1647027919/kvtwrohnhspsij8np84a.mp3">Your browser does not support the
        <code>audio</code> element.
    </audio>`).appendTo("#container");
    }
  }
);

document.getElementById("upload_widget").addEventListener("click", () => myWidget.open(), false);

// php -S 127.0.0.1:3001
// localhost

// got the upload widget to work, but the mp3 files dont stay on the page on refresh.






// require('dotenv').config();
// const cloudinary = require('cloudinary').v2;
// console.log(cloudinary);

// cloudinary.uploader
//     .upload('/Users/scatterbrain/Music/Downloaded by MediaHuman/Earl Sweatshirt - EARL.mp3', {
//         resource_type: 'video'
//     })
//     .then((result) => {
//         console.log('success', JSON.stringify(result, null, 2));
//     })
//     .catch((error) => {
//         console.log('error', JSON.stringify(error, null, 2));
//     });

// SO, the cloudinary uploader works only if i manually insert the path. have to figure out upload widget AND grab the path from the userupload and insert in to this cloudinary uploader. THEN after that works... grab the secure url to insert into the html mp3 player.

// const express = require('express');
// const app = express();
// const PORT = 3001;

// app.listen(PORT, () =>
//   console.log(`listening at http://localhost:${PORT}`)
// );

    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme