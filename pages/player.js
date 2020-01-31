import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';

const Player = (props) => {
    const router = useRouter()
    const player = props.epl.elements.filter(player => (router.query.id == player.id))
    const photo = player[0].photo.split(".")[0]
    return (
        <Layout>
            <div className="text-center ">
                <div className="player">
                    <img 
                        className="fit-image img-fluid "
                        src={`https://resources.premierleague.com/premierleague/photos/players/250x250/p${photo}.png`} 
                        alt={`${ player[0].first_name } ${ player[0].second_name } `}
                    />
                </div>
            <div className="list-group-item text-center bg-primary">
                <h3>{ player[0].first_name } { player[0].second_name } </h3>
                <small >{
                    player[0].element_type == 4 ? "Forward" :
                    player[0].element_type == 3 ? "Midfielder" :
                    player[0].element_type == 2 ? "Defender" :
                    player[0].element_type == 1 ? "Goalkeeper" : ""

                }</small> <br />
                <a href={`/team?id=${player[0].team_code}`}> 
                <img 
                        className="team-logo img-fluid"
                        src={`https://resources.premierleague.com/premierleague/badges/t${player[0].team_code}.svg`} 
                        alt="team logo"
                    />
                </a>
                <div>
                    
                </div>
            </div>

                    <h2>Goals: {player[0].goals_scored}</h2>
                    <h2>Assists: {player[0].assists}</h2>
                    <h2>Minutes: {player[0].minutes}</h2>
                    <h2>FPL Points: {player[0].total_points}</h2>
                </div>
   
    <style jsx>{`
        .player {
            background-color: rgb(0, 255, 135) !important;
        }
        .title {
            font-family: 'Muli';
            padding-bottom: 1rem;
        }
        .row {
            margin: 0 auto;
        }
        .fit-image{
            width: 100%;
            max-width: 320px;
            object-fit: cover;
            }
        h2, h3 {
            margin: 0;
        }
        .info {
            height: 100%;
            width: 100%;
        }
        .team-logo {
            width: 50%;
            max-width: 80px;
            object-fit: cover;
        }
        .list-group-item {
            width: 100vw;
        }

      `}
    </style>
        </Layout>
    )
}

Player.getInitialProps = async function() {

    const res = await fetch
        ('https://fantasy.premierleague.com/api/bootstrap-static/');
        const data = await res.json();
        return {
        epl: data
        }


}

export default Player;
