import Work from "./work/work";
import Project from "./project/project";
import './experience.css';
import { Divider } from "@mui/material";

const Experience = () => {
    return ( 
    <div style={{padding: "0px 10%"}}>
        <h2>What I've Done:</h2>
        <br/>
        <h2>Work:</h2>
        <br/>
        <Work/>
        <br/><br/><br/>
        <Divider/>
        <br/>
        <h2>Projects:</h2>
        <br/>
        <Project/>
        {/*https://mui.com/material-ui/react-app-bar/
        https://mui.com/material-ui/all-components/
        https://mailtrap.io/blog/react-send-email/
        */}
    </div> );
}
 
export default Experience;