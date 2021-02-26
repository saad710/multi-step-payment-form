import React from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import './Step3.css'
import { FormControlLabel, Grid, Paper, Radio, Switch } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex !important',
  },
  paper: {
    display: 'flex !important',
    marginLeft: '3rem !important',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
  },
}))

const Step3 = () => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  })
  const classes = useStyles()
  const [selectedValue, setSelectedValue] = React.useState('a')

  const handleChangeRadio = (event) => {
    setSelectedValue(event.target.value)
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }
  return (
    <div>
      <form className="main-form">
        <div className="billing-details pt-5">
          <div className={classes.root}>
            <Grid item xs={12} sm={14} style={{ marginTop: '0.4rem' }}>
              <Paper className={classes.paper}>
                <Radio
                  checked={selectedValue === 'a'}
                  onChange={handleChangeRadio}
                  value="a"
                  id="radio-a"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
                {/* <label htmlFor="radio-a"><img src="https://www.eipcard.com/static/card-dd29b25752d32d7d521bcd7eb5303494.png" style={{height:"1.5rem",width:"2.5rem",marginTop:"0.6rem"}} alt=""/></label> */}
                <label htmlFor="radio-a">
                  <img
                    src="https://freepngimg.com/thumb/credit_card/25630-8-credit-card-visa-and-master-card-hd.png"
                    style={{
                      height: '1.5rem',
                      width: '4.5rem',
                      marginTop: '0.6rem',
                    }}
                    alt=""
                  />
                </label>
                <Radio
                  checked={selectedValue === 'b'}
                  onChange={handleChangeRadio}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
                <label htmlFor="radio-a">
                  <img
                    src="https://logos-download.com/wp-content/uploads/2016/03/PayPal_logo_logotype_emblem.png"
                    style={{
                      height: '1.5rem',
                      width: '4.5rem',
                      marginTop: '0.6rem',
                    }}
                    alt=""
                  />
                </label>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={14}>
              <Paper className={classes.paper}>
                <label style={{ fontStyle: 'italic' }} htmlFor="switch">
                  Recurring Payment
                </label>
                <FormControlLabel
                  style={{ marginLeft: '0.3rem' }}
                  control={
                    <Switch
                      checked={state.antoine}
                      onChange={handleChange}
                      name="antoine"
                      id="switch"
                    />
                  }
                />
              </Paper>
            </Grid>
          </div>
        </div>
        <br />
        <input type="text" className="form-input" placeholder="Card Number" />
        <input type="text" className="form-input" placeholder="Name on Card" />
        <br />
        <br />
        <input type="text" className="form-input" placeholder="Phone" />
        <input type="text" className="form-input" placeholder="Security" />
      </form>
    </div>
  )
}
export default Step3
