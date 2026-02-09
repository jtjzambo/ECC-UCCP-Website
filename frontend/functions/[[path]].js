export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // If the request looks like a real file (has an extension), serve assets normally
  // e.g. /static/js/main.js, /images/logo.png, /favicon.ico
  const isFile = url.pathname.includes(".") && !url.pathname.endsWith(".");

  if (isFile) {
    return env.ASSETS.fetch(request);
  }

  // Otherwise, treat it as an SPA route and serve index.html
  const indexUrl = new URL(request.url);
  indexUrl.pathname = "/index.html";

  return env.ASSETS.fetch(new Request(indexUrl.toString(), request));
}
