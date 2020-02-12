import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';

const Team = (props) => {
    const router = useRouter()
    const players = props.epl.elements.filter(player => (router.query.id == player.team_code) && (player.minutes > 0))
    const forwards = players.filter(p => p.element_type == 4)
    const midfielders = players.filter(p => p.element_type == 3)
    const defenders = players.filter(p => p.element_type == 2)
    const goalkeepers = players.filter(p => p.element_type == 1)
    return (
        <Layout>
            <h2 className="text-center">Forwards</h2>
            <table className="table table-dark text-center table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>Minutes Played</th>
                    </tr>
                </thead>
                <tbody>
                    {forwards.map(p => {
                        return (
                            <tr key={p.id}>
                                <td><a href={`/player?id=${p.id}`}>{p.second_name}, {p.first_name}</a></td>
                                <td>{p.goals_scored}</td>
                                <td>{p.assists}</td>
                                <td>{p.minutes}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <h2 className="text-center">Midfielders</h2>

            <table className="table table-dark text-center table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>Minutes Played</th>
                    </tr>
                </thead>
                <tbody>
                    {midfielders.map(p => {
                        return (
                            <tr key={p.id}>
                                <td><a href={`/player?id=${p.id}`}>{p.second_name}, {p.first_name}</a></td>
                                <td>{p.goals_scored}</td>
                                <td>{p.assists}</td>
                                <td>{p.minutes}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <h2 className="text-center">Defenders</h2>
            <table className="table table-dark text-center table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Clean Sheets</th>
                        <th>Yellow Cards</th>
                        <th>Red Cards</th>
                        <th>Minutes Played</th>
                    </tr>
                </thead>
                <tbody>
                    {defenders.map(p => {
                        return (
                            <tr key={p.id}>
                                <td><a href={`/player?id=${p.id}`}>{p.second_name}, {p.first_name}</a></td>
                                <td>{p.clean_sheets}</td>
                                <td>{p.yellow_cards}</td>
                                <td>{p.red_cards}</td>
                                <td>{p.minutes}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <h2 className="text-center">Goalkeepers</h2>
            <table className="table table-dark text-center table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Clean Sheets</th>
                        <th>Goals Conceded</th>
                        <th>Saves</th>
                        <th>Minutes Played</th>
                    </tr>
                </thead>
                <tbody>
                    {goalkeepers.map(p => {
                        return (
                            <tr key={p.id}>
                                <td><a href={`/player?id=${p.id}`}>{p.second_name}, {p.first_name}</a></td>
                                <td>{p.clean_sheets}</td>
                                <td>{p.goals_conceded}</td>
                                <td>{p.saves}</td>
                                <td>{p.minutes}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <style jsx>{`
        a {
            color: #fff;
            width: 100%;
        }
        thead {
            font-size: 1rem;
            color: rgb(0, 255, 135);
        }
        tbody {
            font-size: 1rem;
        }
        td {
            max-width: 100px;
        }

      `}
            </style>
        </Layout>
    )
}

Team.getInitialProps = async function () {


    const res = await fetch
        ('https://fantasy.premierleague.com/api/bootstrap-static/');
    const data = await res.json();
    return {
        epl: data
    }
}

export default Team;
