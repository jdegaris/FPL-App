import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
    <div>
        <Head>
        <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/pulse/bootstrap.min.css" />>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
        </Head>
        <Navbar />
        <div className="fluid-container">
            {props.children}
        </div> 
        <style jsx global>{`
        .bg-primary {
            background-color: #37003c !important;
        }
        .primary {
            color: rgb(0, 255, 135) !important;
        }

        .list-group-item {
            font-size: 1.5rem;
        }
        a:hover {
            text-decoration: none;
        }

      `}</style>
    </div>
)

export default Layout;