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
}