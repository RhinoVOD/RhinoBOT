# RhinoBOT

As a project for my Summer 2018 break, I decided to create a Discord bot using JavaScript.
I have never used either of these tools so this project was chosen as an opportunity to enhance my coding skills.
Follow the steps below if you'd like to use the code to begin your own Discord bot or click the links to learn about the resources I used.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [Node.js](https://nodejs.org/en/) - JavaScript runtime, requires version v16.9.0 or newer
* [discord.js](https://discord.js.org/#/) - A node.js module to interact with the Discord API
* [Discord Bot](https://discordapp.com/developers/applications/me) - Requires your own Bot Token to use Discord's API

### Installing

Create your bot from the link above then go to the link below,
replacing APP_ID with your bot's Client ID, to invite your bot to your guild / server.

```
https://discordapp.com/oauth2/authorize?client_id=APP_ID&scope=bot
```

Download and unzip the project to a desired location.

Create a config.json file in the main folder. Include your bot's token,
your bot's client ID, your guild's ID, and your account's ID.
Variable names must be the same as shown below.

```
{
  "token":"diunIDUNAIUDSnon2ibwdaskdjbaUISDBA",
  "clientID": "589451241245646875",
  "guildID": "124785412358945124",
  "ownerID": "124564687564631546"
}
```

Open the command prompt in the main folder and run these commands to launch the bot.
This command differs if you change the name of the rhinobot.js file.
deploy-commands.js must be run again after adding or removing commands.

```
node deploy-commands.js
node rhinobot.js
```

## Built With

* [Discord Developer Portal](https://discordapp.com/developers/docs/intro) - Documentation for Discord's API
* [discord.js](https://discord.js.org/#/) - node.js module to interact with Discord's API
* [WebStorm](https://www.jetbrains.com/webstorm/) - JavaScript IDE
* [GitHub Desktop](https://desktop.github.com/) - GitHub app

## Authors

* **Ryan Marsh** - *Project Creator* - [RhinoVOD](https://github.com/RhinoVOD)
