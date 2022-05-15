const { on } = require("nodemon");
const {Telegraf}=require("telegraf");
const bot=new Telegraf("5306777736:AAG5OYeAYo40bFg0gucNGYoK5TZKb7AjJP4");

bot.start((ctx)=>{
    ctx.reply(`Programacion Computacional IV ,Bienvenido ${ctx.from.first_name}`);
});

//comando personalizado
bot.command(['Saludar','saludo','hola'],(ctx) => {
  ctx.reply("Buenos dias");
});

bot.on('sticker',(ctx)=> {
 ctx.reply("Buen Sticker");
});

//.shorturl.at/qXY29

bot.launch();