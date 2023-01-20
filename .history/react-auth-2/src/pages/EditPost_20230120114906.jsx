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
        axios.post(`http://127.0.0.1:8080/api/allpost/${id}`, {withCredentials: true})
        .then(function(response) {
            // handle access .....
            setSinglePost(response?.data?.data);
            console.log(response?.data?.data);
        }).catch(function(error) {
            // handle error
            setLoading(false);
        }).then(function() {
            //  always executed ....
        });
    }

    return (
        <div>
            Edit POst
        </div>
    )
}

export default EditPost
