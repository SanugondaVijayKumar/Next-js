// import { MongoClient } from "mongodb";

// async function handler(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;

//     const client = await MongoClient.connect(
//       "mongodb+srv://vijaysudemy:KY0pzHaOnqDBZtHx@nextjs.d27ct38.mongodb.net/meetups?retryWrites=true&w=majority"
//     );
//     const db = client.db();

//     const meetupsCollection = db.collection("meetups");

//     const result = await meetupsCollection.insertOne(data);

//     console.log(result);
//     client.close();
//     res.status(201).send({ message: "meetup inserted" });
//   }
// }

// export default handler;

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://new_user-31:fgHW6qtpvfxVb0GD@nextjs.d27ct38.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      console.log(result);
      client.close();
      res.status(201).json({ message: "Meetup inserted" });
    } catch (error) {
      res.status(500).json({ message: "An error occurred." });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
