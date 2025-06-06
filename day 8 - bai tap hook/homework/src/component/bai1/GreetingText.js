import { useEffect, useState } from "react";

function GreetingText({language}) {
    const languageTranslator = {vie: "Xin Chào", eng: "Hello"};

    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const Translation = () => {
            setGreeting('...');
            setTimeout(() => {
                setGreeting(languageTranslator[language]);
            }, 1000);
        };

        Translation();
    }, [language]);

    return(
        <h2>{greeting}</h2>
    )
}

export default GreetingText;