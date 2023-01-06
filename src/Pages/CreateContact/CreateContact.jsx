import './CreateContact.css'
import {Form, Button,Alert} from 'react-bootstrap';
import {useState} from 'react';
import {api,endpoints} from '../../Lib'
import {useNavigate} from 'react-router-dom'



const CreateContact = () =>{
  const navigate = useNavigate();
    
    const [name,setName] = useState('');
    const [lastName, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [emails, setEmails] =  useState(['']);
    const [numbers, setNumbers] = useState(['']);
    const [created,setCreated] = useState(false);
    console.log(numbers);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(name,lastName, address, city, country, emails, numbers)
        const data ={
            name,
            lastName,
            address,
            city,
            country,
            emails,
            numbers
        }
        const config ={

        }
        
        config.data = data;
        const result = await api.call(endpoints.addContact, config);
        console.log(result);
        if(result.success){
            setTimeout(()=>{
                setCreated(true);
            },3000)
            setTimeout(()=>{
              setCreated(false);
              navigate('/')
            },5000)
        }
    }
    const handleEmailClick = async(e)=>{
        e.preventDefault();
        const tempEmails = [...emails];
        tempEmails.push('');
        setEmails(tempEmails);
    }
    const handleNumberClick = async(e)=>{
        e.preventDefault();
        const tempNumbers = [...numbers];
        tempNumbers.push('');
        setNumbers(tempNumbers);
    }
    console.log(emails);
    return <>
    {created ? (<> 
    <Alert variant='success'>Your contact has been successfully added.</Alert>

    </>):(<>
   
    <div className="wrapper-contact">
        <div className="register">
            <h3>Register new contact</h3>
            <div className="form-container">
                <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3">
    <Form.Label className="to-bd">Name</Form.Label>
    <input
      type='text'
      required
      className="form-control"
      value={name}
      onChange={(e) => {
        setName(e.target.value)
      }}
      placeholder="Enter the name"
    />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label className="to-bd">Last Name</Form.Label>
    <input
      type='text'
      required
      className="form-control"
      value={lastName}
      onChange={(e) => {
        setLastname(e.target.value)
      }}
      placeholder="Enter Last Name"
    />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label className="to-bd">Address</Form.Label>
    <input
      type='text'
      required
      className="form-control"
      value={address}
      onChange={(e) => {
        setAddress(e.target.value)
      }}
      placeholder="Enter Address"
    />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label className="to-bd">City</Form.Label>
    <input
      type='text'
      required
      className="form-control"
      value={city}
      onChange={(e) => {
        setCity(e.target.value)
      }}
      placeholder="Enter city"
    />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label className="to-bd">Country</Form.Label>
    <input
      type='text'
      required
      className="form-control"
      value={country}
      onChange={(e) => {
        setCountry(e.target.value)
      }}
      placeholder="Enter country"
    />
  </Form.Group>
  <div className="email-wrapper">
    <p className="to-bd">Emails</p>
{emails.length===0 &&(
    <>
    <div className="email-container">

    <div className="email-form">

  
      <Form.Group className="mb-3">

    <input
      type='email'
      required
      className="form-control"
      value={emails}
      onChange={(e) => {
        const tempEmail = [...emails]
        tempEmail[0] = e.target.value;
        setEmails(tempEmail)
      }}
      placeholder="Enter the email"
    />
  </Form.Group>
  </div>

  </div>
    </>
)}
{emails && emails.map((elem,index)=>{
    return (
        <>
            <div className="email-container">

<div className="email-form">


  <Form.Group className="mb-3">

<input
  type='email'
  required
  className="form-control"
  value={elem}
  onChange={(e) => {
    const tempEmail = [...emails]
    tempEmail[index] = e.target.value;
    setEmails(tempEmail)
  }}
  placeholder="Enter the email"
/>
</Form.Group>
</div>

</div>
        </>
    )

})}
<div className="btn-wrapper">


  <Button className="button-form"
  onClick={handleEmailClick}>Add</Button>
  </div>
  </div>
  <div className="email-wrapper">
    <p className="to-bd">Numbers</p>
{numbers.length===0 &&(
    <>
    <div className="email-container">

    <div className="email-form">

  
      <Form.Group className="mb-3">

    <input
      type='number'
      required
      className="form-control"
      value={numbers}
      onChange={(e) => {
        const tempNumber = [...numbers]
        tempNumber[0] = e.target.value;
        setNumbers(tempNumber)
      }}
      placeholder="Enter the number"
    />
  </Form.Group>
  </div>

  </div>
    </>
)}
{numbers && numbers.map((elem,index)=>{
    return (
        <>
            <div className="email-container">

<div className="email-form">


  <Form.Group className="mb-3">

<input
  type='number'
  required
  className="form-control"
  value={elem}
  onChange={(e) => {
    const tempNumbers = [...numbers]
    tempNumbers[index] = e.target.value;
    setNumbers(tempNumbers)
  }}
  placeholder="Enter the number"
/>
</Form.Group>
</div>

</div>
        </>
    )

})}
<div className="btn-wrapper">


  <Button className="button-form"
  onClick={handleNumberClick}>Add</Button>
  </div>
  </div>

<Button type="submit" >Save</Button>
                </Form>
            </div>
        </div>
        

    </div>
    </>)}
    </>
}
export default CreateContact;