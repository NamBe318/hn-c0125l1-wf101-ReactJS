import React, { useEffect, useState } from 'react';
import LanguageSelector from './LanguageSelector';
import GreetingText from './GreetingText';

function Language() {
    const [language, setLanguage] = useState('eng');

    return(
        <div>
            <h1>Vui lòng chọn ngôn ngữ</h1>
            <LanguageSelector setLanguage={setLanguage}/>
            <GreetingText language={language}/>
        </div>
    )
}

export default Language;