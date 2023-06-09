import axios from "axios";

export async function refreshAuthToken(token) {
    try {
        const newToken = await axios.get(
            `${process.env.REACT_APP_BACKEND_HOST}/user/refresh-token?token=${token.token}`,
            {
                headers: {
                    "x-api-key": process.env.REACT_APP_TOKEN_KEY,
                },
            }
        );
        return newToken.data.data.response[0];
    } catch (err) {
        console.error(err);
        alert("Error refreshing token");
        return null;
    }
}
