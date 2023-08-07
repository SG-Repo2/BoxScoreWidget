function isValidGameData(data, requiredKeys) {
  return requiredKeys.every(key => data[key]);
}

export default isValidGameData;
