
import {commonAPI} from './commonAPI'
/* 
import {serverURL} from './serverUrl'
 */


//api to upload video
export const uploadAllVideo = async (reqBody)=>{
   return await commonAPI('POST',`https://mediaplayerbackend.onrender.com/Videos`,reqBody)
}


//api to get all video
export const getAllVideos = async ()=>{
   return await commonAPI('GET',`https://mediaplayerbackend.onrender.com/Videos`,"")
}

//api to delete video by id

export const deleteVideos = async (id)=>{
   return await commonAPI('DELETE',`https://mediaplayerbackend.onrender.com/Videos/${id}`,{})
}

//add watch history

export const addToWatch= async (videoDetails)=>{
   return await commonAPI('POST',`https://mediaplayerbackend.onrender.com/History`,videoDetails)
}

//api to get watch history
export const getWatchHistory = async ()=>{
   return await commonAPI('GET',`https://mediaplayerbackend.onrender.com/History`,"")
}


//api to upload category
export const uploadCategory = async (reqBody)=>{
   return await commonAPI('POST',`https://mediaplayerbackend.onrender.com/Category`,reqBody)
}

//api to delete history


export const deleteHistory = async (id)=>{
   return await commonAPI('DELETE',`https://mediaplayerbackend.onrender.com/History/${id}`,{})
}

//api to get category
export const getCategory = async ()=>{
   return await commonAPI('GET',`https://mediaplayerbackend.onrender.com/Category`,"")
}


//api to delete category


export const deleteCategory = async (id)=>{
   return await commonAPI('DELETE',`https://mediaplayerbackend.onrender.com/Category/${id}`,{})
}

//api to get a video which is dragged and dropped

export const getAVideo= async (id)=>{
   return await commonAPI('GET',`https://mediaplayerbackend.onrender.com/Videos/${id}`,"")
}

//api call to update the category when a video is dropped
//body=>videodetails
//id=>category id 
export const updateCategory = async (id,body)=>{
   return await commonAPI('PUT',`https://mediaplayerbackend.onrender.com/Category/${id}`,body)
}