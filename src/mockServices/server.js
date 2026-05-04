import { setupserver } from "msw/node";
import { handler } from "./handler";

export const server = setupserver(...handler);
