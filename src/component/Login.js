const Login = () => {
  return (
    <form className="my-3">
      <div className="col mt-2">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="col mt-2">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>

      <div type="button" className="col-12 mt-3 btn btn-primary bg-gradient">
        Login
      </div>
    </form>
  )
}

export default Login
