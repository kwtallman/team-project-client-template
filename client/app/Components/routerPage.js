import React from 'react';

export default class routerPage extends React.Component {
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
