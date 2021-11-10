import React from "react"

export default function TodoForm(props){
  const {} = props
  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Title" />
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Description" />
      <input
        type="text"
        name="imgUrl"
        value={imgUrl}
        onChange={handleChange}
        placeholder="Image Url" />
      <button>Add Todo</button>
    </form>
  )
}