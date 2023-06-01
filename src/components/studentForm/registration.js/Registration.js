import axios from 'axios';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './registration.css'
const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company:'',
    position:'',
    phoneNumber:'',
    linkedInProfile:'',
    areasOfExpertise:'',
    experience:'',
    availability:'',
    resumeURL:''
  });

  const {fullName,email,company,position,phoneNumber,linkedInProfile,areasOfExpertise,experience,availability,resumeURL}=formData
  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const [status, new_status] = useState({
    status_form: ''
});

  const onSubmit= e =>{
    // console.log(e);
    e.preventDefault();
    axios.post("http://localhost:5000/endpoint", formData).then(function(response) {
      new_status({status_form : 'Register success'})
      setFormData({
        fullName: '',
        email: '',
        company:'',
        position:'',
        phoneNumber:'',
        linkedInProfile:'',
        areasOfExpertise:'',
        experience:'',
        availability:'',
        resumeURL:''
      })

  }).catch(function(error) {
    new_status({status_form : 'Registration Fail'})
   

     console.log(error.message)
 });

 }
  

    return (

  <div className="registration">
    <h1 className='registration_heading'>Registration Form</h1>
    <form className='registration_form' onSubmit={onSubmit} method='POST' encType='multipart/form-data'>
      <div className="mb-3">
        <label  className="form-label"  >Full Name</label>
        <input type="text" className='form-control' id="fName" name="fullName" value={fullName} onChange={e=> onChange(e)} placeholder='Full Name' />
      </div>
      <div className="mb-3">
        <label  className="form-label">Email</label>
        <input type="text" className='form-control' id="email" name="email" value={email} onChange={e=> onChange(e)} placeholder='example@gmail.com'/>
      </div>
      <div className="mb-3">
        <label  className="form-label">Company</label>
        <input type="text" className='form-control' id="company" name='company' value={company} onChange={e=> onChange(e)} placeholder='Company Name' />
      </div>
      <div className="mb-3">
        <label  className="form-label">Position</label>
        <input type="text" className='form-control' id="position" name='position' value={position} onChange={e=> onChange(e)} placeholder="Position" />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input type="text" className='form-control' id="phoneNumber" name='phoneNumber' value={phoneNumber} onChange={e=> onChange(e)} placeholder='Phone Number' />
      </div>
      <div className="mb-3">
        <label className="form-label">Linkedin Profile</label>
        <input type="text" className='form-control' id=" linkedInProfile" name='linkedInProfile' value={linkedInProfile} onChange={e=> onChange(e)} placeholder='Linkedin Profile' />
      </div>
      <div className="mb-3">
        <label  className="form-label">Area of Expertise</label>
        <input type="text" className='form-control' id=" areasOfExpertise" name='areaOfExpertise' value={areasOfExpertise} onChange={e=> onChange(e)} placeholder='Area of Expertise'/>
      </div>
      <div className="mb-3">
        <label className="form-label">Experience</label>
        <input type="text" className='form-control' id="experience" name='experience' value={experience} onChange={e=> onChange(e)} placeholder='Experience'  />
      </div>
      <div className="mb-3">
        <label className="form-label">Availability</label>
        <input type="text" className='form-control' id="availability" name='availability' value={availability} onChange={e=> onChange(e)} placeholder='Availability' />
      </div>
      <div className="mb-3">
        <label className="form-label">Resume URL</label>
        <input type="text" className='form-control' id="resumeURL" name='resumeURL' value={resumeURL} onChange={e=> onChange(e)} placeholder='Resume URL' />
      </div>
      
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>

  );
};

export default Registration;
