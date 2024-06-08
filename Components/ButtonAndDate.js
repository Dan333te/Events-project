import React from 'react'
import Button from '@/Ui/Button'
import classes from './ButtonAndDate.module.css'

const ButtonAndDate = ({date}) => {
  
  return (
    <div className='flex justify-between items-center w-full' >
<Button link={'../'}>Back to home page</Button>

<p className='text-gray-800'>{date}</p>
    </div>
  )
}

export default ButtonAndDate