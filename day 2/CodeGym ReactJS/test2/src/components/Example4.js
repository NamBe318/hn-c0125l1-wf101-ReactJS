import React from "react";
function Example4() {
    let myStyle = {
        color: 'pink',
        backgroundColor: 'blue',
        fontFamily: 'TimeNewRomans',
        fontSize: '50px'
    };

    const LinkElement = (
        <a href="https://www.facebook.com/?locale=vi_VN" target="_blank" className="link">chuyen den facebook</a>
    );

  const nestedElement = (
    <div className="container">
      <p style={myStyle}>Day la noi dung trong the p</p>
      <span>Day la noi dung trong the span</span>
    </div>
  );

  return <>
  {nestedElement}
  {LinkElement}
  </>;
}

export default Example4;
