const app = require("./src/app");
const db = require("./src/models");

const PORT = process.env.PORT || 5000;

db.sequelize
  .sync() // creates table if not exists
  .then(() => {
    console.log("DB synced");
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => console.error(err));