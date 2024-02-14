import db from "../../lib/firebase-admin";

// http://localhost:3000/api/views/this-is-a-view-slug

export default async (req, res) => {
  // increment the views
  if (req.method === "POST") {
    const ref = db.ref("views").child(req.query.slug);
    const { snapshot } = await ref.transaction((currentViews) => {
      if (currentViews === null) {
        return 1;
      }

      return currentViews + 1;
    });

    return res.status(200).json({
      total: snapshot.val(),
    });
  }

  // fetch the views
  if (req.method === "GET") {
    const snapshot = await db.ref("views").child(req.query.slug).once("value");
    const views = snapshot.val();

    return res.status(200).json({ total: views });
  }
};
