import React, {useEffect, useState} from "react";
import {useForm} from 'react-hook-form'
import axios from 'axios'
// import {useSnackbar} from 'react-simple-snackbar'
import { Link, useNavigate } from 'react-router-dom'

export default function () {
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false);
    const [imageData, setImageData] = useState();
    const [imageUpload, setImageUpload] = useState();
    const [userData, setUserData] = useState();
    const [loadingData, setLoadingData] = useState();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        // watch,
        formState: {errors},
    } = useForm();

    useEffect(() => {
        const User = localStorage.getItem("user");
        const parseUser = JSON.parse(User);
        setUserData(parseUser);
        if (!User){
            navigate("/login")
        }
    }, []);

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

    const onSubmit = (data) => {
        setLoading(true);
        const body = {
            ...data,
            image: imageData,
            userid: userData.id,
            // phone: parseInt(data.phone),
        }
        // console.log(body);
        // return
        axios.post(`http://127.0.0.1:8080/api/createpost`, { ...body}, {withCredentials: true})
        .then(function(response) {
            // handle access .....
            setLoading(false);
            navigate("/personal_posts");
        }).catch(function(error) {
            // handle error
            setLoading(false);
        }).then(function() {
            //  always executed ....
        });
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        const size = file.size / 1024;
        setImageUpload(e.target.files[0]);

        // data.append("image", file)
        const reader = new FileReader();
        reader.onloadend = function() {
            setImage({ [e.target.name]: reader.result })
        };
        if (e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
            e.target.value = null;
        }
    };

    const uploadImage = () => {
        let formData = new FormData(); // formData object
        formData.append("image", imageUpload); // append the value with key, value pair
        formData.append("name", imageUpload.name);
        const config = {
            headers: {"Content-Type":"multipart/form-data"},
            withCredentials: true,
        };
        let url = `http://127.0.0.1:8080/api/upload-image/`;
        axios.post(url, formData, config)
        .then((response) => {
            setLoadingData(false);
            setImageData(response?.data?.url);
            // openSnackbar("Image Uploaded Successfully");
        })
        .catch((error) => {
            setLoadingData(false);
            console.log(error);
        });
    }

    return (
        <div>
            Create Blog
        </div>
    )
}