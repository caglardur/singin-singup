const Register = () => {
  return (
    <form className="my-3">
      <div className="col mt-1">
        <label htmlFor="fistName" className="form-label">
          Fist Name
        </label>
        <input type="text" className="form-control" id="fistName" />
      </div>
      <div className="col mt-1">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input type="text" className="form-control" id="lastName" />
      </div>
      <div className="col mt-2">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="row">
        <div className="col-6 mt-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="col-6 mt-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password again
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
      </div>

      <div type="button" className="col-12 mt-3 btn btn-primary bg-gradient">
        Register
      </div>
    </form>
  )
}

export default Register
