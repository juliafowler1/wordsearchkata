const fs = require("fs");
const path = require("path");
const readline = require("readline");

class Puzzle {
  /**
   * @constructor
   * @description - initializes puzzle and words with file contents
   * @param {Array} filename - file containing puzzle and words to search for
   */
  constructor(filename) {
    this.puzzle = [];
    this.words = [];
    this.initializePuzzle(filename);
  }

  /**
   * @description - processes the file
   * @param {String} filename - file containing puzzle and words to search for
   */
  initializePuzzle(filename) {
    let readingFirstLine = true;
    const rl = readline.createInterface({
      input: fs.createReadStream(filename)
    });
    rl.on("line", function(data) {
      if (readingFirstLine) {
        this.words = data.split(",");
        readingFirstLine = false;
      } else {
        this.puzzle.push(data.split(","));
      }
    });
  };
};

module.exports = Puzzle;
