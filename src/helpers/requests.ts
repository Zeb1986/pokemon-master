export const makeRequest = (query:string, variables:object) => {
    const url:string = 'https://graphql-pokemon2.vercel.app'
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ query, variables })
    }).then(res => res.json())
}