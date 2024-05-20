import activeNbaTeamsMockData from "@/mockData/activeTeams" 

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(501).end();
  }

  const {apiKey} = req.query 

  if (apiKey.toLowerCase() === "test") {
    return res.json(activeNbaTeamsMockData); 
  } else {
    const activeNbaTeams = await fetch(`https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=${apiKey}`)
    .then(response => {  
      if (!response.ok) {
        return {
          status: "failed",
          message: `Request failed with status ${response.status}`
        };
      }
      return response.json()
    })
    .then(activeNbaTeams => {    
      return activeNbaTeams
    }) 
    .catch(error => {
      console.log('Error status', error.response.status)
      console.log(error.response.data)
      return res.json(error.response.data)
    })  
    
    return res.json(activeNbaTeams); 
  }  
}