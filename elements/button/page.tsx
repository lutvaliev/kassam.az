"use client"
import React from 'react'
import "./style.css"
interface Props {
  className?: string,
  title?: string,
  id?: string,
}
const Button = ({className, title, id}:Props) => {

  return (
    <button id={id} className={`btn ${className === "dark" ? "darkBtn" : "whiteBtn"}`}>{title}</button>
  )
}

export default Button