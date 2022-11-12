import {ButtonHTMLAttributes, FC} from "react";

interface IToolbarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isActive?: boolean
}

const ToolbarButton: FC<IToolbarButtonProps> = ({isActive, children, className = '', ...rest}) =>
    <button
        className={`border border-black border-2 rounded px-1 hover:bg-black hover:text-white transition-colors duration-300 ${isActive ? 'bg-black text-white' : 'text-black'} ${className}`}
        {...rest}
    >
        {children}
    </button>

export default ToolbarButton;