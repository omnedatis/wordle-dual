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
export default async function endGame(req, res) {
    const gameId = req.body.gameId
    console.log("endGame, request", gameId)
    const data = await fetcher(`${address}`,
        { "cmd": "endGame", "data": { "requestId": gameId } }
    ).then(data => {
        return data
    });
    console.log("endGame, response:", data)
    res.status(200).json({ data: data.data })
}