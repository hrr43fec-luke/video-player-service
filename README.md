# Hrr-43-FEC Video-player-service

Created by: `Philip Nguyen`

This app is an attempt to replicate the Twitch video player from scratch.

## How to run app locally

* Once you've cloned it you will need to install the node modules. Simply type `npm install` in the terminal.

* This app uses mySQL database. You must have have it open in order to create the database and table. To create schema please refer to `schema.sql`.

* In order to seed the database run `npm run seed`. This will populate the database with 100 fake data. The seed data is only good once and best used on an empty table.

* The next step is to simply start the server, with `npm run server_dev`, and run your client, with `npm run react_dev`. (Will edit this after deployment)

* Now that the app is live you can view it here [Video-player-service](http://localhost:3001). In order to view the data that you seed simply pass an id as a param; [example](http://localhost:3001?9).

## License

Copyright [2020] [Philip Nguyen]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.




