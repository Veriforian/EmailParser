const { parseEmails } = require('../services/mailparser');
const Email = require('../models/emailModel');

const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

//Get all emails route handler
exports.getAllEmails = catchAsync(async (req, res) => {
  //If call contains reset query, fetch email data from dir
  if (req.query.reset === 'true') {
    //parse emails into arr of objects
    const emailsArr = await parseEmails(`${__dirname}/../static/smallset`);
    //Delete any previous emails in db
    await Email.deleteMany({});
    //Save new emails to db
    await Email.insertMany(emailsArr);
  }

  //If no reset query, just fetch current emails in db
  const emails = await Email.find();

  res.status(200).json({
    status: 'success',
    results: emails.length,
    data: {
      emails
    }
  });
});

//Simple delete route for emails, by id
exports.deleteEmail = catchAsync(async (req, res) => {
  const email = await Email.findByIdAndDelete(req.params.id);

  if (!email) throw new AppError('Document not found', 404);

  res.status(204).json({
    status: 'success',
    data: null
  });
});
