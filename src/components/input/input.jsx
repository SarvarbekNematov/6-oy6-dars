import "./input.css";

export const Inputs = ({
    placeholder,
    className,
    label,
    ariaLabel,
    variant,
    type,
    id,
    startIcon,
    endIcon,
}) => {
    return (
        <input type={type} id={id} className={className + "input_once" + variant} placeholder={ placeholder} aria-label={ariaLabel}/>
    )
}