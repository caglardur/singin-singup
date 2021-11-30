import React, { useState } from "react"
import Menu from "./Menu"
import Login from "./Login"
import Register from "./Register"

const Container = () => {
  const [page, setPage] = useState("login")
  return (
    <div className="row justify-content-center">
      <div className="col shadow p-4 mb-5 bg-body rounded" style={{ maxWidth: "360px" }}>
        <Menu page={page} setPage={setPage} />
        {page === "login" && <Login />}
        {page === "register" && <Register />}
      </div>
    </div>
  )
}

export default Container
