const { placeholderData } = require("./placeholder-data");

placeholderData.forEach((item) => {
  console.log(`Title: ${item.title}`);
  console.log(`Content: ${item.content}`);
  console.log("---");
});
