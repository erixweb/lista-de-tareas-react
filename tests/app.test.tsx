import React from "react"
import HomePage from "../src/app"
import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("<HomePage />", () => {
    test("should add a new task to the task list and then   delete it", async () => {
        const user = userEvent.setup()
        const addedTasks = [crypto.randomUUID(), crypto.randomUUID()]

        render(<HomePage />)
        const input = screen.getByRole("textbox")
        expect(input).toBeDefined()

        const form = screen.getByRole("form")
        expect(form).toBeDefined()
        const button = form.querySelector("button")
        expect(button).toBeDefined()

        await user.type(input, addedTasks[0])
        await user.click(button!)
        await user.type(input, addedTasks[1])
        await user.click(button!)

        const list = screen.getByRole("list")
        expect(list).toBeDefined()

        expect(list.childNodes.length).toBe(2)

        // Remove first added item
        const item = screen.getByText(addedTasks[0])
        const removeButton = item.querySelector('button')
        expect(removeButton).toBeDefined()
        
        await user.click(removeButton!)

        expect(screen.getByText(addedTasks[1])).toBeDefined()
    })
})