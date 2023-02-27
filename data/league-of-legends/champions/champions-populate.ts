const champions = require('./champion.json');
const effesse = require('node:fs');

const removableKeysForChampions = ['version', 'id', 'key'];

const allChampions = champions.data;
try {
  const reduceData = [];

  for (const championKey of Object.keys(allChampions)) {
    const champion = allChampions[championKey];
    removableKeysForChampions.forEach((key) => {
      delete champion[key];
    });

    reduceData.push(champion);
  }

  effesse.writeFileSync(
    './championsClean.json',
    JSON.stringify(reduceData, null, 2),
    'utf-8',
  );

  console.log('data file was populated successfully');
} catch (error) {
  console.log(error);
}
