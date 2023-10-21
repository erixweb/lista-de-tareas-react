import { useState } from "react"
import { Item, ItemId } from "./types"
const INTIIAL_ITEMS: Item[] = [
    {
        uid: crypto.randomUUID(),
        text: "Sacar a pasear el perro",
        timestamp: Date.now()
    }
]
export default function HomePage() {
    const [items, setItems] = useState(INTIIAL_ITEMS)

    function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        const input = event.currentTarget.querySelector("input[name='item']") as HTMLInputElement

        const item: Item = {
            uid: crypto.randomUUID(),
            text: input?.value,
            timestamp: Date.now()
        }

        setItems((prevItems) => (
            [...prevItems, item]
        ))

        input.value = ""
    }
    function handleDeleteTask (id: ItemId) {
        setItems(prevItems => {
            return prevItems.filter((item) => item.uid !== id)
        })
    }
	return (
		<main className="grid grid-cols-2 w-full max-w-[950px] m-auto p-[16px] gap-[20px]" onSubmit={handleSubmit}>
			<aside>
				<h1 className="text-[40px] font-bold">Lista de tareas con React</h1>
				<form className="mt-[30px]">
					<label className="flex flex-col">
						<h3 className="mb-[12px]">Introduce una tarea:</h3>
						<input type="text" name="item" required placeholder="Videojuegos" className="bg-zinc-700 p-[10px] rounded-[7px] outline-none placeholder:text-gray-300" />
					</label>
                    <button type="submit" className="bg-zinc-700 py-[10px] mt-[25px] rounded-[7px] w-full">
                        Añadir tarea
                    </button>
				</form>
			</aside>
            <section className="px-[25px]">
                <h2 className="font-bold text-[40px]">
                    Tus tareas
                </h2>
                <ul className="px-[20px]">
                    {items?.map((item) => (
                        <li key={item.uid}>
                            {item.text}
                            <button className=" ml-[10px] bg-zinc-700 px-[10px] py-[10px] rounded-[7px]" onClick={() => handleDeleteTask(item.uid)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </section>
		</main>
	)
}
