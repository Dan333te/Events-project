import { useRef } from 'react'
import React from 'react'
import classes from './SearchForm.module.css'
const SearchEvent = ({onClick,onSearch}) => {
    const YearRef=useRef();
    const monthRef=useRef()
const searchHandler=(event)=>{
event.preventDefault()
const year=YearRef.current.value
const month=monthRef.current.value
onSearch(year,month)
}


  return (
    <form className={classes.form} onSubmit={searchHandler}>
    <div className={classes.controls}>
        <div className={classes.control}>
    <label htmlFor='year'>Year : </label>
    <select className={classes.select} id='year' ref={YearRef}>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
    </select>
        </div>

        <div className={classes.control}>
        <label htmlFor='month'>month : </label>
    <select id='month' ref={monthRef}>
    <option value="1">January</option>
    <option value="2">February</option>
    <option value="3">March</option>
    <option value="4">April</option>
    <option value="5">May</option>
    <option value="6">June</option>
    <option value="7">July</option>
    <option value="8">August</option>
    <option value="9">September</option>
    <option value="10">October</option>
    <option value="11">November</option>
    <option value="12">December</option>
    </select>

        </div>
    </div>
<button onClick={onClick}>Search</button>

    </form>
  )
}

export default SearchEvent