import { Link } from "react-router-dom"

function Home(){
    return(
       <div className="home">
    <Link to="/login" className="login-link">
        Go to Login Page
    </Link>
</div>
    )
}

export default Home
