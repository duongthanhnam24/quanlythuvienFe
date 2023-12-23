import axios from "axios";

export const axiosJWT = axios.create();
// export const GetDetailUser = async (id, access_token) => {
//     const res = await fetch(`http://localhost:4000/users/profile/${id}`, {
//         method: "GET",
//         headers: {
//             token: `beares ${access_token}`,
//         },
//     });
//     const data = await res.json();
//     return data;
// };

export const GetAllUser = async (search) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/users/all-user${search}`, {
        method: "GET",
    });
    const data = await res.json();
    return data;
};

export const GetDetailUser = async (id, access_token) => {
    try {
        const res = await axiosJWT.get(
            `${process.env.NEXT_PUBLIC_API_APP_URL}/users/profile/${id}`,
            {
                headers: {
                    token: `${access_token}`,
                },
            }
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const Punish = async (id, key) => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/users/punish/${id}/${key}`, {
        method: "PATCH",
    }).then((res) => res.json());
    return data;
};

export const updateUser = async (id, valueForm) => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/users/update/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(valueForm),
    }).then((res) => res.json());
    return data;
};
export const rf = async (refresh_token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/refresh`, {
        method: "POST",
        headers: {
            refresh: `${refresh_token}`,
        },
    });
    const data = await res.json();
    return data;
};

export const deletes = async (id) => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/users/move/trash/${id}`, {
        method: "DELETE",
    }).then((res) => res.json());
    return data;
};
