import CreatePassWordCards from './card'

const CreateBottomContainer = props => {
  const {details, passwords} = props
  const list = details

  return (
    <div className="bottom-container-with-passwords">
      <div className="password-top-container">
        <div className="passwords-count-box">
          <p className="your-passwords">Your passwords</p>
          <div className="box">{passwords}</div>
        </div>

        <div className="input-search-box">
          <div className="input-search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="input-logo"
            />
          </div>

          <input type="search" placeholder="Search" className="input-text" />
        </div>
      </div>
      <hr
        style={{
          color: '#9ba9eb',
          backgroundColor: '#9ba9eb',
          height: 1,
        }}
      />

      <div className="checkBox-container">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label">
          Show Passwords
        </label>
      </div>

      <div className="card-or-no-passwords-box">
        {passwords === 0 ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-password-img"
          />
        ) : (
          <CreatePassWordCardsFun details={list} />
        )}

        {passwords === 0 ? <p className="no-passwords">No Passwords</p> : null}
      </div>
    </div>
  )
}

const CreatePassWordCardsFun = props => {
  const {details} = props

  return (
    <ul>
      {details.map(each => (
        <CreatePassWordCards details={each} key={each.id} />
      ))}
    </ul>
  )
}

export default CreateBottomContainer
