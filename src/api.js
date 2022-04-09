//Base URL
const base_url = "https://api.rawg.io/api/"

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth()
    return String(month + 1).padStart(2, '0')
}
const getCurrentDay = () => {
    const day = new Date().getDate()
    return String(day).padStart(2, '0')
}

//Current day/month/year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

//Popular 10 games from last year to current day by rating
const popular_games = `${base_url}games?key=${process.env.REACT_APP_REWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `${base_url}games?key=${process.env.REACT_APP_REWG_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const newGames = `${base_url}games?key=${process.env.REACT_APP_REWG_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => popular_games
export const upcomingGamesURL = () => upcoming_games
export const newGamesURL = () => newGames

// Game Details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${process.env.REACT_APP_REWG_API}`

// Game ScreenShots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_REWG_API}`


