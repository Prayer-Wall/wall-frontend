import { Link } from "react-router";
import "./home.css";

const Home = () => {
   return (
      <section>
         <h1>Your Prayer Wall</h1>
         <article>
            <Link className="link" to={"login"}>Login</Link>
            <Link className="link" to={"register"}>Register</Link>
         </article>
      </section>
   )
}

export default Home;