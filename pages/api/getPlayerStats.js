import playerStatsMockData from "@/mockData/_5dayPlayerStats" 

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(501).end();
  }

  const {playerId, apiKey} = req.query 

  if (apiKey.toLowerCase() === "test") {
    return res.json(playerStatsMockData);  
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
    
    const url = `https://api.sportsdata.io/v3/nba/stats/json/PlayerGameStatsBySeason/${`${Season}${SeasonType}`}/${playerId}/5?key=${apiKey}`  

    const playerStats = await fetch(url)
    .then(response => {  
      return response.json()
    })
    .then(playerStats => {    
      return playerStats
    }) 
    .catch(error => {
      console.log('Error status', error.response.status)
      console.log(error.response.data)
      return res.json(error.response.data)
    })   

    return res.json(playerStats); 
  }

   
}
