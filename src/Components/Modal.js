import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './Modal.css'


class Modal extends React.Component {
    render() {
        if(this.props.isOpen) {
            return (
                <ReactCSSTransitionGroup transitionName={this.props.transitionName}
                                         transitionEnterTimeout={500}
                                         transitionLeaveTimeout={300}>
                    <div className='modal'>
                        {this.props.children}
                    </div>
                </ReactCSSTransitionGroup>
            )
        } else {
            return <ReactCSSTransitionGroup transitionEnterTimeout={500}
                                            transitionLeaveTimeout={300}
                                            transitionName={this.props.transitionName} />
        }
    }
};

export default Modal;