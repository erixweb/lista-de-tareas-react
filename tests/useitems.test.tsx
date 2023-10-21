import { describe, expect, test } from "vitest"
import { renderHook, act } from "@testing-library/react"
import { useItems } from "../src/hooks/useitems"

describe("useItems hook", () => {
	test("should add and then remove an item", () => {
		const { result } = renderHook(useItems)

		expect(result.current.items.length).toBe(0)

		act(() => {
			result.current.addItem("Pasear al perro")
		})

		expect(result.current.items.length).toBe(1)
	})
})
