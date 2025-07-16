async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput.trim()) return;

    // Add user message to chatbox
    addMessage(userInput, "user");
    document.getElementById("user-input").value = "";

    try {
        // Send request to FastAPI backend
        const response = await fetch("http://127.0.0.1:8050/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput })
        });

        const data = await response.json();
        addMessage(data.response, "bot");
    } catch (error) {
        console.error("Error:", error);
        addMessage("Error connecting to server.", "bot");
    }
}

// Function to add messages to chatbox
function addMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);

    // Auto-scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}
