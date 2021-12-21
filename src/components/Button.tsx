import React from 'react'
import classNames from 'classnames'

const Button:React.FC<{onClick?: () => void, className: string, outline?: boolean}> = ({ onClick, className, outline, children }) => {
    return (
      <button
        onClick={onClick}
        className={classNames('button', className, {
          'button--outline': outline,
        })}>
        {children}
      </button>
    );
  };

export default Button;


//className={`button ${outline ? 'button--outline' : ''}`}