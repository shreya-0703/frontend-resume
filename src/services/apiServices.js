import axiosService from "../api/axiosService";


export const addResumeAPI=async(reqBody)=>{
return await axiosService('POST','/resumes',reqBody)
}


export const displayResumeAPI=async()=>
{
    return await axiosService('GET','/resumes',{})
}

export const deleteResumeAPI=async(id)=>{
    return await axiosService('DELETE',`/resumes/${id}`,{})
}

export const viewResumeAPI=async(id)=>{
    return await axiosService('GET',`/resumes/${id}`,{})
}

export const editResumeAPI =async(id,reqBody)=>{
    return await axiosService('PUT',`/resume/${id}`,reqBody)
}

export const downloadResumeAPI=async(reqBody)=>{
return await axiosService('POST','/history',reqBody)
}

export const displayDownloadAPI=async()=>
{
    return await axiosService('GET','/history',{})
}

export const uploadToCloudinary=async(imageData)=>{
    const formData=new FormData()
    formData.append("file",imageData)
    formData.append(
        "upload_preset",
        "resume_builder",
    )
    const response = await fetch('https://api.cloudinary.com/v1_1/af3qzfwf/image/upload',{
        method : "POST",
        body : formData
})
    
    const result=await response.json()
    return result
}