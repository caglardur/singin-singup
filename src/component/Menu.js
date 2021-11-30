const Menu = ({ page, setPage }) => {
  return (
    <div className="row">
      <div type="button" className={page === "login" ? "col btn btn-primary bg-gradient m-1" : "col btn btn-light bg-gradient m-1"} onClick={() => setPage("login")} style={{ transition: "all 0.3s" }}>
        Login
      </div>
      <div type="button" className={page === "register" ? "col btn btn-primary bg-gradient m-1" : "col btn btn-light bg-gradient m-1"} onClick={() => setPage("register")} style={{ transition: "all 0.3s" }}>
        Register
      </div>
    </div>
  )
}
export default Menu
