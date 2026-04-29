exports.handler = async () => {
  const token = process.env.NETLIFY_API_TOKEN;
  const formId = process.env.FORM_ID;

  if (!token || !formId) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing env vars' }) };
  }

  try {
    const res = await fetch(
      `https://api.netlify.com/api/v1/forms/${formId}/submissions?per_page=50`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (!res.ok) throw new Error(`Netlify API ${res.status}`);

    const submissions = await res.json();

    const signups = submissions.map(s => {
      const fullName = (s.data?.name || s.data?.姓名 || '').trim();
      const firstName = fullName.charAt(0) || '?';
      const country = s.data?.country || s.data?.['国家 / 地区'] || '';
      return { name: firstName, country, time: s.created_at };
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify({ signups, total: submissions.length }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
