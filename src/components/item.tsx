import { ItemId } from "../types"

export const Item = ({
	uid,
	text,
	handleClick,
}: {
	uid: ItemId
	text: string
	handleClick: () => void
}) => (
	<>
		<li key={uid}>
			{text}
			<button
				className=" ml-[10px] bg-zinc-700 px-[10px] py-[10px] rounded-[7px]"
				onClick={handleClick}
			>
				Eliminar
			</button>
		</li>
	</>
)
