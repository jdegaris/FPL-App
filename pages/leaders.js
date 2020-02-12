import Layout from '../components/Layout'
import GoalLeaders from '../components/GoalLeaders'

const Leaders = (props) => (
    <Layout>
        <GoalLeaders players={props.epl.elements} />
    </Layout>
)

Leaders.getInitialProps = async function () {
    const res = await fetch('http://fantasy.premierleague.com/api/bootstrap-static/');
    const data = await res.json();
    return {
        epl: data
    }
}

export default Leaders;
