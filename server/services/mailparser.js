const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const AppError = require('../utils/AppError');

//Initialize mailparser
const simpleParser = require('mailparser').simpleParser;

//Promisify nodes fs function to avoid callbacks
const readdir = promisify(fs.readdir);

//Helper functions for reading dir and files
const readFiles = async (dir) => {
  //Read files from directory
  const fileNames = await readdir(dir, { encoding: 'utf-8' });
  //Pass files into helper to return data in files as a stream
  return createFileStreams(dir, fileNames);
};

const createFileStreams = (dir, fileNames) => {
  return fileNames.map((filename) => {
    //Create filepath from filesnames and dir provided
    const filepath = path.resolve(dir, filename);
    //Return stream for each file with filepath
    return fs.createReadStream(filepath);
  });
};

//Helper to parse data from directory, and return array of email objcts
exports.parseEmails = async (dir) => {
  //Create arr of streams from email files
  const emailStreams = await readFiles(dir);

  //Use mailparser to parse file streams and return arr of promises
  const parsingPromises = emailStreams.map((stream) => {
    return simpleParser(stream);
  });

  //Await all promises with Promise.all, return arr of objects
  return await Promise.all(parsingPromises);
};
