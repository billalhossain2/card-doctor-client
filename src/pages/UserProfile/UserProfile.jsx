import React, { useContext } from 'react';
import useTitle from '../../Hooks/useTitle';
import { userContext } from '../../Providers/AuthProvider';

const UserProfile = () => {
    useTitle("User Profile - Car Doctor")
    const {user} = useContext(userContext)
  return (
    <div className='space-y-3 flex flex-col justify-center items-center my-10'>
       <img className='w-40 h-40 rounded-full' src={user?.photoURL} alt="User Profile" />
       <h3 className='font-bold text-3xl'>{user?.displayName}</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corrupti magnam odio illo, sed exercitationem assumenda harum, optio dolorem unde numquam cumque molestias nam totam aperiam est incidunt vitae. Doloremque sapiente obcaecati dolorem laudantium consequuntur suscipit explicabo! Inventore obcaecati sint facilis est id officia, deserunt voluptatibus incidunt magni expedita minus!</p>
    </div>
  );
};

export default UserProfile;
