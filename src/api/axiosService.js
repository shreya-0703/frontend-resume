import axiosInstance from "./axiosInstance";

const axiosService = async(httpMethod,url,reqBody)=>{
    try{
        const response= await axiosInstance({
            method:httpMethod,
            url, //url:url,(same)
            data:reqBody
        })
        return response
    }
    catch(err){
        console.log('err',err);
        return err

    }
}

export default axiosService