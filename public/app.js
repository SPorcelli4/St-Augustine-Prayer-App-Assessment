async function submitPrayerRequest() {
    const topic = document.getElementById('topic').value;
    const reason = document.getElementById('reason').value;
    const requestData = {
        model: "gpt-3.5-turbo", // Added model parameter here
        messages: [
            {
                role: "user",
                content: `Generate a prayer for the topic '${topic}' related to '${reason}'.`
            }
        ],
        max_tokens: 150
    };

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer sk-proj-SZjknBkM5Nmpqw0jRi1nT3BlbkFJu714MqTmEGcls99HguIg` // Replace with your actual API key
            },
            body: JSON.stringify(requestData)
        });
        const data = await response.json();
        document.getElementById('response').innerText = data.choices[0].message.content;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('response').innerText = 'Failed to generate prayer. Please try again.';
    }
}
// async function submitPrayerRequest() {
//     const topic = document.getElementById('topic').value;
//     const reason = document.getElementById('reason').value;
//     const requestData = {
//         prompt: `Generate a prayer for the topic '${topic}' related to '${reason}'.`,
//         max_tokens: 150
//     };

//     try {
//         const response = await fetch('https://api.openai.com/v1/chat/completions', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer sk-proj-k4yoNcs03gynNKJRZqZiT3BlbkFJ3NBz16L9JYzysnDCxses`
//             },
//             body: JSON.stringify(requestData)
//         });
//         const data = await response.json();
//         document.getElementById('response').innerText = data.choices[0].message.content;
//     } catch (error) {
//         console.error('Error:', error);
//         document.getElementById('response').innerText = 'Failed to generate prayer. Please try again.';
//     }
// }
