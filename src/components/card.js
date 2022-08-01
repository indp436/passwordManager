const CreatePassWordCards = props => {
  const {details} = props

  const {website, username, password} = details
  return (
    <li className="li">
      <div className="circle-box">n</div>
      <div className="details=box">
        <p className="website-name">{website}</p>
        <p className="username">{username}</p>
        <p className="password">{password}</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </div>
    </li>
  )
}

export default CreatePassWordCards
