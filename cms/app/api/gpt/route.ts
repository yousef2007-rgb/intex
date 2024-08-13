import OpenAI from "openai"
export async function POST(request: Request) {
    const body = await request.json();
    console.log(process.env.OPENAI_API_KEY)
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    try {
        const message = body.message;
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
            temperature: 0,
            max_tokens: 1000,
        });
        console.log(response)
        return Response.json({ response: response.choices[0].message.content });
    } catch (err) {
        console.error(err)
        return Response.json({ error: err });
    }
}
