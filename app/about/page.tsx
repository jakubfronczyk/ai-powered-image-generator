import React from "react";
import RootLayout from "../layout";

const About = () => {
    return (
        <RootLayout showPromptInput={false}>
            <div className="p-10 flex flex-col mx-auto space-y-4">
                <h2 className="text-violet-500 text-2xl font-bold mb-2">
                    About
                </h2>
                <p>
                    Our AI image generator app is a powerful tool that uses
                    cutting-edge machine learning algorithms to create stunning
                    and unique images. Built using Next.js, TypeScript,
                    Tailwind, Microsoft Azure, ChatGPT, and DALL-E 2.0, this app
                    offers a seamless user experience with an intuitive
                    interface that makes it easy to generate and customize
                    images.
                </p>
                <p>
                    With our app, users can simply enter a text description of
                    the image they want to create, and our AI models will take
                    care of the rest, generating a high-quality image that
                    matches the description. Users can also customize various
                    parameters of the image, such as color scheme, composition,
                    and style, to create images that truly reflect their vision.
                    Our app is designed for educational purposes and is intended
                    to help users learn about the capabilities of AI and machine
                    learning. It is a great tool for developers and designers
                    who want to explore the possibilities of AI-generated
                    images, and it can also be used by artists and creatives who
                    want to experiment with new forms of visual expression.
                </p>
                <p>
                    Please note that our app is intended for educational
                    purposes only and should not be used for commercial or
                    for-profit purposes. We take user privacy and data security
                    very seriously, and we adhere to all applicable laws and
                    regulations regarding the use of AI and machine learning
                    technologies.
                </p>
            </div>
        </RootLayout>
    );
};

export default About;
