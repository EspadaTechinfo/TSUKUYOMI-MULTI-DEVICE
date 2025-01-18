const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="Itachiuchiha@gmail.com"
global.location="Konoha, HIDDEN LEAF."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Orangefri/TSUKUYOMI-MD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/CicqD04sNCJ37j13LiI51p";
global.website=process.env.GURL || "https://chat.whatsapp.com/CicqD04sNCJ37j13LiI51p" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/b5x33a.jpg" || "https://files.catbox.moe/e7kfcs.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© AnbuBlackOps" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27710200228";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/ldqbq0.mp4" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,27710200228";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,27710200228";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "27710200228,27710200228";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_17_01_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDIyLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODMsXG4gICAgICAgIDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDU2LFxuICAgICAgICAxODAsXG4gICAgICAgIDcwLFxuICAgICAgICA0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgMixcbiAgICAgICAgMjksXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDczLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3LFxuICAgICAgICA1OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwLFxuICAgICAgICA5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2LFxuICAgICAgICA1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDksXG4gICAgICAgIDg0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDg1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM3LFxuICAgICAgICA1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYnNNVVllS1p5WFV6UitOT0xCL2NsN2ExbUpQcDNhNE9MTDhUVXg1Y2xXOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVGJIeXVWUTJTYmVYYjJuek4zLW9Pd1wiLFxuICBcInBob25lSWRcIjogXCI4YjUwYTE3OC0xYjk5LTQ4MTktYWU0OC0xYjkyZmVmZmRhMjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ0LFxuICAgICAgMTU5LFxuICAgICAgOTgsXG4gICAgICA3NCxcbiAgICAgIDIyMyxcbiAgICAgIDIzNixcbiAgICAgIDI1MCxcbiAgICAgIDU5LFxuICAgICAgNTIsXG4gICAgICAxMTMsXG4gICAgICAxNzEsXG4gICAgICAxNzksXG4gICAgICA5OSxcbiAgICAgIDE2MyxcbiAgICAgIDE2OSxcbiAgICAgIDYyLFxuICAgICAgMTQ1LFxuICAgICAgMjA4LFxuICAgICAgMTczLFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDE1OCxcbiAgICAgIDkxLFxuICAgICAgMTU5LFxuICAgICAgMTE1LFxuICAgICAgNTcsXG4gICAgICAxOTEsXG4gICAgICAyMyxcbiAgICAgIDIxNyxcbiAgICAgIDE1NixcbiAgICAgIDExMyxcbiAgICAgIDIyNCxcbiAgICAgIDE2NyxcbiAgICAgIDEzNixcbiAgICAgIDI0MSxcbiAgICAgIDE1NyxcbiAgICAgIDEyMSxcbiAgICAgIDE3MyxcbiAgICAgIDg0LFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFhUMG9JR0VPV09yYndHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBYVJBRGVscjhuMldwZHJKanFrS2xIZUlvYlZkRDZjaUJNMVBRK3NrVzFzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtKWitMcHpSa3BkeGxDUG5ZejgvYllxNGMxT1RSa2IvOURENkNPM0lTNXJvZlN1Um95N0l4d3JxbDNFejlYVlZzcFNXNFplUjRRdzZWc2hSRy8yRUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkg0Qk5HRERjOWpmM2lJbjJPSG52blIxdUdiZ0cyaFJNUkJXUEY2RTVUdDBUNTB0RG1LNzhIWk93Z2cycm0wK3Q1U0tIZStPeUlsdm0zQXl1QysvcGhBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc2OTU4MTU4MjM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI4NzU0NzkwMDMxNDA3OjVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzY5NTgxNTgyMzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM3MTgxMDMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDgyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEODIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJcjdNeVdTVG8yYTRkaUZlRTdGb3V3aTBLWlhZTUFGZlZGREhtbWVFc0hzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MTYxNjEyMDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNjg4ODQ3MDYyN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ AnbuBlackOps ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • 𝑰𝑻𝑨𝑪𝑯𝑰』*\n youtube.com/UchihaItachi"),
 
  author : process.env.PACK_AUTHER|| "AnbuBlackOps",
  packname: process.env.PACK_NAME || "Mangekyou Sharingan",
  botname : process.env.BOT_NAME  || "𝑻𝑺𝑼𝑲𝑼𝒀𝑶𝑴𝑰 𝑴𝑫",
  ownername:process.env.OWNER_NAME|| "AnbuBlackOp1",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "ITACHI"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://files.catbox.moe/e7kfcs.jpg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
