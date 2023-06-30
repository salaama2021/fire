import {useState, useEffect} from "react";
import postService from "../services/postService";

import UpdateModalComponent from "./UpdateModalComponent"; 
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function ShowComponent(){

    const [posts, setPosts] = useState({})

    const fetchPosts = async()=>{
        setPosts (await postService.getPosts());

    }

    useEffect(()=>{
        fetchPosts();
 
    },[]);

    const deletePost = async(id,e) =>{
        var response = postService.deletePost(id);
        if(response.data.success === true){
            alert(response.data.msg);
            document.getElementById(id).parentElement.parentElement.remove();
        }
          else{
            alert(response.data.msg);
          }
    }

    

    return(
        <div className="App">
            <h1>EMPLOYEE MANAGEMENT SYSTEM</h1>
            {posts.data !== undefined && posts.data.data.length > 0 && (

                <table style={{width:'100%'}} border='1'>
                    <thead>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Bio</th>
                        <th>Image</th>
                        <th>EmployeePosition</th>
                        <th>PhoneNumber</th>
                        <th>Id</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </thead>
                    <tbody>
                        {posts.data.data.map(post=>(
                            <tr>
                                <td>{post.name}</td>
                                <td>{post.surname}</td>
                                <td>{post.email}</td>
                                <td>{post.bio}</td>
                                <td>
                                    <img src={'http://127.0.0.1:8000/api/postImages/'+post.image} style={{width:'100px',height:'100px'}}/>
                                </td>
                                <td>{post.dateofbirth}</td>
                                <td>{post.employeeposition}</td>
                                <td>{post.phonenumber}</td>
                                <td>
                                    <button id={post._id} onClick={(e) =>deletePost(post._id)}>Delete</button>
                                </td>
                                <td>
                                    <UpdateModalComponent  name={post._name} surname={post._surname} email={post._email} bio={post._bio} image={post._image} dateofbirth={post._dateofbirth} employeeposition={post._employeeposition} phonenumber={post._phonenumber} />
                                </td>
                            </tr>
                        )

                        )}
                    </tbody>
                </table>
            )
            
            }
        </div>
    );
}

export default ShowComponent;