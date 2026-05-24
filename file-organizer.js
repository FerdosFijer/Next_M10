//! we will make a command line tool by learning last modules and video

//* Building a Simple File Organizer CLI Part 1

const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "output", "messy-files"); // path.join explore kortesi
const organizedDir = path.join(__dirname, "output", "organized");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};
const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];

function initializeDirectories() {
  if (!fs.existsSync(sourceDir)) {    // .existsSync diye source directory ache ki na check korbo
    fs.mkdirSync(sourceDir, { recursive: true }); // mkdir means make directory or folder

// test files theke niye forEach method diye akta akta kore file nibo and 
    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDir, file), `Content of ${file}`);
    });
  }

  console.log("Messy directories files are created!!!");

  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });
  }

  Object.keys(categories).forEach((category) => {
    const categoryPath = path.join(organizedDir, category);
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath);
    }
  });
}

function getCategory(filename) {
  const ext = path.extname(filename).toLowerCase(); // ".pdf", ".jpg"
  // [images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"]],

  //tuple banabo
  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) {
      return category;
    }
  }
  return "others";
}

//* Building a File Organizer CLI Part 2

function organizeFiles() {
  console.log("file organizer \n");
  console.log("source: ", sourceDir);
  console.log("Destination: ", organizedDir);
  console.log("\n" + "-".repeat(50) + "\n");

  const files = fs.readdirSync(sourceDir);

  if (files.length === 0) {
    console.log("No files to work on!!");
    return;
  }
  console.log(`found ${files.length} files to organize \n`);

  const stats = {
    total: 0,
    byCategory: {},
  };

