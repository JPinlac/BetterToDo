import React from 'react';

class Modal extends React.Component {
    render() {
        if(this.props.isOpen) {
            return (
                <React.addons.CSSTransitionGroup transitionName={this.props.transitionName}>
                    <div className='modal'>
                        {this.props.children}
                    </div>
                </React.addons.CSSTransitionGroup>
            )
        } else {
            return <React.addons.CSSTransitionGroup transitionName={this.props.transitionName} />
        }
    }
};