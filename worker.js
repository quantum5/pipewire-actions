addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const { pathname } = new URL(request.url);
  return fetch("https://github.com/quantum5/pipewire-actions/releases/latest/download" +
    pathname.replace(/~/, '.'));
}
