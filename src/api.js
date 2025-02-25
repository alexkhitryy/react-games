//Base URL
const base_URL = "https://api.rawg.io/api/";

//Get the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=20`;
const new_games = `games?date=${lastYear},${currentDate}&ordering=-released&page_size=20`;

export const popularGamesURL = () => `${base_URL}${popular_games}`;
export const upcomingGamesURL = () => `${base_URL}${upcoming_games}`;
export const newGamesURL = () => `${base_URL}${new_games}`;

//Game details
export const gameDetailsURL = (game_id) => `${base_URL}games/${game_id}`;

//Game screenshots
export const gameScreenshotsURL = (game_id) =>
  `${base_URL}games/${game_id}/screenshots`;

//Searched Game
export const searchedGameURL = (game_name) =>
  `${base_URL}games?search=${game_name}&page_size=9`;
