import { useRouter } from 'next/router';
import React from 'react'

const Osef = () => {
  const router = useRouter()
  const { params } = router.query
  console.log(router.query)
  return (
    <div>
      <h1>{params}</h1>
    </div>
  )
}

export default Osef;