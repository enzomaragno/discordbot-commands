//A simple antilink system!
//Version: V14


client.on('messageCreate', async (message) => {

  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  //Roles that will be not affected
  if (message.member.roles.cache.has("id-from-the-role-here")) return; //To add more, just keep the rule
//   if (message.member.roles.cache.has("id from the role here")) return;
//   if (message.member.roles.cache.has("id from the role here")) return;
	
  //Only one server
  if (message.guild != ("1075086728982958080")) return;  //This is for only one server to have the system, to have in all servers, delete this line.

//Filtering
      if (message.content.includes("https".toLowerCase() || "http".toLowerCase() || "www".toLowerCase() || ".com".toLowerCase() || ".br".toLowerCase())) {

        //deleting the link message
      message.delete();

        //warning the member in dm, if the dm from the user are blocked, the bot will warn in the chat
      const antilink = new Discord.EmbedBuilder()
      .setTitle(`Forbidden 🚫`)
      .setDescription(`**${message.author} You do not have permission to send links in our server!**`)
      .setFooter({text: `Please, respect the rules!`})
      .setColor("#ff0000")
      message.author.send({embeds: [antilink] }).catch(() => message.channel.send(`❌ ${message.author} You do not have permission to send links in our server!`))
      }

      }
      

   
)
