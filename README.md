# Email Parser

Simple containerized application, with a React.js frontend, and a Node, Express, Mongo backend.

### To run the application:

- Clone the Github repository.
- Open a terminal window with Docker and Docker-Compose installed and cd into the top level folder.
- Run `docker-compose up -d` to install all dependancies, start the Mongo server, the Express server on port `127.0.0.1:5000`, and serve the React client on port `127.0.0.1:3000`
- Navigate to http://127.0.0.1:3000 to see the live app!

## Features

The goal of the backend is to take a directory of outlook.msg files, parse them into Javascript objects, and respond to the client with a list of email objects.

The email parsing itself is handled with the NPM module Mailparser. I chose to use Node's internal `fs.createReadStream()` as the source for the parsing function instead of passing in the full files, to increase scalability.

The frontend is a simple React app, with two buttons, `Fetch Email`, and `Fetch Last Session Emails`. Clicking Fetch Emails will reach out to the api, parse the directory of emails, save them to the Mongo Database, and display the list of Emails. Clicking Fetch Last Session will simply fetch whatever email documents are already saved to the database. This is important, because the front end also allows you to delete emails, which will modify the database. To reset, and get a clean collection from the directory.
