import { Fragment } from 'react'
import Link from 'next/link'

class GoalLeaders extends React.Component {
    render() {
        const { players } = this.props
        return (
        <Fragment>
            <div className="bg-primary">
                <h1 className="text-center primary title">Top 5 Goal Scorers</h1>
            </div>
            <ul className="list-group">
            {players.sort((a,b) => (a.goals_scored < b.goals_scored) ? 1 :
                (a.goals_scored === b.goals_scored) ? ((a.minutes > b.minutes) ? 1 : -1) : -1 )
                .slice(0,5)
                .map(player => {
                const photo = player.photo.split(".")[0]
                return (
                    <li key={player.code} className="player" >
                        <a href={`/player?id=${player.id}`}>
                        <div className="row">
                            <div className="col-6 align-self-center text-center">
                                <img 
                                    className="fit-image img-fluid "
                                    src={`https://resources.premierleague.com/premierleague/photos/players/250x250/p${photo}.png`} 
                                    alt={`${ player.first_name } ${ player.second_name } `}
                                />
                            </div>          
                            <div className="col-6 align-self-center text-center">
                                <div>
                                    <img 
                                        className="team-logo img-fluid"
                                        src={`https://resources.premierleague.com/premierleague/badges/t${player.team_code}.svg`} 
                                        alt="team logo"/>
                                </div>
                                <h2>Goals: </h2>
                                <h2>{player.goals_scored}</h2>
                            </div>

                        </div>
                        <div className="list-group-item text-center bg-primary">
                            <h3>{ player.first_name } { player.second_name } </h3>
                        </div>
   
                        </a>
                    </li>
                )
            })}
            </ul>

    <style jsx>{`
        .player {
            background-color: rgb(0, 255, 135) !important;
        }
        .title {
            font-family: 'Muli';
            padding-bottom: 1rem;
        }
        h1 {
            margin: 0;
        }
        .row {
            max-width: 1000px;
            margin: 0 auto;
        }
        .fit-image{
            width: 100%;
            max-width: 320px;
            object-fit: cover;
            }
        .info {
            height: 100%;
            width: 100%;
        }
        .team-logo {
            width: 50%;
            max-width: 200px;
            object-fit: cover;
        }
        .list-group-item {
            width: 100vw;
        }

      `}
    </style>
        
        </Fragment>
        
        )
    }
}

export default GoalLeaders