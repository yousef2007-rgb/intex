import axios from "axios";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    const body = await request.json();
    const { email, password } = body;

    try {
        const token: any = await axios.post(
            `${process.env.URL}/api/auth/?isAdmin=true`,
            { email: email, password: password }
        );
        console.log(token);

        cookies().set("token", token.data, { maxAge: 24 * 60 * 60 * 1000 });
        return new Response("successfull");
    } catch (err: any) {
        console.log(err);

        return new Response(err.response.data, {
            status: err.response.status,
        });
    }
}

export async function GET(request: Request) {
    const cookieStore = cookies();
    const token:
        | {
            name: string;
            value: string;
        }
        | undefined = cookieStore.get("token");

    if (token != undefined) {
        return new Response(token.value);
    } else {
        return new Response(undefined);
    }
}

export async function DELETE(request: Request) {
    const cookieStore = cookies();
    cookieStore.delete("token");

    return new Response("done");
}
