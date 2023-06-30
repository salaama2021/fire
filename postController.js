const Post = require('../models/postModel');

const createPost = async(req,res)=>{

    try{

         new Post({
            name:req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            bio: req.body.bio,
            image:req.file.filename,
            dateofbirth:req.body.dateofbirth,
            employeeposition:req.body.employeeposition,
            phonenumber:req.body.phonenumber,

         });
         const postData = await postMessage.save();

         res.status(200).send({success:true,msg:'Post Data',data:'Post Data'});

    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
    }

    const getPosts = async(req,res)=>{
        try {
      
            const posts = await Post.find({});
            res.status(200).send({success:true,msg:'Posts Data',data:posts});

        }catch (error) {
            res.status(400).send({success:false,msg:error.message});
        
        }
        
        }
    
     const deletePost = async(req, res)=>{
        try{

            const id = req.params.id;

            await Post.deleteOne({ _id:i});
            res.status(200).send({success:true,msg:'Post deleted Successfully!'});

        }catch (error) {
            res.status(400).send({success:false,msg:error.message});
        }
     }

     const updatePost = async(req,res)=> {
        try{

        if(req.file !== undefined){
         var name = req.body.name;
        var surname = req.body.surname;
        var email = req.body.email;
        var bio = req.body.bio;
        var surname = req.body.surname;
        var employeeposition = req.body.employeeposition;
        var phonenumber = req.body.phonenumber;
        var id= req.body.id;
       
        Post.findByIdAndUpdate({id:id},{$set:{name:name,surname:surname,email:email,bio:bio,image:image,employeeposition:employeeposition,phonenumber:phonenumber,id:id}});
        res.send(200).send({success:true,msg:'Post Updated Successfully!'}),

        }
        
        else{

            var name = req.body.name;
            var surname = req.body.surname;
            var email = req.body.email;
            var bio = req.body.bio;
            var surname = req.body.surname;
            var employeeposition = req.body.employeeposition;
            var phonenumber = req.body.phonenumber;
            var id= req.body.id;
           
            Post.findByIdAndUpdate({id:id},{$set:{name:name,surname:surname,email:email,bio:bio,image:image,employeeposition:employeeposition,phonenumber:phonenumber,id:id}});
            res.send(200).send({success:true,msg:'Post Updated Successfully!'}),
           
        };
    
        
        } catch (error) {
            res.status(400).send({success:false,msg:error.message});
        }
        
    
    module.exports = {
        createPost,
        getPosts,
        deletePost,
        updatePost

    }
}