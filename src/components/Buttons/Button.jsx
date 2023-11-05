 
const Button = ({ children }) => {
  return (
    <button className="flex items-center font-roboto text-white bg-main px-6  py-2 font-normal  text-xl">
      {children}
    </button>
  );
};

export default Button;
