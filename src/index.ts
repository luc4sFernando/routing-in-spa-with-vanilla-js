import express, { Request, Response } from "express";
const app = express();
import path from "path"

const indexPath = path.resolve(__dirname, '..', "public", "pages", "index.html")

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static('view'));

app.get("/*", (req: Request, res: Response) => {
    res.sendFile(indexPath)
})


app.listen(3001)
