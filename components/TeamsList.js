import Link from 'next/link'

class TeamsList extends React.Component {
    render() {
        return (
        <div>
            <ul className="list-group">
            {this.props.teams.map(team => {
                return (
                        <a href={`/team?id=${team.code}`} key={team.code}>
                            <li className="list-group-item text-center bg-primary" epl={this.props}>{team.name}</li>
                        </a>
                )
            })}
            </ul>

    <style jsx>{`

            a {
                text-decoration: none;
            }

      `}
    </style>
        
        </div>
        
        )
    }
}

export default TeamsList