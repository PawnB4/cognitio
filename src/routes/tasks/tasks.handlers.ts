import type { AppRouteHandler } from "@/lib/types";

import type { CreateRoute, ListRoute } from "./tasks.routes";

export const getAllTasksHandler: AppRouteHandler<ListRoute> = async (c) => {
  // await new Promise(resolve => setTimeout(resolve, 2000));
  return c.json([{
    name: "Learn Hono",
    done: false,
  }, {
    name: "Learn React",
    done: true,
  }]);
};

export const createTaskHandler: AppRouteHandler<CreateRoute> = (c) => {
  const task = c.req.valid("json");

  return c.json({
    name: task.name,
    done: task.done,
  });
};
