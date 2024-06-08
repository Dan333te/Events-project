import React from 'react'
import Link from 'next/link'
import classes from './Button.module.css'
const Button = ({link,children}) => {
  return (
    <Link className={classes.Button} href={"/events/"+link}>{children}</Link>
  )
}

export default Button