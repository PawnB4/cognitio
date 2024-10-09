import { serveStatic } from "@hono/node-server/serve-static";

import configureOpenAPI from "./lib/configure-open-api";
import { createApp, createRouter } from "./lib/create-app";
import { createTaskHandler, getAllTasksHandler } from "./routes/tasks/tasks.handlers";
import { createTaskRoute, getAllTasksRoute } from "./routes/tasks/tasks.routes";

const app = createApp();

configureOpenAPI(app);

const taskRouter = createRouter()
  .openapi(getAllTasksRoute, getAllTasksHandler)
  .openapi(createTaskRoute, createTaskHandler);

const _routes = app
  .get("/api", c => c.json({ message: "Cognitio API" }))
  .route("/api", taskRouter);

app.get("*", serveStatic({ root: "./frontend/dist" }));

export type AppType = typeof _routes;

export default app;
