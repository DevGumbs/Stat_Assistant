import teamStatsMockData from "@/mockData/_5dayTeamStats" 

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(501).end();
  }
  const {teamId, apiKey} = req.query

  if (apiKey.toLowerCase() === "test") {
    return res.json(teamStatsMockData);
  } else {
    const currentSeason = await fetch(`https://api.sportsdata.io/v3/nba/scores/json/CurrentSeason?key=${apiKey}`) 
    .then(response => {  
      return response.json()
    })
    .then(currentSeason => {    
      return currentSeason
    }) 
    .catch(error => {
      console.log('Error status', error.response.status)
      console.log(error.response.data)
      return res.json(error.response.data)
    })

    let {Season, SeasonType} = currentSeason
    
    const url = `https://api.sportsdata.io/v3/nba/scores/json/TeamGameStatsBySeason/${`${Season}${SeasonType}`}/${teamId}/5?key=${apiKey}`  

    const teamStats = await fetch(url)
    .then(response => {  
      return response.json()
    })
    .then(teamStats => {    
      return teamStats
    }) 
    .catch(error => {
      console.log('Error status', error.response.status)
      console.log(error.response.data)
      return res.json(error.response.data)
    })   

    return res.json(teamStats);
  }     
}