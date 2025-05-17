import react from "react";

function Exercise6_10() {
  const link = (
    <a href="http://www.google.com" target="_blank">
      Tìm kiếm trên Google.
    </a>
  );

  const image = (
    <img
      src="https://scontent.fhan14-5.fna.fbcdn.net/v/t1.15752-9/496511139_540412308934659_1503934919394421390_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFGTq5_qNPgvHIZLjM1fNRIEYxsQOuXlm0RjGxA65eWbXyS1AjK9Fvn9XPe5eK9GXdU7EG9SpfVB0tOP4P9hOmi&_nc_ohc=CwvjeZtFwAoQ7kNvwG9EE8e&_nc_oc=AdlGBrx26Roztaq-b7Z-YMiK5iRZ_W_pArUYiRFc5b09QOo30zfEX4OAFMp-8alYGJ7Rp6y3-lssSS570I2gwEPM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fhan14-5.fna&oh=03_Q7cD2QFIskkTAItqgRvFUc2azJclLmzqEykrQQ9nEWnAl0IdGA&oe=684D7E35"
      alt="mouse"
      style={{ width: "500px", height: "auto" }}
    ></img>
  );

  const smallParagraph = (
    <div>
        <span id="s1">Đoạn 1</span>
        <br></br>
        <span id="s2">Đoạn 2</span>
    </div>
  );

  function Header(text) {
    const multipleHeader = react.createElement("h2", null, text);
    return react.createElement(
        "div",
        null,
        react.createElement("h2", {id:"head1"}, "Hello World!"),
        react.createElement("h2", {id:"head2"}, "My name is NB")
    )  
};

const styling = (
    <h1 style={{color:"blue", background:"lightblue"}}>this is a styling line</h1>
)


  return (
    <div>
      {link}
      <br></br>
      {image}
      {smallParagraph}
      {Header()}
      {styling}
    </div>
  );
}

export default Exercise6_10;
