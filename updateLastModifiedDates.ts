const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Rest of your code here

const postsFolderPath = path.join(__dirname, "src/Views");
const outputFile = path.join(__dirname, "src/lastModifiedDates.json");

interface LastModifiedDates {
  [key: string]: string;
}

const getLastModifiedDates = () => {
  const lastModifiedDates: LastModifiedDates = {};

  // Use glob to find all .tsx files in nested directories
  const postFiles = glob.sync(`${postsFolderPath}/**/*.tsx`);

  postFiles.forEach((filePath: string) => {
    const stats = fs.statSync(filePath);
    lastModifiedDates[path.basename(filePath)] = stats.mtime.toISOString();
  });

  // Write the collected data to outputFile after the loop
  fs.writeFileSync(outputFile, JSON.stringify(lastModifiedDates, null, 2));
};

getLastModifiedDates();
