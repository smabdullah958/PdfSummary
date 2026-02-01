const { PDFParse } = require("pdf-parse");

let PDFTextExtractor = async (buffer) => {
  try {
    const parser = new PDFParse({
      data: buffer,
    });
    let result = await parser.getText();
    if (result.numpages > 100) {
      let error = new Error("Maximum 100 Pages are allowed for a Summary");
      error.status = 410; // Bad Request
      throw error;
    }
    await parser.destroy();
    return {
      text: result.text,
      pages: result.numpages,
    };
  } catch (error) {
    console.log("file si not present", error);
  }
};
module.exports = PDFTextExtractor;
