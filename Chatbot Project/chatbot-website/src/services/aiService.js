import axios from 'axios';

const AI_API_URL = 'https://api.example.com/chat'; // Replace with your AI API endpoint

export const sendMessageToAI = async (message) => {
    try {
        const response = await axios.post(AI_API_URL, { message });
        return response.data;
    } catch (error) {
        console.error('Error sending message to AI:', error);
        throw error;
    }
};

export const getAIResponse = async (userMessage) => {
    const aiResponse = await sendMessageToAI(userMessage);
    return aiResponse.reply; // Adjust based on the API response structure
};