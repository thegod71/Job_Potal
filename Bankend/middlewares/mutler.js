import multer from "multer";

const storage = multer.memoryStorage();
export const singleUpload = multer({ storage }).single("file");
// the place where we want to upload the file, in this case we are using memory storage, which means the file will be stored in memory and we can access it through req.file in the controller. single("file") means we are uploading a single file with the name "file", which should match the name attribute of the input field in the frontend.
// singleUpload is a middleware function that we can use in our routes to handle file uploads. it will parse the incoming request and extract the file from the request body and store it in memory, then we can access the file through req.file in our controller.
