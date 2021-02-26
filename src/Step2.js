import { Checkbox } from '@material-ui/core'
import React from 'react'
import './Step2.css'

const Step2 = () => {
  const [checked, setChecked] = React.useState(true)

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }
  return (
    <div>
      <form className="main-form">
        <div className="billing-details pt-5">
          <Checkbox
            id="customCheck1"
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <label className="billing-label" for="customCheck1">
            Use the same shipping address as the billing address
          </label>
        </div>
        <br />
        <input type="text" className="form-input" placeholder="Email" />
        <select class="form-input-select">
          <option selected>Select Department</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <br />
        <br />
        <input type="text" className="form-input" placeholder="Phone" />
        <input type="text" className="form-input" placeholder="Address" />
      </form>
    </div>
  )
}

export default Step2
