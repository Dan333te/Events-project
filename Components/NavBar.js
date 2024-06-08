import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <header>
    <nav>
      <div>
        <h4>Eventers!</h4>
      </div>
      <ul>
        <li>
          <Link href="/">Featured Events</Link>
        </li>
        <li>
          <Link href="/events">All Events</Link>
        </li>
        <li>
          <Link href="">Browse Events</Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default NavBar