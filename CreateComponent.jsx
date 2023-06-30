import React, {useState} from 'react';
import postService from '../services/postService';

function CreateComponent(){

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email,setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [image, setImage] = useState('');
    const [dateofbirth,setDateofbirth] = useState('');
    const [employeeposition, setEmployeePosition] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [id,setId] = useState('');

    const handleSubmit = async(event)=>{
        event.preventDefault();

       const formData = new FormData();

       formData.append('name',name);
       formData.append('surname',surname);
       formData.append('email',email);
       formData.append('bio',bio);
       formData.append('image',image);
       formData.append('dateofbirth',dateofbirth);
       formData.append('employeeposition',employeeposition);
       formData.append('phonenumber',phonenumber);
       formData.append('id',id);
       



           const response = await postService.create(formData);
           if(response.data.success === true){
              setMessage('Post successfully created.')
           }
           else{
            setMessage('Post failed!.');
           }

           setTimeout(function(){
            setMessage('');
           },2000);
           
           event.target.reset();

    };

    return(
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
            <input type='text'
            name='name'
            placeholder='Enter Name'
            onChange={event => setName(event.target.value)}
            required/>
            <br></br>

            <input type='text'
            name='surname'
            placeholder='Enter Surname'
            onChange={event => setSurname(event.target.value)}
            required/>
            <br></br>

            <input type='text'
            name='email'
            placeholder='Enter Email'
            onChange={event => setEmail(event.target.value)}
            required/>
            <br></br>

            <input type='text'
            name='bio'
            placeholder='Enter Bio'
            onChange={event => setBio(event.target.value)}
            required/>
            <br></br>

            <input type='text'
            name='image'
            placeholder='Enter Image'
            onChange={event => setImage(event.target.value[0])}
            required/>
            <br></br>

            <input type='text'
            name='dateofbirth'
            placeholder='Enter Dateofbirth'
            onChange={event => setDateofbirth(event.target.value)}
            required/>
            <br></br>

            <input type='text'
            name='employeeposition'
            placeholder='Enter EmployeePosition'
            onChange={event => setEmployeePosition(event.target.value)}
            required/>
            <br></br>

            <input type='number'
            name='phonenumber'
            placeholder='Enter PhoneNumber'
            onChange={event => setPhoneNumber(event.target.value)}
            required/>
            <br></br>

            <input type='number'
            name='id'
            placeholder='Enter Id'
            onChange={event => setId(event.target.value)}
            required/>
            </form>

        </div>
    );
}

export default CreateComponent;