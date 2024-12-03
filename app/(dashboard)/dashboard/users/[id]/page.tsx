'use client'
import React from 'react'
import { useParams } from 'next/navigation'

const page = () => {
    const params = useParams<{ id: string }>()
  return (
    <div>
      <h1 className='text-3xl'>User {params.id}</h1>
    </div>
  )
}

export default page
