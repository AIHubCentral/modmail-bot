# AI Hub ModMail

## Setup
To setup the bot please fill in the `.env` file.

## Edit messages
All messages are saved in `./bot/assets/messages` and can be edited at any time.

To visualize messages, you can use any Discord message editor like the editor in [Sapphire](https://dashboard.sapph.xyz).

## Slash Command Permissions
Every user in the `.env` file will automatically have permissions for slash commands (and oauth).

Additionally users can be add in the "User Management" tab in the Dashboard. They will get permission to login **after restarting**, even permissions that use Slash Commands.

The command `/support` is open for all users.
