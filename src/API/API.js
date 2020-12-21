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
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
    getUsersProfile(userId) {
        return instance.get(`profile/` + userId)
    }
}

export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "f536faf9-83ce-4203-83de-763427f73e09"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

