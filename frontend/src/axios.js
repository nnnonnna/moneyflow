import router from "../router.js";

const axiosClient = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
    withCredentials: true, //sends cookie
    withXSRFToken: true //sends header

})
//
// axiosClient.interceptors.request.use(config => {
//
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
// })

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            router.push({ name: 'login' });
        }

        // Always rethrow the error so the calling code can handle it
        throw error;
    }
);

export default axiosClient