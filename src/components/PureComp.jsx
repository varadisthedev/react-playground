import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {
  render() {
    return (
      <div>
        PURE COMPONENTS {this.props.name}
      </div>
    )
  }
}

export default PureComp