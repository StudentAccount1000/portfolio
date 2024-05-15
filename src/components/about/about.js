import "./about.css"
import pet from "./media/Pet_lap_portfilio.jpg"
import sunset from "./media/BB_heartglasssunset.jpg";
import huntington from "./media/Huntington_together.jpg";

const About = () => {
    return ( 
        <div>
            <h1>About Me!</h1>
            <br/>
            <div class="image-collection">
                <img src={pet}/>    <img src={sunset}/> <img src={huntington}/>
            </div>
            <br/>
            <div class="description">
                <h3>Besides being a student at CSUF, I exploring my other interests in technology, bodybuilding, video games, playing with my pets, and photography.</h3>
                <h3>My main technology interests right now are improving at Go, and C#. I am looking into learning more about physical components, as my senior design project involved that.</h3>
            </div>
        </div>
     );
}
 
export default About;