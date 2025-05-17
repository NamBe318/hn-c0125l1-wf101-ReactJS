import React from "react";

function Exercise11_15() {
    const click = (
        <button>Nhấn vào đây</button>
    );

    const product = {
        name: "Huion H430p",
        price: "559.000vnđ"
    };

    function createImage(url, text) {
        return(
            <img src={url}
            alt={text} style={{width: "300px"}}></img>
        )
    };

    const image = createImage(
        "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/488929491_638464965767191_4147732548203529064_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeFs77wWVDH0RbxLCGmyC2Xa5gLqzq6OW4HmAurOro5bgWYv2FuTv5RNIDPv8CzLSXuW-aShGMPfTXNcIXQ2NKke&_nc_ohc=KX1r5cCoPz0Q7kNvwF14sT1&_nc_oc=AdnAmaN5-lj3CY-CJkUoq3K5ANdDTgh418oOw0cEH2L7azWX_FLqblSi3U4-CDSPo_G_fXtVwkH9A_bQ5a_H7jc_&_nc_zt=23&_nc_ht=scontent.fhan14-1.fna&_nc_gid=MsoIIwiDQoHjaf5jY569Gg&oh=00_AfKSPMXZz2XQfUj03mqPRtJqxTvOpgbvlEbrQWkq5xYcyw&oe=682CB610",
        "Hình ảnh minh họa"
    );

    const math = (
        <p>5 lớn hơn 3: {5 > 3 ? "đúng" : "sai"}</p>
    );

    const elementList = [
        {id: 1, title: "Item 1"},
        {id: 2, title: "Item 2"},
        {id: 3, title: "Item 3"}
    ]

    return(
        <div>
            {click}
            {
                <>
                <h3>Sản phẩm: {product.name}</h3>
                <p>Giá: {product.price}</p>
                </>
            }
            {image}
            {math}
            {
                <ul>
                    {
                        elementList.map((item, index) => (
                            <li key={index}>{item.title}</li>
                        ))
                    }
                </ul>
            }
        </div>
    );
};

export default Exercise11_15;