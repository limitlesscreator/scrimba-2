//Base URL
const base_url = "https://api.rawg.io/api/"

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth()
    return String(month + 1).padStart(2, '0')
    // if(month < 10){
    //     return `0${month}`
    // }
    // else return `${month}`
}
const getCurrentDay = () => {
    const day = new Date().getDay()
    return String(day).padStart(2, '0')
}
//Current day/month/year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`
console.log(currentYear)

//Popular 10 games from last year to current day by rating
const popular_games = `${base_url}games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesURL = () => popular_games

