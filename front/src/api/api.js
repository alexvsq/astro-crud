import axios from "axios";


const api = "http://localhost:4040"

export const getTasks = async () => {
    try {
        const data = await axios.get(api + "/tasks")
        return data.data
    } catch (error) {
        console.log(error);
    }
}

export const createTask = async (data) => {
    try {
        const res = await axios.post(api + "/tasks", data)
        return res
    } catch (error) {
        console.log(error);
    }
}

export const getOneTask = async (id) => {
    try {
        const res = await axios.get(api + "/tasks/" + id)
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const updateTask = async (task, id) => {
    try {
        const res = await axios.put(api + "/tasks/" + id, task)
        return res
    } catch (error) {
        console.log(error);
    }
}

export const deleteTask = async (id) => {
    try {
        const res = await axios.delete(api + "/tasks/" + id)
        return res
    } catch (error) {
        console.log(error);
    }
}