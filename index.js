addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  // Меняем URL на ваш API сервер
  url.hostname = 'api.notvpn.io'

  // Создаем новый запрос с измененным URL
  const newRequest = new Request(url, request)
  return fetch(newRequest)
}
