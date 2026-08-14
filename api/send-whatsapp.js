export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { mensagem } = req.body;

  try {
    const response = await fetch('https://graph.instagram.com/v18.0/131781073342738/messages', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer EAASQexe6ih0BSGltIZBuaLjnOWnFZAKMhyqIrfCcr88ZBjPpTaiAeG74QNGsJNV4aaq4EPDrjDq685RJTS9SPykZByurV5HTxlhIuPRiMXN66xFlfGO71ZBgYTOUjNIiBjjUg3RK6HkBQvRC0R9UbD42urSbKTIsunelidA9pl2qg5egLYssuOL3ZALKW0awZDZD',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: '5511328335900',
        type: 'text',
        text: { body: mensagem }
      })
    });

    const result = await response.json();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
