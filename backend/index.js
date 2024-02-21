import express from "express";
const app = express();

app.listen(PORT, () => {
  console.log(`server port ${PORT}`);
});
