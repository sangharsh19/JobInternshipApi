const cron = require('node-cron');
const internshipController = require('../controllers/internship_controller');

// Schedule the job deletion to run every second
function internshipScheduler(){
  cron.schedule('* * * * * *', () => {
      internshipController.deleteExpiredInternships();
  });
}
module.exports = internshipScheduler;