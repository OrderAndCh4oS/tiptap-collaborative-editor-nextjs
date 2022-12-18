import {ButtonHTMLAttributes, FC} from "react";

interface IToolbarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean
}

const ToolbarButton: FC<IToolbarButtonProps> = ({isActive, children, className = '', ...rest}) =>
    <button
        className={`border rounded px-1 transition-colors duration-300 ${isActive ? 'active' : ''} ${className}`}
        {...rest}
    >
        {children}
    </button>

export default ToolbarButton;
