import {api,endpoints} from '../../Lib'
import {useEffect,useState} from 'react'
import {Table} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import './ContactsHolder.css'
const ContactsHolder = () =>{
    const navigate = useNavigate();
    const [data,setData] = useState([]);
    const [deleteId, setDeleteId] = useState();
    console.log(deleteId);

    useEffect(()=>{
        const getContacts = async()=>{
            const result = await api.call(endpoints.getAll);
            setData(result.data);

        }
        getContacts();
    },[])
    const handleDelete = async() =>{
        console.log(deleteId);
        const config = {
            params:[deleteId]
        }
        const deleted = await api.call(endpoints.removeProduct, config);
        window.location.reload();
        console.log(deleted);
   
     
      
    }
    if(deleteId){
        handleDelete();
    }
    console.log(data);
    return <> <Table striped bordered hover>
             <thead>
          <tr>
            <th className="email-change">Name</th>
            <th className="email-change">Last Name</th>
            <th className="email-change">Address</th>
            <th className="email-change">City</th>
            <th className="email-change">Country</th>
            <th className="email-change">Email</th>
            <th className="email-change">Number</th>
            <th className="email-change">Edit</th>
            <th className="email-change">Delete</th>
          </tr>
        </thead>
        <tbody >
    {data.length>0 &&data.map((elem)=>{
       
   return(
    <>
     
          <tr>
            <td className="email-change">{elem.firstName}</td>
            <td className="email-change">{elem.lastName}</td>
            <td className="email-change">{elem.address}</td>
            <td className="email-change">{elem.city}</td>
            <td className="email-change">{elem.country}</td>
            <td className="email-change">
            {elem.emails && elem.emails.map((ema)=>{
                return(
                  
                       

                 <p>{ema}</p>
                 

                )
                
            })}
               </td>
                    
               <td className="email-change">
            {elem.phonenumber && elem.phonenumber.map((phone)=>{
                return(
                  
                       

                 <p>{phone}</p>
                 

                )
                
            })}
               </td>
                    
            
    
            <td className="center-btn"><button
            onClick={()=>{
                navigate(`/edit/${elem._id}`)
            }}
             className="edit-btn">Edit</button></td>
            <td className="center-btn"><button className="delete-btn"
            onClick={()=>{setDeleteId(elem._id)}}>Delete</button></td>
          </tr>
         
      
    </>
   )
       

    })}
      </tbody>
          </Table>
    </>
}
export default ContactsHolder;