export type ItemType = {
	uid: ItemId
	text: string
	timestamp: number
}

export type ItemId = `${string}-${string}-${string}-${string}-${string}`
