import React from 'react'
import appWriteService from '../Appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id,title,featuredImage}){

    return(
        <Link to={`/post/$id`}>
        <div className='w-full flex justify-center items-center bg-white'>
            <div className='w-full flex justify-center bg-white'>
                <img src={appWriteService(featuredImage)} alt={title} className='rounded-xl'/>
            </div>
            <h2>{title}</h2>
        </div>
        </Link>
    )
}

export default PostCard
