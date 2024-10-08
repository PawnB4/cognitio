import { serveStatic } from "@hono/node-server/serve-static";

import index from "@/routes/index.route";
import tasks from "@/routes/tasks/tasks.index";

import configureOpenAPI from "./lib/configure-open-api";
import { createApp } from "./lib/create-app";

const app = createApp();

const routes = [
  index,
  tasks,
];

configureOpenAPI(app);

routes.forEach((route) => {
  app.route("/api", route);
});

app.get("*", serveStatic({ root: "./frontend/dist" }));

export default app;
