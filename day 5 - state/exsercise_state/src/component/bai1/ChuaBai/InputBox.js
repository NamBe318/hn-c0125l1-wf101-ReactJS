function InputBox(props) {
    return(
        <input
        type="text"
        placeholder="Nhap ten user..."
        onChange={(e) => props.handleSearch(e.target.value)}
      ></input>
    )
}

export default InputBox;