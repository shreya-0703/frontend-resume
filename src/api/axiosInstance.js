// axios.create() lets you create a pre-configured axios instance. 
// The instance shares the same request and response API as the default axios object

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: " https://server-resume-6.onrender.com/",
  timeout: 5000,
});
// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("API request received");
    
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response){
        const status = error.response.status
        if(status===401){
            console.log("Unauthorized error");
            
        }
        else if(status===404){
            console.log("API not found");
            
        }
        else if(status===500){
            console.log("Something went wrong on server");
            
        }
        else if(error.request){
            console.log("NO response from the server");
            
        }

    }
    else{
        console.log("Error",error.message);
        
    }
    
  }
);
export default axiosInstance