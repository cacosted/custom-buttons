import React from "react";

const COLORS = {
    primary: '#2962FF',
    secondary: '#455A64',
    danger: '#D32F2F',
    text: '#FFF',
}
export default function Button(props) {

    const btnColor = COLORS[props.color] ?? '' 
    const textColor =  COLORS[props.color] ? COLORS.text : '' 

    //Title 
    const title = props.title ?? '<Button />';
    
    // Icons
    const ICONS = ['settings', 'done', 'info', 'check_circle', 'favorite'];
    const startIcon = ICONS.includes(props.startIcon) ? props.startIcon : '' ;
    const endIcon = ICONS.includes(props.endIcon) ? props.endIcon : '' ;
    
    // Variant
    const variant = props.variant ?? 'default' ;
    
    // Disable
    const disableShadow = props.disableShadow || props.variant === 'text' ? '' : 'Button-shadow'; 
    let disabled = props.disabled; 

    if(disabled && variant === 'text') {
        disabled = 'Button-disabled-text';
    }
    else if(disabled){
        disabled = 'Button-disabled';
    }
    else {
        disabled = '';
    }

    // Size
    const size = `Button-${props.size}` ?? '';
    // className
    const className = `Button-body Button-${variant} ${disableShadow} ${disabled} ${size}`



    return(
        <div className='Button-box'>
            
            <p className="Button-title">{title}</p>

            <button 
                className={className}
                style={{backgroundColor: btnColor, color: textColor}}
                // {...props}
            >
                {startIcon ? <i className="material-icons Button-icon">{startIcon}</i> : ''}
                <small>Default</small>
                {endIcon ? <i className="material-icons Button-icon">{endIcon}</i> : ''}

            </button>
        </div>
    );
}