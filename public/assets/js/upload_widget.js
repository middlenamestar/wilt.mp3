const cloudName = "df60zox38";
const uploadPreset = "adbsipsa";
// const array = JSON.parse(localStorage.getItem("feed")) || [];

const mongoose = require('mongoose');
const mp3 = require('../../../models/mp3');

console.log(array);

// upload function
const myWidget = cloudinary.createUploadWidget({ cloudName: cloudName, uploadPreset: uploadPreset }, (error, result) => {

  if (!error && result && result.event === "success") {
    // console.log(result);
    console.log("Done! Here is the url: ", result.info.url);

    // mp3.create({
    //   $push: {url: [result.info.url]}
    // });

    // localStorage.setItem("feed", JSON.stringify(`<audio controls src="${result.info.url}">Your browser does not support the<code>audio</code> element.</audio>`));

    // array.push(`<audio controls src="${result.info.url}">Your browser does not support the<code>audio</code> element.</audio>`);
    // console.log(array);
  };

}
);

// function renderFeed(){
//   $(array.appendTo("#music-feed"));



// };

// for (var i = 0; i < array.length; i++) {
// };

// $(`<audio controls src="${result.info.url}">Your browser does not support the
//           <code>audio</code> element.
//           </audio>`).appendTo("#music-feed");

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