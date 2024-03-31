function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}


///console.log(gameObject());

function numPointsScored(playerName) {
   
    for (const teamKey in gameObject()) {
        const team = gameObject()[teamKey];
        
        for (const player in team.players) {
            if (player === playerName) {
              
                return team.players[player].points;
            }
        }
    }
  
    return null;
}

function shoeSize(playerName) {
  
    for (const teamKey in gameObject()) {
        const team = gameObject()[teamKey];
      
        for (const player in team.players) {
            if (player === playerName) {
               
                return team.players[player].shoe;
            }
        }
    }
   
    return null;
}

function teamColors(teamName) {
  
    for (const teamKey in gameObject()) {
        const team = gameObject()[teamKey];
        if (team.teamName === teamName) {
         
            return team.colors;
        }
    }
   
    return null;
}

function teamNames() {
    const teams = [];
    // Access the gameObject and iterate over home and away teams
    for (const teamKey in gameObject()) {
        const team = gameObject()[teamKey];
        // Add team name to array
        teams.push(team.teamName);
    }
    return teams;
}

function playerNumbers(teamName) {
    const numbers = [];
   
    for (const teamKey in gameObject()) {
        const team = gameObject()[teamKey];
        if (team.teamName === teamName) {
            
            for (const player in team.players) {
               
                numbers.push(team.players[player].number);
            }
        }
    }
    return numbers;
}

function playerStats(playerName) {
   
    for (const teamKey in gameObject()) {
        const team = gameObject()[teamKey];
       
        for (const player in team.players) {
            if (player === playerName) {
              
                return team.players[player];
            }
        }
    }
    
    return null;
}

function bigShoeRebounds() {
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;

 
    for (const teamKey in gameObject()) {
        const team = gameObject()[teamKey];
        
        for (const player in team.players) {
            const currentPlayer = team.players[player];
            if (currentPlayer.shoe > largestShoeSize) {
                largestShoeSize = currentPlayer.shoe;
                playerWithLargestShoe = currentPlayer;
            }
        }
    }

   
    if (playerWithLargestShoe !== null) {
        return playerWithLargestShoe.rebounds;
    } else {
      
        return null;
    }
}


function mostPointsScored() {
    let mostPoints = 0;
    let playerWithMostPoints = null;

    
    for (const teamKey in gameObject()) {
        const team = gameObject()[teamKey];
      
        for (const player in team.players) {
            const currentPlayer = team.players[player];
            if (currentPlayer.points > mostPoints) {
                mostPoints = currentPlayer.points;
                playerWithMostPoints = player;
            }
        }
    }

   
    return playerWithMostPoints;
}

function winningTeam() {
    let highestScore = 0;
    let winningTeamName = null;

   
    for (const teamKey in gameObject()) {
        const team = gameObject()[teamKey];
        let teamTotalPoints = 0;
        
        for (const player in team.players) {
            const currentPlayer = team.players[player];
            teamTotalPoints += currentPlayer.points;
        }
        if (teamTotalPoints > highestScore) {
            highestScore = teamTotalPoints;
            winningTeamName = team.teamName;
        }
    }

   
    return winningTeamName;
}

function playerWithLongestName() {
    let longestNameLength = 0;
    let playerWithLongestName = null;

  
    for (const teamKey in gameObject()) {
        const team = gameObject()[teamKey];
       
        for (const player in team.players) {
            if (player.length > longestNameLength) {
                longestNameLength = player.length;
                playerWithLongestName = player;
            }
        }
    }

   
    return playerWithLongestName;
}


console.log(mostPointsScored()); 
console.log(winningTeam()); 
console.log(playerWithLongestName()); 


function doesLongNameStealATon() {
    let playerWithLongestName = null;
    let mostSteals = 0;

   
    for (const teamKey in gameObject()) {
        const team = gameObject()[teamKey];
       
        for (const player in team.players) {
            
            if (!playerWithLongestName || player.length > playerWithLongestName.length) {
                playerWithLongestName = player;
            }
           
            if (team.players[player].steals > mostSteals) {
                mostSteals = team.players[player].steals;
            }
        }
    }

   
    if (playerWithLongestName && (
        gameObject().home.players[playerWithLongestName]?.steals === mostSteals ||
        gameObject().away.players[playerWithLongestName]?.steals === mostSteals)) {
        return true;
    } else {
        return false;
    }
}


console.log(doesLongNameStealATon()); 











