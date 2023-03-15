const axios = require("axios");

async function getGod(...filters) {
    try {
        const { damageType, godPantheon, godClass } = filters[0];
        const results = await axios.get(
            `http://localhost:4000/api/v1/dev/gods/getGods?type=${damageType}&pantheon=${godPantheon}&role=${godClass}`
        );
        return results;
    } catch (err) {
        console.error(err);
    }
}

export { getGod };
