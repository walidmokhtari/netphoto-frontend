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

    verifyToken(token) {
      return fetch('http://localhost:3001/api/v1/users/verify-token', {
          headers: {
              "authorization":token
          }
      })
      .then(res => res.json())
    },

    updateUser(token, user) {
      return fetch('http://localhost:3001/api/v1/users/update-user', {
          method: "PUT",
          headers: {
              "authorization": token,
              "content-type":"application/json"
          },
          body: JSON.stringify(user),
      })
      .then(res => res.json())
  },
}