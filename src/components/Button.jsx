
const Button = ({ label, iconUrl, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border rounded-full font-montserrat ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : ' text-white  border-coral-red  bg-coral-red'
            } ${fullWidth && 'full-w'} `}>
            {label}
            {iconUrl && <img src={iconUrl} alt="arrow right" className="ml-2 rounded-full w-5 h-5" />}
        </button>
    )
}

export default Button