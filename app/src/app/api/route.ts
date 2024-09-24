export const GET = () => {
    const posts = [
        {id: 1, text: 'AppRouter難しい', postedUser: {name: '見本太郎', icon: '太'}},
        {id: 2, text: '今日もいい天気', postedUser: {name: '見本次郎', icon: '次'}},
    ]
    return Response.json({message: 'ok', posts})
}