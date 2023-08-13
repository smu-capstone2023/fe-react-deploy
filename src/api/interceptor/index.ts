import axios from "axios";

function setInterceptor(instance: any) {
    instance.default.baseURL = `${process.env.REACT_APP_SERVER_URL}`;
    instance.interceptors.request.use(function (config: any) {
        config.headers.Authorization = localStorage.getItem("access_token");
        return config;
    });

    instance.interceptors.response.use(
        function (response: any) {
            return response;
        },
        async function (error: any) {
            if (error.response && error.response.status === 403) {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/refresh_access_token`, {
                    headers: {
                        access_token: localStorage.getItem("access_token"),
                        refresh_token: localStorage.getItem("refresh_token"),
                    },
                });
                if (response.data.status_code === 240) {
                    const { access_token } = response.data;
                    instance.defaults.headers.common["Authorization"] = `${access_token}`;
                    localStorage.setItem("access_token", access_token);
                    return instance(error.config);
                } else {
                    alert("로그인 만료시간이 지났습니다.");
                    window.location.href = "/login";
                }
            }
            return Promise.reject(error);
        }
    );
    return instance;
}

function createInstance() {
    const instance = axios.create({
        baseURL: `${process.env.REACT_APP_SERVER_URL}`,
    });

    return setInterceptor(instance);
}

export const instance = createInstance();
