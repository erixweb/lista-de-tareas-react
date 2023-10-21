import { useState } from "react"
import { ItemType, ItemId } from "../types"

export const useItems = () => {
	const [items, setItems] = useState<ItemType[]>([])

	const addItem = (text: string) => {
		setItems((prevItems) => [
			...prevItems,
			{
				uid: crypto.randomUUID(),
				text,
				timestamp: Date.now(),
			},
		])
	}
	const removeItem = (uid: ItemId) => {
		return setItems((prevItems) => {
			return prevItems.filter((item) => item.uid !== uid)
		})
	}

	return {items, addItem, removeItem}
}
