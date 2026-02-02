const { PDFParse } = require("pdf-parse");

let PDFTextExtractor = async (buffer) => {
  const parser = new PDFParse({
    data: buffer,
  });

  // We set parsePageInfo to true to make sure it counts everything
  const info = await parser.getInfo({ parsePageInfo: true });

  //get text
  let result = await parser.getText();

  //count number ofa pages
  let pageCount = info.total;
  console.log("the total number ofa  pages is a : ", pageCount);
  if (pageCount > 100) {
    let error = new Error("Maximum 100 Pages are allowed for a Summary");
    error.status = 410; // Bad Request
    throw error;
  }
  await parser.destroy();
  return {
    text: result.text,
    pages: result.numpages,
  };
};
module.exports = PDFTextExtractor;
