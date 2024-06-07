import React from 'react'
import { useRouter } from 'next/router'
const FilteredEvents = () => {
    const router=useRouter();
    const slug=router.query.slug;
    console.log(slug)
    // let arrLength=slug.length
  return (
    <div>Filtered events page {slug && <>{slug[slug.length-1]}</>}</div>
  )
}

export default FilteredEvents