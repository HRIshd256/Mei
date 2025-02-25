document.getElementById("getTokenBtn").addEventListener("click", async function () {
    try {
        const response = await fetch("http://localhost:5000/get-token");
        const data = await response.json();
        
        if (data.error) {
            console.error("Error fetching token:", data.error);
            document.getElementById("result").innerText = "Error: " + data.error;
        } else {
            console.log("Token:", data.access_token);
            document.getElementById("result").innerText = "Token: " + data.access_token;
        }
    } catch (error) {
        console.error("Failed to fetch token:", error);
        document.getElementById("result").innerText = "Failed to fetch token";
    }
});
