export default {
    register(user) {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },

    login(user) {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then((res) => res.json())
    },

    getUser(token) {
        return fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/get-user`, {
            headers: {
              "authorization":token
            },
        })
        .then ((res) => res.json())
    },
}