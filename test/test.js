const assert = require("assert");
const Puzzle = require("../src/Puzzle");
const data = require("./data");
const path = require("path");

describe("puzzle tests", () => {
  describe("puzzle class instantiation", () => {
    it("should initialize puzzle and words properties", () => {
      const { puzzle, words } = data.puzzle1;
      const filePath = path.resolve(__dirname, "puzzle1.txt");
      const p = new Puzzle();
      p.initializePuzzle(filePath)
        .then(() => {
          assert.deepEqual(p.puzzle, puzzle);
        })
        .catch(e => {
          console.log(e);
        });
    });
    it("should throw an error if puzzle is invalid", () => {});
  });
  describe("word searching", () => {
    it("should search horizontally", () => {
      const { puzzle, words } = data.puzzle1;
      const filePath = path.resolve(__dirname, "puzzle1.txt");
      const p = new Puzzle();
      p.initializePuzzle(filePath)
        .then(() => {
          p.searchHorizontally("GREASE");
          console.log(p.wordCoordinates);
        })
        .catch(e => {
          console.log(e);
        });
    });
    it("should search vertically", () => {});
    it("should search diagonally descending", () => {});
    it("should search diagonally ascending", () => {});
    it("should search backwards", () => {});
  });
});
