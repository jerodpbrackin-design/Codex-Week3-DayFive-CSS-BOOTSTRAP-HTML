const SUPABASE_URL = 'https://obuucjmrkcgkatjcphhi.supabase.co'
const ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9idXVjam1ya2Nna2F0amNwaGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTEyMDgsImV4cCI6MjA4MDM2NzIwOH0.knAxRAZEsuv05XfRqDPJrQQ1Or1iO4-FU0jTRJ3hoeo'

const REST_ENDPOINT = `${SUPABASE_URL}/rest/v1/products?select=*`

async function getProducts() {
  try {
    const res = await fetch(REST_ENDPOINT, {
      method: 'GET',
      headers: {
        apikey: ANON_KEY,
        Authorization: `Bearer ${ANON_KEY}`,
      },
    })

    const products = await res.json()
    const container = document.getElementById('products-list')
    container.innerHTML = ''

    products.forEach((p) => {
      const card = document.createElement('div')
      card.className = 'col-md-4'
      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${p.imagen_url}" class="card-img-top" alt="${p.name}">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">${p.description}</p>
            <p class="fw-bold">$${p.price}</p>
          </div>
        </div>
      `
      container.appendChild(card)
    })
  } catch (err) {
    console.error('Error fetching products:', err)
  }
}

window.onload = getProducts
