import './Header.css'
import {useNavigate} from 'react-router-dom'
const Header = () =>{
    const navigate = useNavigate();
    return<>
    <div className="header" onClick={()=>{
        navigate('/')
    }}>
        <p>PhoneBook</p>
    </div>
    </>
}
export default Header;