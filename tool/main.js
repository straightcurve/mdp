//  20 commits
//  last commit deletes everything (except the tool itself?)

//  delete every file we created
let fs = require("fs");
let path = require("path");
let child_process = require("child_process");

let uselessAssetsPath = path.join(__dirname, "useless_assets");
if (!fs.existsSync(uselessAssetsPath)) fs.mkdirSync(uselessAssetsPath);

for (let i = 0; i < 15; i++) {
  let filename = `useless_file_no${i}`;
  let file = path.join(uselessAssetsPath, filename);
  let ordinal = "";

  //    add the file
  let wStream = fs.createWriteStream(file);
  switch (i) {
    case 1:
      ordinal += "st";
      break;
    case 2:
      ordinal += "nd";
      break;
    case 3:
      ordinal += "rd";
      break;
    default:
      ordinal += "th";
      break;
  }

  let data = `Hey, I'm the ${i}${ordinal}.. UTTERLY USELESS FILE!`;
  wStream.write(data);

  let gitCommands = `git add . && git commit -m "Added ${filename}" && git push origin lab1`;
  let git = child_process.execSync(gitCommands);
  console.log(git.toString());
}

fs.rmdirSync(uselessAssetsPath);

let gitCommands = `git add . && git commit -m "Removed useless files" && git push origin lab1`;
let git = child_process.execSync(gitCommands);
console.log(git.toString());
