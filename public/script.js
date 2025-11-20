async function updateStats() {
    try {
        const response = await fetch('/health');
        const data = await response.json();

        document.getElementById('os').innerText = data.systemInfo.platform + ' (' + data.systemInfo.release + ')';
        document.getElementById('host').innerText = data.systemInfo.hostname;
        document.getElementById('uptime').innerText = Math.floor(data.uptime) + ' seconds';
        document.getElementById('memory').innerText = data.systemInfo.totalMemory;

        // Reset color if it was red previously
        document.querySelector('.value').style.color = '#2ea043';

    } catch (err) {
        console.error("Fetch error:", err);
        document.getElementById('os').innerText = "OFFLINE";
        // Turn the values red to indicate error
        const values = document.querySelectorAll('.value');
        values.forEach(el => el.style.color = 'red');
    }
}

// Refresh every 2 seconds
setInterval(updateStats, 2000);

// Initial call
updateStats();