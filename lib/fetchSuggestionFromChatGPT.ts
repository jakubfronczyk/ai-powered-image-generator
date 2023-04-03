const fetchSuggestionFromChatGPT = () =>
    fetch("http://localhost:7071/api/getChatGPTSuggestion", {
        cache: "no-store",
    }).then((res) => res.text().then((text) => text.trim()));

export default fetchSuggestionFromChatGPT;
