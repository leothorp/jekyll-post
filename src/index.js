const genCli = require("./genCli");
const fs = require("fs");
const { test, echo, touch } = require("shelljs");
const invariant = (cond, msg) => {
  if (!cond) {
    throw new Error(msg);
  }
};

const toKebab = (str) => {
  return str.toLowerCase().split(" ").join("-");
};

const writeLine = (file, str) => {
  echo(str).toEnd(file);
};

const getCatsLine = (categories) => {
  const catsArr = categories && categories.split(",");
  if (catsArr) {
    return `categories: ${catsArr.join(" ")}`;
  }
  return "";
};
const LAYOUT_LINE = "layout: post";
const DELIM = "---";
module.exports = (argv) => {
  const { title, categories } = genCli(argv);
  invariant(test("-e", "./_posts"), "No ./_posts directory found.");
  const date = new Date();
  const year = date.getFullYear(),
    month = date.getMonth() + 1, //getMonth return value is zero-indexed
    day = date.getDate();
  const timestampStr = [year, month, day].join("-");
  const fileNameTitleStr = toKebab(title).replace(/[^a-zA-Z0-9\-]/g, "");
  const fileName = timestampStr + "-" + fileNameTitleStr + ".md";
  const fullFilePath = `./_posts/${fileName}`;

  invariant(
    !test("-e", fullFilePath),
    "A file or directory with that name already exists."
  );

  touch(fullFilePath);

  const titleLine = `title: ${title}`,
    catsLine = getCatsLine(categories),
    dateLine = `date: ${timestampStr}`;

  const lines = [
    DELIM,
    LAYOUT_LINE,
    titleLine,
    dateLine,
    catsLine,
    DELIM,
  ].filter((x) => x);

  const writeLineToFile = (line) => writeLine(fullFilePath, line);

  lines.forEach(writeLineToFile);
};

/***** 
 tests:
  -err if no _posts
  -err if file exists
  -creates post
  -fmt correct
  -cats ommited or included correctly
 
  
*/
