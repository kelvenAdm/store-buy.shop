var msgNames = ["Bradley", "Adrian", "Quinton", "Merlin", "Gaston", "Marquis", "Jacinto", "Seth", "Eldon", "Tyson", "Barney", "Sang", "Otha", "Matthew", "Reggie", "Lynwood", "Renaldo", "Cristobal", "Gilberto", "Garry", "Mason", "Titus", "Val", "Deandre", "Stephen", "Elijah", "Raymundo", "Theodore", "Colby", "Dillon", "Zane", "Romeo", "Ward", "Homer", "Tanner", "Jeffrey", "Sherwood", "Jerrell", "Harvey", "Bruno", "Zachery", "Rudolf", "Willard", "Arnoldo", "Derick", "Rolando", "Dirk", "Rickie", "Quentin", "Randal", "Kayleigh", "Denice", "Brenda", "Karie", "Candra", "Vickie", "Jackqueline", "Venice", "Kamala", "Katerine", "Jacklyn", "Nida", "Sarita", "Glynis", "Myrtie", "Yulanda", "Telma", "Ashanti", "Reyna", "Jeanne", "Pattie", "Kerstin", "Cierra", "Valda", "Lyndsey", "Adrienne", "Rubie", "Elene", "Marylou", "Sharita", "Lovella", "Valencia", "Inell", "Inger", "Tobi", "Suzi", "Mittie", "Vicki", "Patria", "Dara", "Lyla", "Daysi", "Nita", "Nelle", "Adeline", "Kala", "Nakita", "Carlotta", "Ericka", "Alyson"];

var msgApellidos = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "Z"];

var msgColors = ["#ff0000","#ff00a8","#d002dd","#8802dd","#1c02dd","#027edd","#02ddd0","#02dd54", "#45dd02", "#d0dd02", "#dd9202", "#ffa800", "#ff6c00"];

var msgFulls = [
"Just watched your video and became a member. Looking forward to getting started.",
"Hi everyone, I'm back with an update. I'm on week 2 and my toenail fungus is 90% gone! It's a miracle!",
"To anyone new to this protocol, STICK WITH IT! I can assure you IT WILL WORK! I am living proof, I no longer have toenail fungus",
"<img src='https://japanesetoenailfunguscode.com/images/like.png' />",
"Easy to follow instructions and a ton of valuable information. Joining was the best decision I've ever made.",
"I can't believe it's so effective. I got instant results after the first use. It feels like a dream!",
"Thank you!!!",
"Hi guys! I can attest to the products effectiveness. It's been 2.5 weeks since my wife began using it and she's doing great. Her nails are clearing up and they're starting to get a pink hue again.",
"<img src='https://japanesetoenailfunguscode.com/images/heart.gif' />",
"Hope everyone is doing well, I just wanted to update you on my progress: after 3 weeks, I no longer have yellow, brittle nails",
"Just joined, my husband is eager to start!",
"Week 2 update on using Myco Nuker. The toenail fungus is all but gone and my new nail is pink and healthy. Honestly I never thought I'll ever have normal looking feet again. Thank you",
"Thank you Myco Nuker – you're a God send.",
"<img src='https://japanesetoenailfunguscode.com/images/veryGood.png' />",
"I feel like this has gave me back my sister. She was so depressed because of her toenail fungus that she refused to leave the home during the summer. Now she's at the beach all day long, after just 5 weeks. I can't thank you enough",
 "How long till I see results?",
"You'll notice them even after the first day, but an overall improvement come after at least 8 days…for me at least. Just don't give up hope",
"This thing actually WORKS! ",
"<img src='https://japanesetoenailfunguscode.com/images/ok.gif' />",
"I have used this toenail fungus treatment for the last 4 weeks, and I can safely say it works. My podiatrist can't believe it.",
"Hi all, I admit I was a bit skeptical, but I thought of giving it a try. I'll report back with updates",
"You'll be thrilled with it. I also was skeptical about it, but after 2 weeks of using Myco Nuker….I never felt this good in my life. I'm glad I didn't miss out on this opportunity",
"I simply LOVE this protocol! It's easy and it's 100% effective against toenail fungus",
"<img src='https://japanesetoenailfunguscode.com/images/like.png' />",
"My daughter just went on the beach in flip-flops, no joking. This is a BIG step for her.",
"Just became a member, thanks guys",
"<img src='https://japanesetoenailfunguscode.com/images/thanks.gif' />",
"Thank you for sharing this with everyone! My mother has been struggling with toenail fungus for over 15 years. Yesterday was the first time she saw any improvement in her condition", 
"I usually don't trust online stuff but the science is sound and I have nothing to lose, except the chance at a fungus free life",
"Both my parents are taking Myco Nuker and I can guarantee that it works. They've noticed improvements after just 10 days",
"God bless you!!!!!",
"I'm over the moon! This product is everything I wanted and more, I can notice a significant improvement after just 5 days. My doctor can't believe I'm using a natural remedy",   
"thank you guys",
"Been using Myco Nuker for 3 weeks, great improvements, toenail fungus barely visible",
"<img src='http://japanesetoenailfunguscode.com/images/mushroom.png' />",
"hi all-4 week update, my wife Sally is feeling the benefits of this product, dare I say it's the first one that is working for her!!!",
"Thank you for allowing me access, I'm using Myco Nuker as I'm typing this. Feeling great!",
"Hi everyone! Nice to meet you!",
"We are noticing remarkable improvement with this product!",
"The Myco Nuker is like nothing I've ever seen before and the guide blew my mind to what's really the deal with toenail fungus.",
"<img src='https://japanesetoenailfunguscode.com/images/thanks.gif' />"
];

var msgNo = 1;	
var msgF = 0;

function msgLoad() {
	var delayTime = Math.floor(Math.random()*(5000-1000+1)+1000);
	var msgName = msgNames[Math.floor(Math.random()*msgNames.length)];
	var msgApellido = msgApellidos[Math.floor(Math.random()*msgApellidos.length)];
	var msgColor = msgColors[Math.floor(Math.random()*msgColors.length)];
	
	cType =  Math.random()< .5;
	if (msgF >= msgFulls.length) msgF = 0;
	//cType = 1;
	
	if (cType == 1) {
	
		$('ul.chatBoxMsg').append( "<li><strong style=\"color:" + msgColor + "\">" + msgName + " " + msgApellido + "</strong> " + "<strong>has joined Myco Nuker!</strong></li>" );	
		
	} else {
	
		msgFull = msgFulls[msgF]
		$('ul.chatBoxMsg').append( "<li><strong style=\"color:" + msgColor + "\">" + msgName + " " + msgApellido + "</strong>: " + msgFull + "</li>" );	
		msgF= msgF + 1;
		
	}
	
	$('ul.chatBoxMsg li').first().remove();
	
	msgNo++;
	setTimeout(msgLoad, delayTime);
}	