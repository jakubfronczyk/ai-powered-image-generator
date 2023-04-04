import Header from "../components/Header";
import PromptInput from "../components/PromptInput";
import ClientProvider from "../components/ClientProvider";
import "../styles/global.css";

export const metadata = {
    title: "AI Image Generator",
    description: "Built with Next.js 13.2, DALL·E 2, and Chat GPT",
};

export default function RootLayout({
    children,
    showPromptInput = true,
}: {
    children: React.ReactNode;
    showPromptInput?: boolean;
}) {
    return (
        <html lang="en">
            <body>
                <ClientProvider>
                    <Header />

                    {showPromptInput && <PromptInput />}
                    {children}
                </ClientProvider>
            </body>
        </html>
    );
}
