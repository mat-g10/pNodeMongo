import { connectToDatabse } from "../../utils/mongodb";
import { ObjectID } from "mongodb";

export default async (req, res) => {
    if (req.method == "POST") {
        const { db } = await connectToDatabse();
        const data = req.body;
        const result = await db
            .collection("")
            .find({_id: ObjectID(data) })
            .toArray();
        res.status(200).send(result[0]);
    }
}
