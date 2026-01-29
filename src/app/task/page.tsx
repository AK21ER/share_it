
async function page() {
    const tasks = await  fetch(" http://localhost:3000/api/task")
     console.log (tasks)

  return (
    <div>
      tasks gotten
    </div>
  )
}

export default page
