//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923186172269";
global.owner = process.env.OWNER_NUMBER || "923186172269";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0luSXdtNFVNK1RDM3VVMkFMYjZKVERJWEhiYS9lbEl3WXJxdmFXSDhrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWJzVFZYRm5tRDlFKzhJbTFRWm5xdlhmd1pWL05naXE0VjR1SVZDVG5BST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3TFZJL1pKOUZwZ0Z3aXlBQ1hFS1E0MXI4eFlmNVUyZllsWWV4ZVp1V0ZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5NXFGNTh0YzlDNWtQNHQ2b1NNL3p2U1puMTg5MEEzUkpYM1BSdnpkT1djPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVBOCtFWDVXdW0yanNOV0luc1NQVGo5Nm1XS2VFS3ZWdXY3OVJvOTBuMXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpaL0N4L0pzdVNUVXdEeVB4NmxIRUdZWEkvSENhZzFnVVlTUEtSUC9iMG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0Q3cHlrNHZMS3JYZ2cwNUJjUnFxK3AzM1kyUmZmT1NqYWRBejdBb0psYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDRsREJLQlJURW9FdnkrSGtTOHVJZGFuMTlZK0EwT0pXVTY5aVNXaytWOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRDOEVXTVNGejkzbmswME1mNVZsWkJuZWRwaTQ0SzRsTC9GTTNMZEdOZE56V3ozUnNqL3hiUGJTRmFJNGszVTVPUWhoTFVHU0xaSGhLMVNLU2JhK0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiJORmUzaHpFMFc3MFZ2ZGhPV0dqZkZpSk9rdnVRaGhkTzdEQXFwdTNCeWJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE4NjE3MjI2OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4Rjk1QTg0NjE1M0M0OUUxNUM3QzY3QzA5REVFQUNFQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMjY1MTM3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxODYxNzIyNjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0NGNzY0MDM2MjM3RUNBRTFENDQ4QkEzNDM3RTFCRDkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjI2NTEzOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoid0tKclJFYWhTcktPVlZXMDdGSGoyZyIsInBob25lSWQiOiIxYzhjYjc3Ny04MjExLTRhOTAtOGM2ZC0zMjAyNjRmZTRjYjQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWlkQ2ZhaVdnZXRTd0Q3SWxGTkQ0QU1ucVF3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNjaFRFTk9Kd0JTQjJnU2ZTWk5ocllpNm1tND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJSUk1WNzJBMiIsIm1lIjp7ImlkIjoiOTIzMTg2MTcyMjY5OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWFsaWsgQXNhZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTjJabUlnRUVLSGNuclVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidGtPNEMxZzB2TURIMjRxeEQ1L3h3OXlFZHU0cHptOFNKS3dVQ2JCakZUQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRnU0Znd5ZVlaWUdROERhdTdlcUtJR1dNTmhLa2pwS1VWZVA0UWlrSzVGWXJQaEwrZ3VwZlhTc2RVazd6UlQ2bEVmZm1WeGt2QWNxRHRzaTJLNG5HREE9PSIsImRldmljZVNpZ25hdHVyZSI6Im9LUHhiTTVsMnpkSW10QTAvQU5aVzAwWTdQMkM0aFRoL3R2c2l3aVZBaW9PS0F1ZCtPd0dIeTV4QnpvNDhKeWk0STBldUlIMHZuSVB3SGY3enlNakJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTg2MTcyMjY5OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlpEdUF0WU5MekF4OXVLc1ErZjhjUGNoSGJ1S2M1dkVpU3NGQW13WXhVdyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjI2NTEzNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQdXQifQ="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "Asad",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Asad",
  ownername: process.env.OWNER_NAME || "Malik Asad",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
