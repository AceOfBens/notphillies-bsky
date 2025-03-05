import * as Mastodon from 'tsl-mastodon-api';
const mastodon = new Mastodon.API({access_token: 'DlRovob5ujTMeOFQFeWARurfj-oy8Hv_auRCOBmFXhk', api_url: 'https://mastodon.social/api/v1/'}); // access the Mastodon API using the access token.

/*
	getPostText():

	This function performs a Mastodon API GET request to get the n most recent tweets created by the Phillies. Using this, the function formats these strings down into the desired plaintext of a Bluesky post, stripping out all of the unnecessary HTML tag notation and handling formatting such that the text is compatible with Bluesky.

	args: None

	returns: A string representing the desired text of the Bluesky posts we want to create. Text for different posts are delimited by \/ characters. 
*/
export default async function getPostText() 
{
	const limitVal = 15; // The number of posts to get from Mastodon.
	var pReg = new RegExp("</p><p>", "g"); // A regex to deal with <p></p>. This should create a new section in the text, which we do via 2 line breaks.
	var brReg = new RegExp("<br>", "g"); // A regex to deal with <br>. This should go to the next line, which we do via a line break. 
	var quoteReg = new RegExp(`\\\\"`, "g"); // A regex to deal with \". This should be replaced with a " value with no \.
	var andReg = new RegExp("&amp;", "g"); // A regex to deal with &amp;. This should be replaced with &.
	var logoReg = new RegExp("&nbsp;", "g"); // A regex to deal with &nbsp;. Should be deleted.
	var twitterReg = new RegExp("@twitter.com", "g"); // A regex to deal with @twitter.com. Should be deleted.
	var sportsBotsReg = new RegExp("@sportsbots.xyz", "g");
	var philliesReg = new RegExp("@phillies@sportsbots.xyz", "g"); // A regex to deal with Phillies's @. Should be replaced with the bot's @.
	var sportsBotsReg = new RegExp("@sportsbots.xyz", "g");

	var eaglesReg = new RegExp("@Eagles", "g");
	var flyersReg = new RegExp("@NHLFlers", "g");
	var sixersReg = new RegExp("@sixers", "g");
	var unionReg = new RegExp("@PhilaUnion", "g");
	var wingsReg = new RegExp("@NLLwings", "g");
	var cbpReg = new RegExp("@PhilliesCBP", "g");
	var mlbReg = new RegExp("@MLB", "g");
	var mlbnReg = new RegExp("@MLBNetwork", "g");
	var wipReg = new RegExp("@SportsRadioWIP", "g");

	var abelReg = new RegExp("@mickabel13", "g");
	var harperReg = new RegExp("@bryceharper3", "g");
	var kennedyReg = new RegExp("@KennedyBuddy", "g");
	var krukReg = new RegExp("@johnkruk", "g");
	var marshReg = new RegExp("@brandon_march22", "g");
	var realmutoReg = new RegExp("@JTRealmuto", "g");
	var rossReg = new RegExp("@JoeRoss21", "g");
	var schwarberReg = new RegExp("@kschwarb12", "g");
	var sosaReg = new RegExp("@MunditoSosa", "g");
	var stottReg = new RegExp("@bryson_stott10", "g");
	var strahmReg = new RegExp("@MattStrahm", "g");
	var stubbsReg = new RegExp("@GarrettStubbs", "g");
	var turnerReg = new RegExp("@treavturner", "g");
	var tylerReg = new RegExp("@KT_OU15", "g");
	var walkerReg = new RegExp("@tai_walker", "g");
	var wilsonReg = new RegExp("@Weston_Wilson8", "g");
		
	var tagReg = new RegExp("<(:?[^>]+)>", "g"); // A general regex for HTML. Used to get the plaintext value of the mastodon post without tag notation.
	var invalidLinkReg = new RegExp("\\S*(\\.com|\\.ca|\\.org|\\.net)\\S*(…|\\.\\.\\.)", "g");

	var awaitTweet = await mastodon.getStatuses("109672525228935446", {'limit':limitVal}); //Use the Mastodon API to get a specified number of recent posts from the Mastodon API.
	var string = JSON.stringify(awaitTweet); // Convert the post into a JSON string.
	var objJSON = JSON.parse(string)["json"]; // Convert the JSON string back to a JSON object. Kinda silly, but it doesn't work otherwise. 
	var stringArr = []; // Initialize an empty array that we will store the regexed plaintexts in.
	var urlArr = [];
	var altTextArr = [];
	var cardArr = [];
	for (let i = 0; i < limitVal; i++) // Iterate over all the posts we collected using the Mastodon API. 
	{
		var postUrlArr = [];
		var postAltTextArr = [];
		for (let j = 0; j < 4; j++)
		{	
			if (objJSON[i]["media_attachments"][j] != undefined)
			{
				if (objJSON[i]["media_attachments"][j]["type"] == "image" || objJSON[i]["media_attachments"][j]["type"] == "gifv" || objJSON[i]["media_attachments"][j]["type"] == "video")
				{
					postUrlArr.push(objJSON[i]["media_attachments"][j]["url"]);
				}
				else
				{
					postUrlArr.push("None");
				}

				if (objJSON[i]["media_attachments"][j]["type"] == "video" || objJSON[i]["media_attachments"][j]["type"] == "gifv")
				{
					postAltTextArr.push(`${objJSON[i]["media_attachments"][j]["meta"]["original"]["width"]}@#*${objJSON[i]["media_attachments"][j]["meta"]["original"]["height"]}@#*${objJSON[i]["media_attachments"][j]["meta"]["original"]["duration"]}@#*${objJSON[i]["media_attachments"][j]["preview_url"]}`);
				}
				else if (objJSON[i]["media_attachments"][j]["description"] == null)
				{
					postAltTextArr.push("None");
				}
				else
				{
					postAltTextArr.push(objJSON[i]["media_attachments"][j]["description"]);
				}
			}
			else
			{
				postUrlArr.push("None");
				postAltTextArr.push("None");
			}
		}
		var postUrl = postUrlArr.join("!^&");
		var postAltText = postAltTextArr.join("!^&");
		urlArr.push(postUrl);
		altTextArr.push(postAltText);
		var contentJSON = objJSON[i]["content"]; // Filter through all the values of the JSON object, to get just the content of post i. 
		var contentString = JSON.stringify(contentJSON); // Convert the content of the post into a JSON string.
		contentString = contentString.slice(1,-1); // Remove the quotation marks.
		// meta data
		contentString = contentString.replace(twitterReg, "");
		contentString = contentString.replace(philliesReg, "notphillies.bsky.social");
		contentString = contentString.replace(sportsBotsReg, "");
		contentString = contentString.replace(logoReg, "");
		contentString = contentString.replace(quoteReg, `"`);
		contentString = contentString.replace(andReg, "&");
		contentString = contentString.replace(pReg, "\n\n");
		contentString = contentString.replace(brReg, "\n");
		contentString = contentString.replace(tagReg, ""); //Use the ", &, <p>, and <br> regexes to apply appropriate formatting. Then use the general regex to remove the HTML formatting from the mastodon post. 
		// brand accounts
		contentString = contentString.replace(eaglesReg, "@philadelphiaeagles.bsky.social");
		contentString = contentString.replace(flyersReg, "Flyers");
		contentString = contentString.replace(sixersReg, "@sixersnba.bsky.social");
		contentString = contentString.replace(unionReg, "@philadelphiaunion.com");
		contentString = contentString.replace(wingsReg, "Wings");
		contentString = contentString.replace(cbpReg, "Citizens Bank Park");
		contentString = contentString.replace(mlbReg, "@MLB.com");
		contentString = contentString.replace(mlbnReg, "MLB Network");
		contentString = contentString.replace(wipReg, "@sportsradiowip.bsky.social");
		// player accounts
		contentString = contentString.replace(abelReg, "Mick Abel");
		contentString = contentString.replace(harperReg, "Bryce Harper");
		contentString = contentString.replace(kennedyReg, "Buddy Kennedy");
		contentString = contentString.replace(krukReg, "John Kruk");
		contentString = contentString.replace(marshReg, "Brandon Marsh");
		contentString = contentString.replace(realmutoReg, "JT Realmuto");
		contentString = contentString.replace(rossReg, "Joe Ross");
		contentString = contentString.replace(schwarberReg, "Kyle Schwarber");
		contentString = contentString.replace(sosaReg, "Edmundo Sosa");
		contentString = contentString.replace(stottReg, "Bryson Stott");
		contentString = contentString.replace(strahmReg, "Matt Strahm");
		contentString = contentString.replace(stubbsReg, "Garrett Stubbs");
		contentString = contentString.replace(turnerReg, "Trea Turner");
		contentString = contentString.replace(tylerReg, "Kyle Tyler");
		contentString = contentString.replace(walkerReg, "Taijuan Walker");
		contentString = contentString.replace(wilsonReg, "Weston Wilson");

		if (contentString.includes("RT ") || contentString.includes("Retweet ") || contentString.includes("retweet ") || contentString.includes("RETWEET "))
		{
			contentString = contentString + "\n\n (Offer not valid on Bluesky.)";
		}

		if (objJSON[i]["card"] != null)
		{
			contentString = contentString.replace(invalidLinkReg, objJSON[i]["card"]["url"]);
			var postCardArr = [];
			postCardArr.push(objJSON[i]["card"]["url"]);
			postCardArr.push(objJSON[i]["card"]["title"]);
			postCardArr.push(objJSON[i]["card"]["description"]);
			postCardArr.push(objJSON[i]["card"]["image"]);
			var postCard = postCardArr.join("!^&");
			cardArr.push(postCard);
		}
		else
		{
			cardArr.push("None");
		}
		stringArr.push(contentString); // Add the regexed content to the array of plaintexts.
	}
	//urlArr[27] = "None!^&None!^&None!^&None";
	//altTextArr[27] = "None!^&None!^&None!^&None";

	var urls = urlArr.join("@#%");
	var strings = stringArr.join("@#%"); // Turn the string array into a single string by joining them with a \/ delimiter. This will be undone when used by bot functions. 
	var alts = altTextArr.join("@#%"); 
	var cards = cardArr.join("@#%");
	var urlsStringsAltsCardsArr = [urls, strings, alts, cards];
	var urlsStringsAltsCards = urlsStringsAltsCardsArr.join("~~~");
	return urlsStringsAltsCards; // Return this singular concatenated string. 
}
