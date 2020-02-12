
const TeamsList = (props) => {
    return (
        <div>
            <ul className="list-group">
                {props.teams.map(team => {
                    return (
                        <a href={`/team?id=${team.code}`} key={team.code}>
                            <li className="list-group-item text-center bg-primary">{team.name}</li>
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


export default TeamsList