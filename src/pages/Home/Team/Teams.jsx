import React, { useEffect, useState } from 'react'
import TeamCard from './TeamCard'
import uid from '../../../utilities/uid'
import useFetch from '../../../Hooks/useFetch'

const Teams = () => {
    const members = useFetch('team-members.json')
  return (
    <div className='mb-32 px-3'>
       <div className='space-y-3 mb-16 text-center'>
       <h3 className='text-[#FF3811] font-bold'>Team</h3>
        <h1 className="text-5xl font-bold">Meet Our Team</h1>
        <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
       </div>
       <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        {
            members?.map(member => <TeamCard key={uid()} member={member}></TeamCard>)
        }
       </div>
    </div>
  )
}

export default Teams