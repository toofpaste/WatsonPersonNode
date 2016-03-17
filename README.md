# Personality

Gets a Twitter user's personality profile using IBM's Watson.

## Usage
```
// app.js

const personality = require('./personality')

personality('@billyzacsmith')
  .then(function(personalityProfile) {
    console.log(personalityProfile.traits)
    console.log(personalityProfile.needs)
  })
  .catch(function(error) {
    console.log(error)
  })
```
