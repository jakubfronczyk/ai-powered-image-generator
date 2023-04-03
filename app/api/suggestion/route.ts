export async function GET(request: Request) {
    try {
        // Make an HTTP GET request to the Azure Function endpoint
        const response = await fetch(
            "http://localhost:7071/api/getChatGPTSuggestion",
            {
                cache: "no-store",
            }
        );

        // Retrieve the response data
        const responseData = await response.text();

        // Return the response data as plain text
        return new Response(responseData.trim(), {
            status: 200,
            headers: {
                "Content-Type": "text/plain",
            },
        });
    } catch (err: any) {
        console.error(JSON.stringify(err));
        return new Response(JSON.stringify(err.message), {
            status: 500,
        });
    }
}
