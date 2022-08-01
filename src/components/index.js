import {Component} from 'react'
import {v4 as id} from 'uuid'
import './index.css'
import CreateBottomContainer from './bottom'

const initialList = [
  {id: id(), website: 'Google', username: 'ind', password: 'n@g436'},
]

class Create extends Component {
  state = {passwords: initialList.length, list: initialList}

  render() {
    const {passwords, list} = this.state

    return (
      <div className="bg">
        <div className="main-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              className="app-logo"
              alt="app-logo"
            />
          </div>
          <div className="top-container">
            <div className="input-container">
              <p className="add-new-password">Add New Password</p>
              <div className="input-website-box">
                <div className="input-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-logo"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-text"
                />
              </div>

              <div className="input-website-box">
                <div className="input-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-logo"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-text"
                />
              </div>

              <div className="input-website-box">
                <div className="input-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-logo"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Enter Password"
                  className="input-text"
                />
              </div>
              <div className="button-box">
                <button className="add-button" type="button">
                  Add
                </button>
              </div>
            </div>
          </div>
          <CreateBottomContainer details={list} passwords={passwords} />
        </div>
      </div>
    )
  }
}

export default Create
