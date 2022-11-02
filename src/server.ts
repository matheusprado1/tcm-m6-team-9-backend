import AppDataSource from "./data-source";
import app from "./app";
import "dotenv/config";

(async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log("Database connection established");
    })
    .catch((error) => {
      console.error("Database connection failed", error);
    });
  const port = process.env.PORT || 8080;

  app.listen(port, () =>
    console.log(`Server listening on http://localhost:${port}`)
  );
})();
