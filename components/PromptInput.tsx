"use client";

import fetchSuggestionFromChatGPT from "../lib/fetchSuggestionFromChatGPT";
import { useState } from "react";
import useSWR from "swr";

const PromptInput = () => {
    const [input, setInput] = useState("");

    const {
        data: suggestion,
        isLoading,
        mutate,
        isValidating,
    } = useSWR("/api/suggestion", fetchSuggestionFromChatGPT, {
        revalidateOnFocus: false,
    });
    console.log(suggestion);
    // const loading = isLoading || isValidating;

    return (
        <div className="m-10">
            <form className="flex flex-col md:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 p-4 outline-none"
                    placeholder={
                        // (loading && "ChatGPT is thinking of a suggestion...") ||
                        suggestion || "Enter a prompt..."
                    }
                />
                <button
                    className={`p-4 ${
                        input
                            ? "bg-violet-500 text-white transition-colors duration-200"
                            : "text-gray-300 cursor-not-allowed"
                    } font-bold`}
                    type="submit"
                    disabled={!input}
                >
                    Generate
                </button>
                <button
                    className={`p-4 bg-violet-400 text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400`}
                    type="button"
                >
                    Use Suggestion
                </button>
                <button
                    className={`p-4 bg-white text-violet-500 border-none transition-colors duration-200 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold`}
                    type="button"
                >
                    New Suggestion
                </button>
            </form>
            {/* {input && (
                <p className="italic pt-2 pl-2 font-light">
                    Suggestion:{" "}
                    <span className="text-violet-500">
                        {loading ? "ChatGPT is thinking..." : suggestion}
                    </span>
                </p>
            )} */}
        </div>
    );
};

export default PromptInput;
