# XMeet

A real time communication web app which allows users to connect through video call and chat with each other.

Used

- peerjs for peer to peer connection where a unique room ID is generated through uuid.
- socket.io for chats.
- nodemailer for sending invitation through mail.
- Auth0 for user authentication.

## For Testing Purpose

### Run

Clone the project

```bash
  git clone https://github.com/thisisutkarsh/XMeet.git
```

Install dependencies

```bash
  npm install
```

Setup .env file

- Create a .env file in the main directory
- Go to [Auth0](https://auth0.com/docs/quickstart/webapp/express)
- Set up your application and get the value of the following-
  - ISSUER_BASE_URL=
  - CLIENT_ID=
  - SECRET=
  - BASE_URL= http://localhost:3000
- Put the above values in .env file

Start the server

```bash
  npm run dev
```

## Features

- Video call
- Chat
- Video On/Off feature
- Mute & Unmute Audio
- Record user video stream
- Full screen feature
- User Authentication
- WhiteBoard
- Invite participants via mail
- Dynamic user profile page

## Demo

https://xmeet-production.up.railway.app/

## Author

[@thisisutkarsh](https://github.com/thisisutkarsh)

## Appendix

Link to packages and APIs used

- [Firebase](https://firebase.google.com/)
- [Auth0](https://auth0.com/docs/get-started)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [Material UI Icons](https://fonts.google.com/icons)
