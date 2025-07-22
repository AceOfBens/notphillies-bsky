# Philadelphia Phillies Bluesky Mirror Bot 🦋

This repository is used to build the bot that cross posts content from [@Phillies](https://x.com/Phillies) on X/Twitter to [@notphillies.bsky.social](https://bsky.app/profile/notphillies.bsky.social) on Bluesky by utilizing Mastodon's API to pull from the [Philadelphia Phillies mirror bot](https://mastodon.social/@Phillies@sportsbots.xyz) on sportsbots.xyz.

## Credits
* [Phil Nash](https://github.com/philnash) for providing the code for building a bot that posts on its own schedule.
  * [Phil Nash's Bluesky bot template](https://github.com/philnash/bsky-bot)
* [acarters](https://github.com/acarters) for providing the code for building a bot that mirrors an X/Twitter account by pulling from existing mirror bots on Mastodon, due to the access restrictions on X's API. Most of the notes in the code that explain what each line does are from him.
* I ([Ben Ace](https://bsky.app/profile/aceofbens.com/)) cannot stress enough how much I didn't do much to this code and can't take credit for any the building of this repository, although I did create a template with an outline of how to create your own bot! I am not a developer but a [graphic designer and content creator](https://aceofbens.com/) whose coding experience ends at tinkering with HTML and CSS on WordPress once in a while.

## FAQ

### Why did you make this? What's the point of this bot?

Basically, I saw the Canes and PWHL mirror bots and thought, "I want what they have," so I took an evening to look through their Github code, figure out what an API access token was, and created the Phillies and Flyers mirror bots.

I saw other fans of these teams posting about how they wished the Phillies and Flyers would join Bluesky like other MLB and NHL teams have. Fans were screenshoting the teams' X posts and posting to Bluesky to add their comments as if they were quote tweeting, which, of course, is annoying. Creating these mirror bots gives fans who no longer feel comfortable using X a channel to keep up to keep up with the team on Bluesky.

Not to mention, there had recently been at least one incident of someone buying a domain to pose as the official Phillies Bluesky account. With these mirror bots, I wanted to create a reliable account that is blatantly unofficial so as not to trick anyone into believing they are really interacting with the team. That's why I've made it clear in the username, display name, and bio of these accounts that they are unofficial.

tl;dr - I'm not in it for the clout like the guy who made the fake Phillies account, I just wanted to be able to quote post the final score of a devastating loss like I used to on Twitter. Turns out, others like being able to comment on and quote post the bot as well.

### How can I create my own?

I created a [template with instructions](https://github.com/AceOfBens/sports-mirror-bot-bsky/) on what to add or change in the [README file](https://github.com/AceOfBens/sports-mirror-bot-bsky/blob/main/README.md).

Please note that this bot pulls from Mastodon bots that pull from X. So, unless you pay for access to X's API, you will need to find a mirror bot on Mastodon such as the ones on sportsbots.xyz. Unfortunately, I'm not aware of any other sources for finding mirror bots, sorry.

### Does the bot post immediately when the Phillies account posts on Twitter?

No. Sometimes I change this setting, but usually the bot is scheduled to check the [Mastodon mirror bot](https://mastodon.social/@Phillies@sportsbots.xyz) every 20 minutes. During busier times, like evenings (Eastern Standard/Daylight Time), which coincidentally is when the Phillies typically play and when their X/Twitter account posts the most often, this bot will check less often because Github's servers are running more repositories.

Because of this, sometimes the bot will not check for up to 3 hours and catch up on posts from several innings, so the time stamp on the Bluesky mirror post should not be used as a reference for anything other than when Github Actions ran a workflow for this bot. 

*UPDATE 21 July 2025: The Phillies mirror bot @NotPhillies.bsky.social is currently set to dry run because the Mastodon mirror bot that it pulls from has not updated since July 20th, and any posts mirrored on the account have been posted manually. I will check the Mastodon account periodically to see if it starts updating again. This has happened before and will likely be resolved again, I just don't know when since I don't control the Mastodon bot and I've not been able to get in contact with those who do.*

### This account liked one of my posts. Is it programmed to like posts it's mentioned in?

No, there are no instances in which this bot is programmed to like posts on Bluesky. If [@notphillies.bsky.social](https://bsky.app/profile/notphillies.bsky.social) liked your post, it was an actual human, and that actual human is [@aceofbens.com](https://bsky.app/profile/aceofbens.com) on Bluesky.

Generally, I try not to break the fourth wall on these mirror bot accounts. Even though I've taken every step to disclaim that the account is not officially affiliated with the Philadelphia Phillies in any way, it feels disingenuous to make it about me by replying to fans or (re)posting content the Phillies have not shared on their official channels.

That said, if the account is mentioned as a suggestion for someone to follow it, I appreciate that! So I like those posts to show that appreciation. Or, a few times, people have tagged this account to comment on a glitch, and I've liked those posts to let them know I'm aware of the issue and it has been or is being addressed.

### Are this account's mentions and message requests monitored?

Yes! I am actively logged into this account and try to check it at least once a day to make sure it's not broken in some way (as it has before and, unfortunately, I'm sure it will again). Currently, the DMs are closed, but I monitor the mentions (tags, replies, quotes) in case someone draws attention to an issue that way. Also, because spam bots are becoming more of an issue lately and I will hide their replies as I come across them.

### Can you make a bot for [insert X/Twitter account]?

If there is a mirror bot for it on Mastodon (check [@sportsbots@mastodon.social](https://www.sportsbots.xyz/)), then technically yes I can, but, frankly, I don't have enough email addresses to make so many new Bluesky accounts. [Try it yourself](https://github.com/AceOfBens/sports-mirror-bot-bsky/blob/main/README.md)!

### How can I make a Bluesky mirror bot that isn't available on sportsbots.xyz?

Great question! If there's no Mastodon mirror bot like the ones on sportsbots.xyz, then I have no idea. Like I said in the credits section at the top, I'm a graphic designer with experience as a social media manager, and the extent of my experience in coding is a few web design university classes. The *vast* majority of this bot was built by [philnash](https://github.com/philnash) and [acarters](https://github.com/acarters). I'm sorry that I can't be of more help here :(

### How long will this bot be up for?

That depends on MLB and the Philadelphia Phillies. There have been reports that [the NFL has told their teams not to use Bluesky](https://awfulannouncing.com/nfl/new-england-patriots-bluesky-shut-down-account.html), but this doesn't necessarily seem to be the case here as all 30 teams have created a domain-verified account and several of them are posting regularly including the [Kansas City Royals](https://bsky.app/profile/did:plc:3rkgpi6qhb4p6ne4jk2kspzw), the [Pittsburgh Pirates](https://bsky.app/profile/did:plc:xtjr2ecuxb6wqjr3jfbwdu3m), The [San Francisco Giants](https://bsky.app/profile/did:plc:7e75ce7c352cm2th5pwojwdw), the [Boston Red Sox](https://bsky.app/profile/did:plc:y4mxqslm4dyn6mx6pldyn75o), and even their division rival, the [New York Mets](https://bsky.app/profile/did:plc:5knhhenmnuq5vva3rr4vo3nh). However, many of these "active" accounts aren't cross posting everything from their X/Twitter accounts. For that reason, I'm currently unsure how active the Phillies' Bluesky account would have to be before I unplug this bot. It will probably come down to how long people find this bot useful.

The Phillies made a Bluesky account in January 2025 that is domain verified ([@phillies.com](https://bsky.app/profile/phillies.com)), but as of now, they have not posted there, and it is unclear how much of a priority this may be. I do not know if contacting the Phillies will help push them to be active on Bluesky, and I do not recommend taking to other social media platforms to pester them, as [it's possible their social team is waiting on support from Bluesky's team](https://awfulannouncing.com/tech/bluesky-sports-top-priority-growth-spurt.html) before they begin adding the platform to their social media strategy.

### I have another question that isn't answered here. How can I contact you?

Honestly, I'm probably most reachable on Bluesky. My DMs are currently open; do not make me regret that.
