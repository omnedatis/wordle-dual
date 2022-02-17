const address = `http://192.168.0.118:8082`
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
export default async function startGame(req, res) {
  const gameId = req.body.gameId
  console.log("startGame, request", gameId)
  const data = await fetcher(`${address}`,
  {"cmd":"startGame", "data":{"requestId":gameId}}
  ).then(data => {
    return data
  });
  console.log("startGame, response:", data)
  res.status(200).json({ data: data.data })
}
