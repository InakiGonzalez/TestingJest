import {rest} from 'msw';

export const handlers = [
    rest.post('https://auth-provider.example.com/api/login', (req, res, ctx) => {
        const { username, password} = req.body as { username?: string; password?: string };

        if (!username || username.trim() === ""){
            return res(
                ctx.status(400),
                ctx.json({ error: {message: "Username is required" }
                })
            );
        }
        if (!password || password.trim() === ""){
            return res(
                ctx.status(400),
                ctx.json({ error: {message: "Password is required" }})
            );
        }

        if (username === "user" && password === "password"){
            return res(
                ctx.status(200),
                ctx.json({ username })
            );
        } else {
            return res(
                ctx.status(403),
                ctx.json({ error : {message: "Invalid credentials" }})
            );
        }

    }),
]