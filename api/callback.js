module.exports = async (req, res) => {
  const { code } = req.query;

  if (!code) {
    res.status(400).send('Missing code');
    return;
  }

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
      client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenRes.json();

  if (tokenData.error) {
    res.status(400).send(tokenData.error_description || tokenData.error);
    return;
  }

  const payload = JSON.stringify({ token: tokenData.access_token, provider: 'github' });

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <script>
      (function() {
        function receiveMessage(e) {
          window.opener.postMessage(
            'authorization:github:success:${payload.replace(/'/g, "\\'")}',
            e.origin
          );
          window.removeEventListener('message', receiveMessage, false);
        }
        window.addEventListener('message', receiveMessage, false);
        window.opener.postMessage('authorizing:github', '*');
      })();
    </script>
  `);
};
