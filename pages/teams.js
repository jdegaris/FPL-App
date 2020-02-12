import Layout from '../components/Layout'
import TeamsList from '../components/TeamsList'
import fetch from 'isomorphic-unfetch';

const Teams = (props) => (
    <Layout>
        <TeamsList teams={props.epl.teams} />
    </Layout>
)

Teams.getInitialProps = async function () {


    const res = await fetch
        ('https://fantasy.premierleague.com/api/bootstrap-static/');
    const data = await res.json();
    return {
        epl: data
    }
}

export default Teams;
