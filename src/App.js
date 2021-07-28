import React, { Component } from "react";

const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10
    },
    {
      name: "Hanako",
      age: 5
    },
    {
      name: "Miyuki",
      age: 30
    },
    {
      name: "Noname"
    }
  ]
  return (
    <React.Fragment>
      {profiles.map((profile, index)=>{
        return <User key={index} name={profile.name} age={profile.age} />
      })}
    </React.Fragment>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

// propsとして渡されなかった場合のデフォルト値
User.defaultProps = {
  age: 1
}

export default App;

