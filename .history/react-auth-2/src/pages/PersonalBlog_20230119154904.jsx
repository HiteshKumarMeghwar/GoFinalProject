import React, {useState, useEffect} from "react";
import axios from 'axios'
// import {useSnackbar} from 'react-simple-snackbar'
import { Link, useNavigate } from 'react-router-dom'

const PersonalBlog = () => {
    const [blogData, setBlogData] = useState();
    const [loading, setLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const navigate = useNavigate();

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

    const uniqueBlog = () => {
        setLoading(true);
        axios.get(`http://127.0.0.1:8080/api/uniquepost`, 
        {withCredentials: true, headers: {Authorization: "TOKEN"}
        }).then(function(response) {
            // handle access .....
            setLoading(false);
            setBlogData(response?.data)
            // console.log(response?.data)
        }).catch(function(error) {
            // handle error
            setLoading(false);
            // setMessage(error?.response?.data?.message);
            // openSnackbar(error?.response?.data?.message);
            // console.log(error?.response?.data?.message);
        }).then(function() {
            //  always executed ....
        });
        // console.log(data);
    }

    return (
        <div>
            Personal Blog
        </div>
    );
}