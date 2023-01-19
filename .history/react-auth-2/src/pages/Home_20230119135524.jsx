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
      Hi, {userData?.firs_name} {userData?.last_name}
    </div>
  )
}

export default Home
