import express from "express"

import urlRoute from "../minimizer/routes/url"

const app = express();

const PORT = 8001;

app.use("/url" ,urlRoute)

app.listen(PORT, () => console.log("server is listening on 8000"))