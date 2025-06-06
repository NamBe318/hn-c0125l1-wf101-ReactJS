function TodoForm({handleSubmitForm, setTask}) {
    return(
        <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Type Todo..."
          onChange={(e) => setTask(e.target.value)}
        ></input>
      </form>
    )
}

export default TodoForm;