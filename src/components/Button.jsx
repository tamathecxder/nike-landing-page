const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        }`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="Arrow Right Icon"
          className="rounded-full ml-2 w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
