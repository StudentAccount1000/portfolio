import './home.css';
import { useWindowScroll } from "@uidotdev/usehooks"
import snow_closeup from './media/snow_closeup.jpg';
import Experience from './experience/experience';


const Home = () => {
    const [{x_pos, y_pos}, scroll] = useWindowScroll();

    return ( 
        <div>
            <div className='profile'>
                <img src={snow_closeup} alt='profile' className='profileImage float-start'/>
                <div className='profileText'>
                    
                    <h1><b>Hi, I'm Jake Watson</b></h1>
                    <br/>
                    <h1><b>I'm a Software Engineer.</b></h1>
                    <br/><br/>
                    <div className="profileExt">
                        <h3 className='profileExt'>I love to work in backend and middle tier, and also enjoy cybersecurity and data analytics related projects. As a recent Cal State Fullerton graduate I have a lot of professional and educational experience, and much more still to learn.</h3>
                    </div>
                    
                    <button className='shadow__btn' onClick={() => scroll({left: 0, top: 1150, behavior:"smooth"})}>Explore experience</button>
                </div>
            </div>
            <br/>
            <br/>
            <div id="experience">
                <Experience/>
            </div>
        </div>
     );
}
 
export default Home;