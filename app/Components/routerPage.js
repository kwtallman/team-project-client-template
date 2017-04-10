import React from 'react';

export default class routerPage extends React.component {
  render(){
    return (
      <div>
        {
          this.props.children
        }
      </div>
    )
  }
}
