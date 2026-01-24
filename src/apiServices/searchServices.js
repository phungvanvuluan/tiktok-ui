import * as request from '~/utils/request';
export const search = async (q, limit = 5) => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                limit,
            },
        });
        return res.users;
    } catch (error) {
        console.log(error);
    }
};
