import DatauriParser from "datauri/parser.js";
import path from "path";
const getDataUri = (file) => {
  const parser = new DatauriParser();
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
};

export default getDataUri;
// ya kch nhi bus file ko datauri me convert krne ke liye use hota hai, jisse hum cloudinary me upload kr skte hai.

// Imagine you are building a profile page where a user can change their name and upload a profile picture. Here is the step-by-step "Story" of how these pieces work together:

// Step 1: The User Types (The Handler)
// The user types "Alex" into a name box.

// Your changeEventHandler (that code you first asked about) catches every single keystroke.

// It saves "Alex" into a temporary "brain" called State.

// Why? Because React needs to "remember" what is being typed so it can show it on the screen.

// Step 2: Selecting a Photo (The DataURI)
// The user clicks "Upload Photo" and picks a picture from their computer.

// The computer can't just send the "file" directly to your code easily.

// So, we turn that photo into a DataURI (that long string of text/Morse Code).

// The Magic: Because the photo is now "text," you can put it inside a normal <img> tag. Suddenly, the user sees a preview of their photo instantly!

// Step 3: Sending to the Cloud (Cloudinary)
// Now the user clicks a "Submit" button.

// Your app takes that DataURI text string and sends it over the internet to Cloudinary.

// Cloudinary receives the text, turns it back into a real image file, and saves it on their giant servers.

// Cloudinary sends you back a URL (like https://cloudinary.com/alex-photo.jpg).

// Step 4: Saving to your Database
// You take that URL from Cloudinary and save it in your own database (like MongoDB or SQL) next to the name "Alex."

// The Result: The next time Alex logs in, your app asks the database for the URL, and the photo appears!
