// ___________**************_____________
const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
// const db = require("./models/index");
// const ApiRoutes = require("./routes/index");

const { sendBasicEmail } = require("./services/email-service");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //   app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);

    sendBasicEmail(
      "support@admin.com",
      "shantidevi81992@gmail.com",
      "This is a testing email",
      "Hey , how are you, I hope you like the support"
    );
  });
};

setupAndStartServer();

// ejgr vjro qqig szjb
//     if (process.env.SYNC_DB) {
//       try {
//         await db.sequelize.sync({ alter: true });
//         console.log('Database synchronized successfully');
//       } catch (error) {
//         console.error('Error synchronizing the database:', error);
//       }
//     }

// const express = require('express')
// const bodyParser = require('body-parser')

// const setupAndStartServer = () => {
//           const app = express()
//           app.use(bodyParser.json())
//           app.use(bodyParser.urlencoded({extended: true}))

//           app.listen(3005, () => {

//           })
// }

// setupAndStartServer()
