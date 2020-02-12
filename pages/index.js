import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

import GoalLeaders from '../components/GoalLeaders'
import TeamsList from '../components/TeamsList'

const Index = (props) => {
    const [search, setSearch] = useState({
        query: '',
        results: []
    })

    const onChange = e => {
        setSearch({ ...search, [e.target.name]: e.target.value });
    }

    const filteredPlayers = props.epl.elements.filter(player => {
        return player.web_name.toLowerCase().includes(search.query.toLowerCase());
    })

    console.log(filteredPlayers)

    return (
        <Layout>
            <div className="searchbox">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search Players"
                    name='query'
                    value={search.query}
                    onChange={e => onChange(e)}
                />
            </div>

            {search.query === '' ? <GoalLeaders players={props.epl.elements} /> :
                filteredPlayers.sort((a, b) => (a.goals_scored < b.goals_scored) ? 1 :
                    (a.goals_scored === b.goals_scored) ? ((a.minutes > b.minutes) ? 1 : -1) : -1)
                    .slice(0, 5)
                    .map(player => {
                        const photo = player.photo.split(".")[0]
                        return (
                            <li
                                key={player.code}
                                className="player"
                            >
                                <a href={`/player?id=${player.id}`}>
                                    <div className="row" >
                                        <div className="col-6 " >
                                            <img
                                                className="fit-image img-fluid " src={`https://resources.premierleague.com/premierleague/photos/players/250x250/p${photo}.png`}
                                                alt={`${player.first_name} ${player.second_name} `}
                                            />
                                        </div >
                                        <div className="col-6 align-self-center text-center" >
                                            <div >
                                                <img
                                                    className="team-logo img-fluid"
                                                    src={`https://resources.premierleague.com/premierleague/badges/t${player.team_code}.svg`}
                                                    alt="team logo" />
                                            </div>
                                            <h2> Goals: </h2>
                                            <h2> {player.goals_scored}</h2>
                                        </div>

                                    </div>
                                    <div className="list-group-item text-center bg-primary" >
                                        <h3 > {player.first_name} {player.second_name} </h3>
                                    </div >

                                </a>
                            </li>
                        )
                    })
            }



            <style jsx>{`

* {
    margin: 0;
    padding: 0;
  }
html {
    background: #37003c !important
    height: 100vh;
}
.searchbox {
    display: flex;
    justify-content: center;
    background: #37003c !important
}
input {
      width: 50%;
      border-radius: 15px;
      text-align: center;
      font-size: 1rem;
      background-color: #fff
  }
li {
    list-style: none;
}
.bg-primary {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
}
.player {
    background-color: rgb(0, 255, 135) !important;
}
.title {
    font-family: 'Muli';
    padding: .5rem 0;
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
    max-width: 175px;
}
.list-group-item {
    width: 100vw;
}

`}</style>
        </Layout >
    )

}



Index.getInitialProps = async function () {
    const res = await fetch('http://fantasy.premierleague.com/api/bootstrap-static/');
    const data = await res.json();
    return {
        epl: data
    }
}

export default Index;
