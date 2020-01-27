import Link from 'next/link'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a href="/" className="navbar-brand primary" >NetSmasher</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto ">
            <li className="nav-item">
                    <a href="/" className="nav-link">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
                <Link  href="/teams" >
                    <a className="nav-link">Teams</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link  href="/leaders" >
                    <a className="nav-link">Leaders</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link  href="/about" >
                    <a className="nav-link">About</a>
                </Link>
            </li>
        </ul>
    </div>
    <style jsx>{`

        .navbar-brand {
            font-size: 2rem;
        }
      `}</style>
    </nav>
)

export default Navbar;
