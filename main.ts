import * as path from "std/path/mod.ts";
import {
  AppState,
  renderToReadableStream,
  serve,
} from "x/udibo_react_app/app_server.tsx";
import { Context } from "x/oak/mod.ts";
import TwindStream from "npm/@twind/with-react/readableStream";

import { tw } from "./twind.ts";
import route from "./routes/_main.tsx";
import router from "./routes/_main.ts";

await serve({
  port: 9000,
  router,
  route,
  workingDirectory: path.dirname(path.fromFileUrl(import.meta.url)),
  async renderToReadableStream(context: Context<AppState>) {
    return (await renderToReadableStream(context))
      .pipeThrough(new TwindStream(tw));
  },
});
