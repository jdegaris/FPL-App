import { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

import TeamsList from '../components/TeamsList'
import GoalLeaders from '../components/GoalLeaders'

const Index = (props) => {   
    const [search, setSearch] = useState({
        query: '',
        results: []
      })

    // const filteredSearch = props.epl.elements(p => p.second_name )

    const onChange = e => setSearch({...search, [e.target.name]: e.target.value});
    console.log(search)
    return (
        <Layout>
            <input 
                className="form-control"
                type="text" 
                placeholder="Search Players" 
                name='query'
                value={search.query} 
                onChange={e => onChange(e)}
            />
            <GoalLeaders players={props.epl.elements} />
            <TeamsList teams={props.epl.teams} />
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
