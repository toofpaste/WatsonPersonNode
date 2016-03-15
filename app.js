var personality = require('./personality')

personality('@billyzacsmith')
  .then(function(personalityProfile) {
    console.log(personalityProfile.traits)
  })
  .catch(function(error) {
    console.log(error);
  })
