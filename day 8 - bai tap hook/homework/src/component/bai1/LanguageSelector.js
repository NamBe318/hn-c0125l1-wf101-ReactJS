function LanguageSelector({ setLanguage }) {
  return (
    <>
      <button onClick={() => setLanguage("vie")}>Tiếng Việt - VIE</button>
      <br></br>
      <button onClick={() => setLanguage("eng")}>Tiếng Anh - ENG</button>
    </>
  );
}

export default LanguageSelector;
