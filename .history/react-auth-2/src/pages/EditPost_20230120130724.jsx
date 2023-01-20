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

        axios.put(`http://127.0.0.1:8080/api/updatepost/${id}`, {...body}, {withCredentials: true})
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
        <div className='max-w-screen-md mx-auto p-5'>
            <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full md:w-full px-3 mb-6 md:mb-0'>
                        <label htmlFor="title" className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Title</label>
                        <input 
                            type="text"
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded'
                            id='title'
                            placeholder='Title'
                            name='title'
                            autoComplete='off'
                            defaultValue={singlePost?.title}
                            {...register("title", {
                                required: true,
                            })}
                        />
                        {errors.title && errors.title.type === "required" && (
                            <p className='text-red-500 text-xs italic'>
                                Please fill out this field
                            </p>
                        )}
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full md:w-full px-3 mb-6 md:mb-0'>
                        <label htmlFor="desc" className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Description</label>
                        <textarea
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded'
                            id='desc'
                            placeholder='Description'
                            name='desc'
                            autoComplete='off'
                            {...register("desc", {
                                required: true,
                            })}
                            cols="30" rows="10"
                        >{singlePost?.desc}</textarea>
                        {errors.desc && errors.desc.type === "required" && (
                            <p className='text-red-500 text-xs italic'>
                                Please fill out this field
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <div>
                        <label title='click to select a picture'>
                            <input type="file" name="image" id="banner" 
                                className='hidden'
                                accept='image/*'
                                visibility="hidden"
                            />
                            <div className='flex flex-col'>
                                <div className='pb-2'>Upload Image</div>
                                {image || singlePost ? (
                                    <div className='pt-4'>
                                        <img 
                                            src={image ? image.image : singlePost?.image} 
                                            alt="Default Image" 
                                            className='object-contain -mt-8 p-5 w-1/2'
                                        />
                                    </div>
                                ) : (
                                    <div className='pt-4'>
                                        <img 
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaZWu6JFF7vxUdvIhvdG8RLQiMCI0RHUaitDRFpmj&s"
                                            alt="Default Image" 
                                            style={{background: "#EFEFEF"}}
                                            className="h-full w-48"
                                        />
                                    </div>
                                )}
                            </div>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditPost
