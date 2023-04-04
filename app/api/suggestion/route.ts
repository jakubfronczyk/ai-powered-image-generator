export async function GET(request: Request) {
    // Make an HTTP GET request to the Azure Function endpoint
    const response = await fetch(
        "https://ai-powered-image-generator-app.azurewebsites.net/api/getchatgptsuggestion",
        {
            cache: "no-store",
        }
    );

    const textData = await response.text();

    return new Response(JSON.stringify(textData.trim()), {
        status: 200,
    });
}
