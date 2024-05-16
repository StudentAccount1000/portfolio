import { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({full_name: "", email: "", message: ""})

    const handleSubmit = (e) =>{
        e.preventDefault() 
        {/* leave /\ on for testing */}
        console.log(`Inputted Name: ${formData.full_name}, Email: ${formData.email}, Message: ${formData.message}`)
        alert("Email form is not currently working, sorry! Please directly contact jakewatson@duck.com through your own personal email")
    }

    return ( 
        <div class="contact-form">
            
            <h2>Contact:</h2>
            <p>Note: Contact form is not functional while hosted here. Please email jakewatson@duck.com if you have anything you would like to discuss.</p>
            <form>
                
                <TextField variant="outlined" placeholder="John Smith" label="Name" margin="none" onChange={e => setFormData({...formData, full_name: e.target.value})}/>
                <br/><br/>
                <TextField variant="outlined" placeholder="abc@example.com" label="Email" margin="none" onChange={e => setFormData({...formData, email: e.target.value})}/>
                <br/><br/>
                <TextField variant="outlined" fullWidth placeholder="Can you tell me more about ..." label="Message Contents" margin="none" multiline rows={4} onChange={e => setFormData({...formData, message: e.target.value})}/>
                <br/><br/>
                <Button variant="contained" onClick={handleSubmit} style={{backgroundColor: "darkblue"}}>Submit</Button>
                
            </form>
        </div>
     );
}
 
export default Contact;