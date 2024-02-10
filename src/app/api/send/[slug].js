import db from "../../../firebase";

export default async (req, res) => {
  const slug = req.query.slug;

  // Basic validation for slug
  if (!slug) {
    return res.status(400).json({ error: "Slug is required" });
  }

  try {
    // Increment the views for POST requests
    if (req.method === "POST") {
      const ref = db.ref("views").child(slug);
      const { snapshot } = await ref.transaction((currentViews) => {
        if (currentViews === null) {
          return 1;
        }
        return currentViews + 1;
      });

      return res.status(200).json({ total: snapshot.val() });
    }

    // Fetch the views for GET requests
    if (req.method === "GET") {
      const snapshot = await db.ref("views").child(slug).once("value");
      const views = snapshot.val() || 0; // Default to 0 if null

      return res.status(200).json({ total: views });
    }

    // Handle unsupported methods
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
