import axios from "axios";

export const checkIdDuplicate = async (id) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/check-duplicate-id/${id}`);
        return response.data.is_duplicate;
    } catch (error) {
        console.error(error);
        return true;
    }
};
