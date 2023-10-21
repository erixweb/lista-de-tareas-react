import { ItemType } from "./types"
import { useItems } from "./hooks/useitems"
import { Item } from "./components/item"
import { useHeaders } from "./hooks/useheaders"
/* const INTIIAL_ITEMS: Item[] = [
        {
            uid: crypto.randomUUID(),
            text: "Sacar a pasear el perro",
            timestamp: Date.now(),
        },
    ] */
export default function HomePage() {
	const { items, addItem, removeItem } = useItems()

    useHeaders({
        title: "Lista de tareas",
        description: "Prueba técnica de React que consiste en una lista de tareas con tests usando Vitest"
    })
	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const input = event.currentTarget.querySelector("input[name='item']") as HTMLInputElement


		addItem(input?.value)

		input.value = ""
	}
	return (
		<main
			className="grid grid-cols-2 w-full max-w-[950px] m-auto p-[16px] gap-[20px]"
			onSubmit={handleSubmit}
		>
			<aside>
				<h1 className="text-[40px] font-bold">Lista de tareas con React</h1>
				<form className="mt-[30px]" aria-label="Añadir tareas a la lista de tareas">
					<label className="flex flex-col">
						<h3 className="mb-[12px]">Introduce una tarea:</h3>
						<input
							type="text"
							role="textbox"
							name="item"
							required
							placeholder="Videojuegos"
							className="bg-zinc-700 p-[10px] rounded-[7px] outline-none placeholder:text-gray-300"
						/>
					</label>
					<button
						type="submit"
						className="bg-zinc-700 py-[10px] mt-[25px] rounded-[7px] w-full"
					>
						Añadir tarea
					</button>
				</form>
			</aside>
			<section className="px-[25px]">
				<h2 className="font-bold text-[40px]">Tus tareas</h2>
				<ul className="px-[20px]">
					{items.length < 0 ? (
						<h3>No hay ninguna tarea pendiente</h3>
					) : (
						items?.map((item: ItemType) => (
							<Item 
                                {...item}
                                handleClick={() => removeItem(item.uid)}
                                key={item.uid}
                            />
						))
					)}
				</ul>
			</section>
		</main>
	)
}
