import React from 'react'

function Home(props: {name: string}) {
  return (
    <div>
      {props.name ? "Hi " + props.name : "You are not logged in."}
    </div>
  )
}

export default Home
