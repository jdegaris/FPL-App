import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';
import Link from 'next/link'


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
            <table className="table table-dark text-center">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Goals</th>
                    <th scope="col">Assists</th>
                    <th scope="col">Minutes</th>
                    </tr>
                </thead>
                <tbody>
                    {forwards.map(p => {
                        return (
                                <tr>
                                    <a href={`/player?id=${p.id}`}><td>{p.second_name}, {p.first_name}</td></a>
                                    <td>{p.goals_scored}</td>
                                    <td>{p.assists}</td>
                                    <td>{p.minutes}</td>
                                </tr>
                            )
                    })}
                </tbody>
            </table>

            <h2 className="text-center">Midfielders</h2>
            <table className="table table-dark text-center">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Goals</th>
                    <th scope="col">Assists</th>
                    <th scope="col">Minutes Played</th>
                    </tr>
                </thead>
                <tbody>
                    {midfielders.map(p => {
                        return (
                        <Link href={`/player?id=${p.id}`}>
                            <tr>
                                <td>{p.second_name}, {p.first_name}</td>
                                <td>{p.goals_scored}</td>
                                <td>{p.assists}</td>
                                <td>{p.minutes}</td>
                            </tr>
                        </Link>
                        )
                    })}
                </tbody>
            </table>

            <h2 className="text-center">Defenders</h2>
            <table className="table table-dark text-center">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Clean Sheets</th>
                    <th scope="col">Yellow Cards</th>
                    <th scope="col">Red Cards</th>
                    <th scope="col">Minutes Played</th>
                    </tr>
                </thead>
                <tbody>
                    {defenders.map(p => {
                        return (
                            <Link href={`/player?id=${p.id}`}>
                        <tr>
                            <td>{p.second_name}, {p.first_name}</td>
                            <td>{p.clean_sheets}</td>
                            <td>{p.yellow_cards}</td>
                            <td>{p.red_cards}</td>
                            <td>{p.minutes}</td>
                        </tr>
                        </Link>
                        )
                    })}
                </tbody>
            </table>

            <h2 className="text-center">Goalkeepers</h2>
            <table className="table table-dark text-center">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Clean Sheets</th>
                        <th scope="col">Goals Conceded</th>
                        <th scope="col">Saves</th>
                        <th scope="col">Minutes Played</th>
                    </tr>
                </thead>
                <tbody>
                    {goalkeepers.map(p => {
                        return (
                            <Link href={`/player?id=${p.id}`}>
                        <tr>
                            <td>{p.second_name}, {p.first_name}</td>
                            <td>{p.clean_sheets}</td>
                            <td>{p.goals_conceded}</td>
                            <td>{p.saves}</td>
                            <td>{p.minutes}</td>
                        </tr>
                        </Link>
                        )
                    })}
                </tbody>
            </table>
    <style jsx>{`
        a {
            color: #fff;
            width: 100%;
        }

      `}
    </style>
        </Layout>
    )
}

Team.getInitialProps = async function() {


    const res = await fetch
        ('https://fantasy.premierleague.com/api/bootstrap-static/');
        const data = await res.json();
        return {
        epl: data
        }
}

export default Team;
