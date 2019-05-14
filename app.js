const getUserPublicData = async username => {
  const url = `https://lichess.org//api/user/${username}`;
  const res = await fetch(url);
  return await res.json();
};

const getUserRatingHistory = async username => {
  const url = `https://lichess.org//api/user/${username}/rating-history`;
  const res = await fetch(url);
  return await res.json();
};

(async function() {
  const username = "jsstrn";

  const userPublicData = await getUserPublicData(username);
  console.log(`User Public Data for ${username}`, userPublicData);

  const userRatingHistory = await getUserRatingHistory(username);
  console.log(`User Rating History for ${username}`, userRatingHistory);
})();
