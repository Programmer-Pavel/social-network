import axios from "axios";

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return profileAPI.getUsersProfile(userId);
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`,{email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const profileAPI = {
    getUsersProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "73c3d305-c997-41c1-b821-ddbc7770f535"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

