import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      name: "safe",
      sername: "setthasat",
      lastname: "Sirikomonsing"
    },
    {
      id: 2,
      name: "safe",
      sername: "setthasat",
      lastname: "Sirikomonsing"
    },
    {
      id: 3,
      name: "safe",
      sername: "setthasat",
      lastname: "Sirikomonsing"
    },
    {
      id: 4,
      name: "safe",
      sername: "setthasat",
      lastname: "Sirikomonsing"
    },
  ])

  const handleDelete = (id) => {
    setTodo(todo.filter(todo => todo.id !== id))
    
  }

  return (
    <div className="flex justify-center items bg-slate-300 h-screen">
      <div className='flex flex-col items mt-[38rem]'>

        {todo.map((items, index) => {
          return (
            <div key={index} className="gap-2 flex justify-center items-center rounded-md bg-slate-400 m-2 h-11">
              <p className='bg-white h-full w-7 rounded-l-md flex items-center justify-center-center p-2'>{items.id}</p>
              <p>{items.name}</p>
              <p>{items.sername}</p>
              <p>{items.lastname}</p>
              <button onClick={() => handleDelete(items.id)} className='bg-red-500 w-auto p-2 h-full '>x</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
