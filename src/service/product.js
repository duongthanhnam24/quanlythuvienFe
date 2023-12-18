export const getProduct = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/product/${id}`);
    const data = res.json();
    return data;
};

export const getAllProduct = async (pageUi) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/product?page=${pageUi - 1}`);
    const data = res.json();
    return data;
};

export const createProduct = async (valueForm) => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/product/create-product`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(valueForm),
    }).then((res) => res.json());
    return data;
};

export const updateProduct = async (id, valueForm) => {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_APP_URL}/product/update-product/${id}`,
        {
            method: "PATCH",
            body: JSON.stringify(valueForm),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }
    ).then((res) => res.json());
    return data;
};

export const deleteSoft = async (id) => {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_APP_URL}/product/delete-product/${id}`,
        {
            method: "DELETE",
        }
    ).then((res) => res.json());
    return data;
};

export const searhProduct = async (filter, search) => {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_APP_URL}/product/panigated/search${search}${filter}`
    ).then((res) => res.json());
    return data;
};

export const createOrder = async (id, item, time) => {
    let items = {
        name: item.name,
        image: item.image,
        type: item.type,
        author: item.author,
        _id: item._id,
        dateBorrow: time,
    };
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/order/create/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(items),
    }).then((res) => res.json());
    return data;
};

export const getOrderUser = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_APP_URL}/order/user-order/${id}`).then(
        (res) => res.json()
    );
    return res;
};
