import './HomePage.css'
import {useNavigate} from 'react-router-dom';
import ContactsHolder from '../../Components/ContactsHolder/ContactsHolder';
const HomePage = () =>{
    const navigate = useNavigate();
    return <>
    <div className="wrapper">
        <div className="contacts">
            <h3>Contacts</h3>
            <div className="btn-wrapper">
                <button onClick={()=>{
                    navigate('/createContact')

                }}>Add Contact</button>
            </div>
            <div className="contacts-holder">
                <ContactsHolder />
            </div>

        </div>

    </div>
    </>
}
export default HomePage;