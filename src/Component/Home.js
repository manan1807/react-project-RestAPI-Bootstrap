import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Jumbotron, Button, Container } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Home() {

    useEffect(() => {
        document.title = "Home Page"
    }, []);

    const notify = () => toast("View Pages");

    return (
        <div className="Backgroundcolor Height">
           <Jumbotron fluid>
               <Container fluid>
                   <div > <h1 className="display-3 h1margin">Hello, Folks!</h1></div>
                    <p className="lead">This is a simple Topic-Course APi, it is created using Reactjs as frontend and SpringBoot as Backend .</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <div className="HomeButton">
                            <Link to="/showtopic-api"><Button color="primary" className="btn-lg" onClick={notify}>Click to View Topics</Button></Link>
                        </div>
                    </p>
                    </Container>
                    </Jumbotron>
            <ToastContainer />
        </div>
    )
}
