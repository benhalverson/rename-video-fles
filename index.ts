import fs from "fs/promises";
import path from "path";

// specify the directory where the files are located
const directory = "./";

async function renameFiles() {
  try {
    const files = await fs.readdir(directory);

    for (const file of files) {
      // check if file starts with 'GL' and ends with '.lrv'
      if (file.startsWith("GH")) {
        const oldFilename = path.join(directory, file);
        const newFilename = path.join(directory, file.replace("GH", "GX"));
        try {
          await fs.rename(oldFilename, newFilename);
          console.log(`Renamed file ${oldFilename} to ${newFilename}`);
        } catch (err) {
          console.error("ERROR:", err);
        }
      } else {
        console.log("no files found with GL prefix");
      }
    } 
  } catch (err) {
    console.error("Could not list the directory.", err);
  }
}


async function extensionNameChange() {
  try {
    const files = await fs.readdir(directory);
    for (const file of files) {
      // rename file extension from LRV to MP4
      if (path.extname(file) === ".LRV") {
        const oldFilename = path.join(directory, file);
        const newFilename = path.join(directory, file.replace(".LRV", ".MP4"));
        try {
          await fs.rename(oldFilename, newFilename);
          console.log(`Renamed file ${oldFilename} to ${newFilename}`);
        } catch (error) {}
      } else {
        console.log("no files found with LRV extension");
      }
    }
  } catch (error) {
    console.error("Could not list the directory.", error);
  }
}

renameFiles();
extensionNameChange();
