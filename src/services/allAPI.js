
import {commonAPI} from './commonAPI'
/* 
import {serverURL} from './serverUrl'
 */


//api to upload video
export const uploadAllVideo = async (reqBody)=>{
   return await commonAPI('POST',`http://localhost:5000/Videos`,reqBody)
}


//api to get all video
export const getAllVideos = async ()=>{
   return await commonAPI('GET',`http://localhost:5000/Videos`,"")
}

//api to delete video by id

export const deleteVideos = async (id)=>{
   return await commonAPI('DELETE',`http://localhost:5000/Videos/${id}`,{})
}

//add watch history

export const addToWatch= async (videoDetails)=>{
   return await commonAPI('POST',`http://localhost:5000/History`,videoDetails)
}

//api to get watch history
export const getWatchHistory = async ()=>{
   return await commonAPI('GET',`http://localhost:5000/History`,"")
}


//api to upload category
export const uploadCategory = async (reqBody)=>{
   return await commonAPI('POST',`http://localhost:5000/Category`,reqBody)
}

//api to delete history


export const deleteHistory = async (id)=>{
   return await commonAPI('DELETE',`http://localhost:5000/History/${id}`,{})
}

//api to get category
export const getCategory = async ()=>{
   return await commonAPI('GET',`http://localhost:5000/Category`,"")
}


//api to delete category


export const deleteCategory = async (id)=>{
   return await commonAPI('DELETE',`http://localhost:5000/Category/${id}`,{})
}

//api to get a video which is dragged and dropped

export const getAVideo= async (id)=>{
   return await commonAPI('GET',`http://localhost:5000/Videos/${id}`,"")
}

//api call to update the category when a video is dropped
//body=>videodetails
//id=>category id 
export const updateCategory = async (id,body)=>{
   return await commonAPI('PUT',`http://localhost:5000/Category/${id}`,body)
}