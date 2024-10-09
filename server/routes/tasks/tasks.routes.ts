import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";

export const getAllTasksRoute = createRoute({
  path: "/tasks",
  method: "get",
  tags: ["Tasks"],
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(
        z.object({
          name: z.string(),
          done: z.boolean(),
        }),
      ),
      "The list of tasks",
    ),
  },
});

export type ListRoute = typeof getAllTasksRoute;

export const createTaskRoute = createRoute({
  path: "/tasks",
  method: "post",
  tags: ["Tasks"],
  request: {
    body: jsonContentRequired(
      z.object({
        name: z.string(),
        done: z.boolean(),
      }),
      "The task to create",
    ),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.object({
        name: z.string(),
        done: z.boolean(),
      }),
      "The created task",
    ),
  },
});

export type CreateRoute = typeof createTaskRoute;
