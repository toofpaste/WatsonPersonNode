var watson = require('watson-developer-cloud')
require('dotenv').config()

var personality_insights = watson.personality_insights({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  version: 'v2'
})

var textToAnalyze =
['WHEN lilacs last in the door-yard bloom’d, ',
'And the great star early droop’d in the western sky in the night, ',
'I mourn’d—and yet shall mourn with ever-returning spring. ',

'O ever-returning spring! trinity sure to me you bring; ',
'Lilac blooming perennial, and drooping star in the west,',
'And thought of him I love. ',

'O powerful, western, fallen star! ',
'O shades of night! O moody, tearful night! ',
'O great star disappear’d! O the black murk that hides the star! ',
'O cruel hands that hold me powerless! O helpless soul of me!',
'O harsh surrounding cloud, that will not free my soul!',
'In the door-yard fronting an old farm-house, near the white-wash’d palings, ',
'Stands the lilac bush, tall-growing, with heart-shaped leaves of rich green, ',
'With many a pointed blossom, rising, delicate, with the perfume strong I love, ',
'With every leaf a miracle......and from this bush in the door-yard,',
'With delicate-color’d blossoms, and heart-shaped leaves of rich green, ',
'A sprig, with its flower, I break.'
].join()

personality_insights.profile({
  text: textToAnalyze },
  function (err, response) {
    if (err)
      console.log('error:', err)
    else
      console.log(JSON.stringify(response, null, 2))
})
