const { Client } = require("revolt.js");

let client = new Client();

console.info(`Welcome to a Basic Revolt Bot.`);
console.info(`Revolt Library version: ${require("revolt.js").LIBRARY_VERSION}!`);
console.info(`_______________________________`);

client.on("packet", async (event) => {
	/* console.info(`event happened ${event}`); */ 
	
	if (event.type == "MessageReact" || event.type == "MessageUnreact"){
		if (event.user_id != client.user._id){
			console.log(`type           ${event.type}`);
			console.log(`message id     ${event.id}`);
			console.log(`channel_id     ${event.channel_id}`); // Channel id is actually a server's id and Guild ID
			console.log(`user_id        ${event.user_id}`);
			console.log(`emoji_id       ${event.emoji_id}`);
			
			
			
			if (event.emoji_id == "01GK50B414WGS9M82668EZWMSX"){
				console.log("Purple");
			}
			if (event.emoji_id == "01GK50BQA59VF31A04ERDTNPMG"){
				console.log("Blue");
			}
			if (event.emoji_id == "01GK50BBW5FP8PZSYTHYCJCG3W"){
				console.log("Red");
				console.info(`event happened ${event}`);
				// TODO: Use message id or channel id to find the server and assign role to the user.
				for (const [keyd, valued] of Object.entries(await client.user)) {
					console.log(`    ${keyd}: ${valued}`); 
				}

					console.log(`  test  ${client.user.username}`); 
					// console.dir(client, { depth:1 })
					// console.log(newmsg); 
					// console.log(newmsg.author.username); 
					console.log(` Channels ${client.channels}`);
					
					client.servers.forEach(async (values, keys, objects) => {
						console.log(` Channels ${values}`);
						
						
						
						// Channel id is actually a server's id and Guild ID
					for (const [keyd, valued] of Object.entries(values)) {
						 console.log(`    ${keyd}: ${valued}`); 
					}
						
					})
					
					

					
					// await newmsg.react("01GJ86KCHS9YG7BQ8YDNJN9HQB");
					
					// check if message ids match and fetch the userid and assign the role.

				// await event.edit({
				// 	roles: ["01GK52Z15W78JM1WQ1NK7MMZCW"]
				// });
				
			}
			if (event.emoji_id == "01GK50BYNR1PY1G479KCBA2QPR"){
				console.log("Green");
			}
			if (event.emoji_id == "01GK50BH980WRKX5ATEETZMWZK"){
				console.log("Yellow");
			}
		}
	}
	/* Display content of the packet event object.
	for (const [keyd, valued] of Object.entries(event)) {
		 console.log(`    ${keyd}: ${valued}`); 
		
	}
	*/
})

client.on("member/join", async (event) => {
	console.log(`${event.user.username} joined the server.`);	
	
	/* Auto role assignment feature */
	/* Auto assign a role on join. */
	/* Uses Role ID that exists in the server.*/
	await event.edit({
			roles: ["01GK4740WMXDK04HXYY9KEP022"]
		});
		
	
	}
)

client.on("ready", async () => {
		console.info(`Bot Token: ${client.session}!`);
		console.info(`User ID: ${client.user._id}!`);
		console.info(`Logged in as ${client.user.username}!`);
		console.info(`Bot online: ${client.user.online}!`);
		client.users.edit({
			status: {
				text: "Listening to you.",
				presence: "Idle",
			},
		});
		console.info(`Bot owner ${client.user.bot.owner}!`); 
		console.info(`Created at ${client.user.createdAt}!`);
		console.info(`Presence: ${client.user.status.presence}!`);
		console.info(`Presence text: Logged in as ${client.user.status.text}!`);
		console.info(`Servers joined:  ${client.servers.size}!`);
		console.info(`Get server by ID:  ${client.servers.get("01GJ0CVB1ZV2H1YA13S6ZK4N4N").name}!`);
		
		let server_count_index = 0;
		console.info("Joined Servers:");
		client.servers.forEach(async (values, keys, objects) => {
				console.info(++server_count_index + " " + values._id + " " + values.name);
				console.info("  Joined at: " + values.member.joined_at);
				console.info("  Roles: " + values.member.roles);
				console.info("  Nickname: " + values.member.nickname);
				console.info("  Ranking: " + values.member.ranking);
				console.info("  roleColour: " + values.member.roleColour);
				console.info("  orderedRoles: " + values.member.orderedRoles);
				console.info("  orderedRoles: " + typeof values.member.orderedRoles);
				


				await values.member.edit({
					nickname: "Guild Bot V0.1"
					
				});
				
				
				
				
				/* 403  - Forbidden, the role is the same or higher than current one.*/
				await values.member.edit({
					roles: ["01GJWB0CYDB8BR2AZE7NTT5TYP", "01GJ5MY14DJB867D7158HYAKZD", "01GJ5Q8X6VNW4PDGR88NYJY1DR"]
					
				});

				
				
				for (const [key, value] of Object.entries(values.member.orderedRoles)) {
				  console.log(`    ${key}: ${value}`);
					for (const [keyz, valuez] of Object.entries(value)) {
						console.log(`      ${keyz}: ${valuez}`);
						if (keyz == 1) {
							console.log(`          Name: ${valuez.name}`);
							console.log(`          Colour: ${valuez.colour}`);
							console.log(`          Hoist: ${valuez.hoist}`);
							console.log(`          Permissions: ${valuez.permissions}`);
							console.log(`          Rank: ${valuez.rank}`);
						}
					}
				}
				
			}
			
		);
		
		/* console.dir(client.servers.data_, { depth:1 }) */
		/* console.dir(client.servers, { depth:1 }) */
		/* console.dir(client.channels, { depth:1 }) */

	}
);
let newmsg;
client.on("message", async (message) => {
	if (message.content === "hello") {
		console.log(await message.channel.sendMessage("world"));
	}
	
	if (message.content === "lets create reactions") {
		newmsg = await message.channel.sendMessage("world");
		await newmsg.react("01GK50B414WGS9M82668EZWMSX");
		await newmsg.react("01GK50BBW5FP8PZSYTHYCJCG3W");
		await newmsg.react("01GK50BH980WRKX5ATEETZMWZK");
		await newmsg.react("01GK50BQA59VF31A04ERDTNPMG");
		await newmsg.react("01GK50BYNR1PY1G479KCBA2QPR");
		
		// const fs = require('fs')
		// const data = await JSON.stringify(newmsg)
		// 
		// // write JSON string to a file
		// fs.writeFile('msg.json', data, err => {
		//   if (err) {
		// 	throw err
		//   }
		//   console.log('JSON data is saved.')
		// })		
		
		

	}
});


/* Read bot token from file */
var fs = require('fs');
var content = fs.readFileSync('./token.txt','utf8');

client.loginBot(content);
