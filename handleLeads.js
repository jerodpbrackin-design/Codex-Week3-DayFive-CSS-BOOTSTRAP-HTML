let url = 'https://obuucjmrkcgkatjcphhi.supabase.co/rest/v1/leads'
let apiKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9idXVjam1ya2Nna2F0amNwaGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTEyMDgsImV4cCI6MjA4MDM2NzIwOH0.knAxRAZEsuv05XfRqDPJrQQ1Or1iO4-FU0jTRJ3hoeo'

async function handleLeads() {
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  const lead = {
    name: name,
    email: email,
    message: message,
  }

  let response = await fetch(url, {
    method: 'POST',
    headers: {
      apikey: apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(lead),
  })

  console.log('Lead Created')
}
