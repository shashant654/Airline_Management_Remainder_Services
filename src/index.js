const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const TicketController = require("./controller/ticket-controller");

// const { sendBasicEmail } = require("./services/email-service");

// const cron = require('node-cron ')
const jobs = require("./utils/job");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);


  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    jobs();
  });
};

setupAndStartServer();

//     sendBasicEmail(
//       "support@admin.com",
//       "shantidevi81992@gmail.com",
//       "This is a testing email",
//       "Hey , how are you, I hope you like the support"
//     );

// cron.schedule("*/2 * * * *", () => {
// console.log("running a task every two minutes");
// });

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
