import React from 'react'

interface IProps {
  msg: string
}

const HelloWorld: React.FC<IProps> = (props) => {
  return (
    <div>{ props.msg }</div>
  )
}

export default HelloWorld
