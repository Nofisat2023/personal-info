const slackProfilePictureURL = 'https://hng11.slack.com/team/U07AJNL47K5'
document.querySelector('[data-testid="slackProfilePicture"]').src = slackProfilePictureURL;
const slackEmail = 'azeeznofisat40@gmail.com'
document.querySelector('[data-testid="slackEmail"]').innerHTML = slackEmail;

const currentTimeUTC = new Date().toUTCString();
document.querySelector('[data-testid="currentTimeUTC"]').innerHTML = currentTimeUTC;

const currentDay = new Date().toLocaleDateString('en-US',{weekday:'long'});
document.querySelector('[data-testid="currentDay"]').innerHTML = currentDay;

const hngLink = 'hng.tech/learn.Attribute'
document.querySelector('[data-testid="hngLink"]').href = hngLink;

const keywordLink = 'keyword.dogAttribute'
document.querySelector('[data-testid="keywordLink"]').href = keywordLink;

const scrapeanywebLink = 'scrapeanyweb.siteAttribute'
document.querySelector('[data-testid="scrapeanywebLink"]').href = scrapeanywebLink;
