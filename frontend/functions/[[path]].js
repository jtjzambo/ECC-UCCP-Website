export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // Allow real files (JS, CSS, images, etc.) to pass through
  if (url.pathname.includes(".")) {
    return env.ASSETS.fetch(request);
  }

  // IMPORTANT:
  // Your CRA build lives in /frontend/build
  const indexUrl = new URL(request.url);
  indexUrl.pathname = "/frontend/build/index.html";

  return env.ASSETS.fetch(
    new Request(indexUrl.toString(), request)
  );
}
