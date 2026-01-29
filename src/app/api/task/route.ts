
interface Task {
    id: number
    title: string
    completed: boolean
}

let tasks: Task[] = [
    { id: 1, title: "man", completed: false },
    { id: 2, title: "lifer", completed: true }
]

interface CreateTaskTitle {
    title: string
}

export async function GET() {
    return Response.json(tasks)
}

export async function POST(request: Request) {
    try {
        const body: CreateTaskTitle = await request.json()

        if (!body.title) {
            return Response.json({ error: "title is required" }, { status: 400 })
        }

        const newTask: Task = {
            id: tasks.length + 1,
            title: body.title,
            completed: false
        }

        tasks.push(newTask)

        return Response.json({ message: "Task created successfully", task: newTask })
    } catch (error) {
        return Response.json({ error: "Can't create the task, error occurred" }, { status: 500 })
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const id = parseInt(searchParams.get("id") || "")

        if (!id) {
            return Response.json({ error: "ID is required to delete the task" }, { status: 400 })
        }

        const taskIndex = tasks.findIndex(task => task.id === id)

        if (taskIndex === -1) {
            return Response.json({ error: "Task not found", success: false }, { status: 404 })
        }

        tasks.splice(taskIndex, 1)

        return Response.json({ message: "Task deleted successfully" })
    } catch (error) {
        return Response.json({ error: "Access denied, try again" }, { status: 500 })
    }
}
