import axios from "axios";

class POST{

create(formData){
    const url = "http://localhost:8000/api/create-post";
    const config = {
        Headers: {
            'Content-type':'multipart/form-data',
        }
    };
      axios.post(url, formData, config);
}

getPosts(){
    const url = "http://localhost:8000/api/create-post";

    return axios.get(url);
}
deletePosts(id){
    const url = "http://localhost:8000/api/delete-post/";

    return axios.get(url);
}
update(formData){
    const url = "http://localhost:8000/api/create-post";
    const config = {
        Headers: {
            'Content-type':'multipart/form-data',
        }
    };
      axios.post(url, formData, config);
}

}
export default new POST();