const address = `http://localhost:8082`
const fetcher = (path, data) => {
    const url = path
    const req_content = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        redirect: 'follow'
    }
    return fetch(url, req_content).then(res => {
        return res.json();
    })
}
export default async function getAnswer(req, res) {
    const gameId = req.body.gameId
    const answer = req.body.answer
    const params = { "requestId": gameId, "answer": answer }
    console.log("getAnswer, request:", params)
    const data = await fetcher(`${address}`,
        {
            "cmd": "getAnswer",
            "data": params
        }
    ).then(data => {
        return data
    })
    console.log("getAnswer, response:", data)
    res.status(200).json({ data: data.data })
}