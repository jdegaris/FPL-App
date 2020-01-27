import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

import TeamsList from '../components/TeamsList'
import GoalLeaders from '../components/GoalLeaders'

const Index = (props) => {
    return (
        <Layout>
            <div>
                <GoalLeaders players={props.epl.elements} />
                <TeamsList teams={props.epl.teams} />
            </div>
        </Layout>
    )
}
    


Index.getInitialProps = async function() {
    const res = await fetch
        ('http://fantasy.premierleague.com/api/bootstrap-static/');
        const data = await res.json();
        return {
        epl: data
        }
}

export default Index;
