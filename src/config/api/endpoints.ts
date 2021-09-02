const BASE_URL = "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/";
export const TOKEN = "XWJU9HQeFeqf";

const eps = {
    sendMessage: () => BASE_URL,
    allMessage: () => `${BASE_URL}?token=${TOKEN}`,
    numberOfMessage: (timestamp: string, limit: string) =>
        `${BASE_URL}?since=${timestamp}&limit=${limit}&token=${TOKEN}`
}

export default eps;
