const sendMessage = async () => {
  if (!input.trim()) return;

  const userMsg = { sender: 'user', text: input };
  const updatedMessages = [...messages, userMsg];
  setMessages(updatedMessages);
  setInput('');
  setLoading(true);

  try {
    // Send both the new message AND the previous chat history
    const res = await axios.post('http://127.0.0.1:8000/api/chat', { 
      message: input,
      history: messages 
    });

    const aiMsg = { sender: 'bot', text: res.data.response };
    setMessages((prev) => [...prev, aiMsg]);
  } catch (err) {
    setMessages((prev) => [
      ...prev, 
      { sender: 'bot', text: 'Connection error. Please check your backend.' }
    ]);
  } finally {
    setLoading(false);
  }
};