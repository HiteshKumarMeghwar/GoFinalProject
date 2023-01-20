import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios'
// import {useSnackbar} from 'react-simple-snackbar'
import { useParams, useNavigate } from 'react-router-dom'

function EditPost() {
    const [singlePost, setSinglePost] = useState();
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();
    const [image, setImage] = useState();
    const {
        register,
        handleSubmit,
        // watch,
        formState: {errors},
    } = useForm();

    /* const options = {
        position: "bottom-right",
        style: {
        backgroundColor: "gray",
        border: "2px solid lightgreen",
        color: "white",
        fontFamily: "Menlo, monospace",
        fontSize: "20px",
        textAlign: "center",
        },
        closeStyle: {
        color: "lightcoral",
        fontSize: "16px",
        },
    }; */
    // const [openSnackbar] = useSnackbar(options);

    const singleBlog = () => {
        axios.get(`http://127.0.0.1:8080/api/allpost/${id}`, {withCredentials: true})
        .then(function(response) {
            // handle access .....
            setSinglePost(response?.data?.data);
            console.log(response?.data?.data);
        }).catch(function(error) {
            // handle error
            console.log(error);
        }).then(function() {
            //  always executed ....
        });
    };

    useEffect(() => {
        const User = localStorage.getItem("user");
        if(!User){
            navigate("/login")
        }
        singleBlog();
    }, [navigate]);

    const onSubmit = (data) => {
        setLoading(true);
        const body = {
            ...data,
            image: singleBlog?.image,
        }

        axios.get(`http://127.0.0.1:8080/api/updatepost/${id}`, {...body}, {withCredentials: true})
        .then(function(response) {
            // handle access .....
            // openSnackbar("Post Updated Successfully .. !");
            setLoading(false);
            navigate("/personal_posts");
        }).catch(function(error) {
            // handle error
            // openSnackbar("Post Not Updated");
            setLoading(false);
            console.log(error);
        });
    }

    return (
        <div>
            Edit POst
        </div>
    )
}

export default EditPost
