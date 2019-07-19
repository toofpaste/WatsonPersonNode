# Watson Personality
SET UP IS FUCKIN WEIRD

1. SETUP A .env (in the top level)FILE LIKE THIS

url=<YOUR WATSON API URL>
USERNAME=apikey
PASSWORD=<WATSON API KEY>
CONSUMER_KEY=<TWITTER CONSUMER KEY>
CONSUMER_SECRET=<TWITTER CONSUMER SECRET KEY>
ACCESS_TOKEN_KEY=<TWITTER ACCESS TOKEN>
ACCESS_TOKEN_SECRET=<TWITTER ACCESS TOKEN SECRET>

PERSONALITY_INSIGHTS_USERNAME=<LEAVE BLANK AND DELETE THIS>
PERSONALITY_INSIGHTS_PASSWORD=<LEAVE BLANK AND DELETE THIS>
PERSONALITY_INSIGHTS_URL=<YOUR WATSON API URL>
PERSONALITY_INSIGHTS_IAM_APIKEY=<WATSON API KEY>
# twitter credentials
# see https://apps.twitter.com/
TWITTER_CONSUMER_KEY=<TWITTER CONSUMER KEY>
TWITTER_CONSUMER_SECRET=<TWITTER CONSUMER SECRET KEY>

after you set up your .env folder

2. run - npm install
3. copy everything in "personality.js" and paste it over everything in this file "node_modules/watson-personality/personality.js" and hit save
4. run - node app.js


























Gets a Twitter user's personality profile using IBM's Watson.

## Usage
```
npm install watson-personality
```

Create a `.env` file with credentials for Watson and Twitter. Make sure to also include the url to Watson's Personality API. Something like this:

```
url=https://gateway.watsonplatform.net/personality-insights/api
PASSWORD=watson_password
USERNAME=watson_username
CONSUMER_KEY=Twitter_consumer_key
CONSUMER_SECRET=Twitter_consumer_secret
ACCESS_TOKEN_KEY=Twitter_access_token
ACCESS_TOKEN_SECRET=Twitter_access_token_secret
```

Then use it in your script with Promise syntax:
```
// app.js

const personality = require('watson-personality')

personality('@billyzacsmith')
  .then(function(personalityProfile) {
    console.log(personalityProfile.traits)
    console.log(personalityProfile.needs)
  })
  .catch(function(error) {
    console.log(error)
  })
```
