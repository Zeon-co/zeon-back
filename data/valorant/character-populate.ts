const axios = require('axios');
const fs = require('node:fs');

const removableKeysForCharacter = [
  'developerName',
  'characterTags',
  'bustPortrait',
  'isAvailableForTest',
  'fullPortraitV2',
  'assetPath',
  'voiceLine',
];

const getAllCharacters = () => {
  const url = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true';
  const response = axios.get(url);
  return response;
};

try {
  getAllCharacters().then((response) => {
    const data = response.data.data;
    const reduceData = [];

    if (!data) return null;

    for (const item of data) {
      removableKeysForCharacter.forEach((key) => {
        delete item[key];
      });

      reduceData.push(item);
    }

    fs.writeFileSync(
      './character.json',
      JSON.stringify(reduceData, null, 2),
      'utf-8',
    );

    console.log('data file was populated successfully');
  });
} catch (error) {
  console.log(error);
}
