import React, {useEffect, useState} from 'react'

function Home() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const User = localStorage.getItem("user");
    const parseUser = JSON.parse(User);
    setUserData(parseUser);
  }, []);
  return (
    <div>
      <div className='relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center'>
        <div className='absolute top-0 right-0 bottom-0 left-0 bg-gray-900 capacity-75'></div>
        <main className='px-4 sm:px-6 lg:px-8 z-10'>
          <div className='text-center'>
            <h2 className='text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-normal'>
              <span className='text-indigo-600 font-bold'>
                Hi {userData?.firs_name} {userData?.last_name}
              </span>{" "}
              Welcome to my site!
            </h2>
            <p className='mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5'>
              Open Graph is an internet protocol that was
              created by Facebook ( meta ) to standardize the
              use of metadata within a webpage to represent 
              the content of a page
            </p>
            <div className='mt-5 sm:mt-8 sm:flex justify-center'>
              <div className='rounded-md shadow'>
                <a href="/create_post" className='w-full flex items-center justify-center px-8 py-3 border border-transparent rounded bg-indigo-600'>Create Post</a>
              </div>
              <div className='mt-3 sm:mt-0 sm:ml-3'>
                <a href="/personal_posts" className='w-full flex items-center justify-center px-8 py-3 border border-transparent rounded bg-indigo-50 '>View My Post</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
