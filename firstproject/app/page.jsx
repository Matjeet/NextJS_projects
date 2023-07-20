import Users from "@/components/Users"

async function fetchUsers(){
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function Indexpage(){
  const users = await fetchUsers()
  console.log(users)
  return <Users users={users}></Users>
}

export default Indexpage