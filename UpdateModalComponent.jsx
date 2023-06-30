import {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import postService from '../services/postService';

function UpdateModalComponent(props){

    const [isShow, invokeModal] = useState(false);

    const initModal = () =>{
       return  invokeModal(!isShow);
    }

    const [name, setName] = useState(props.name);
    const [surname, setSurname] = useState(props.surname);
    const [email, setEmail] = useState(props.email);
    const [bio, setBio] = useState(props.bio);
    const [image, setImage] = useState(props.image);
    const [dateofbirth, setDateOfBirth] = useState(props.dateofbirth)
    const [employeeposition, setEmployeePosition] = useState(props.employeeposition);
    const [phonenumber, setPhoneNumber] = useState(props.phonenumber);
    const [id, setId] = useState(props.id);
    const [selectedFile, setselectedFile] = useState(props.selectedFile)
    
    const handleSubmit = async(event) => {
      event.preventDefault();

      const formData = new FormData()

      formData.append('name',name);
      formData.append('surname',surname);
      formData.append('email',email);
      formData.append('bio',bio);
      formData.append('dateofbirth',dateofbirth);
      formData.append('employeeposition',employeeposition);
      formData.append('phonenumber',phonenumber);
      formData.append('id',id);
      
      if(selectedFile !== '' &&selectedFile.length !== 0){
          formData.append('image',selectedFile);
      }

      const response = await postService.update(formData);
      if(response.data.success ===true){
        alert
      }
    }


    return(
        <>
        <Button variant='success' onClick={initModal}>
            Edit
        </Button>
        

        <Modal show={isShow}>
            <Modal.Header closeButton onClick={initModal}>
              <Modal.Title>Update Post</Modal.Title>
            </Modal.Header>
              <form onSubmit={handleSubmit}>
            <Modal.Body>
                
                <input type='text'
                name='name'
                placeholder='Enter Post Name'
                value={name}
                onChange={event => setName(event.target.value)}
                required/>
                <br/><br/>

                 <input type='text'
                name='surname'
                placeholder='Enter Post Surname'
                value={name}
                onChange={event => setSurname(event.target.value)}
                required/>
                <br/><br/>

                <input type='text'
                name='email;'
                placeholder='Enter Post Email'
                value={email}
                onChange={event => setEmail(event.target.value)}
                required/>
                <br/><br/>
                
                 <input type='text'
                name='bio'
                placeholder='Enter Post Bio'
                value={bio}
                onChange={event => setBio(event.target.value)}
                required/>
                <br/><br/>
               
                 <input type='text'
                name='dateofbirth'
                placeholder='Enter Post DateOfBirth'
                value={dateofbirth}
                onChange={event => setName(event.target.value)}
                required/>
                <br/><br/>
                <input type='text'
                name='employeeposition'
                placeholder='Enter Post EmployeePosition'
                value={employeeposition}
                onChange={event => setEmployeePosition(event.target.value)}
                required/>
                <br/><br/>
                 <input type='number'
                name='phonenumber'
                placeholder='Enter Post PhoneNumber'
                value={phonenumber}
                onChange={event => setPhoneNumber(event.target.value)}
                required/>
                <br/><br/>

                <input type='file'
                name='file'
                onChange={event => setFile(event.target.value)}
                required/>
                <br/><br/>


            </Modal.Body>

            <Modal.Footer>
                <Button variant='danger' onClick={initModal}>
                  Close
                </Button>
                <Button variant='dark' onClick={initModal}>
                  Update
                </Button>
            </Modal.Footer>
            </form>
        </Modal>
        </>
    );
}
export default UpdateModalComponent