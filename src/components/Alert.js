import React from 'react'

function Alert(props) {
  return (
            props.alert && <div>     
<div class="alert alert-success d-flex align-items-center" role="alert">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                <div>
                   {props.alert.msg}
                </div>
                </div>
    </div>
  )
}

export default Alert
