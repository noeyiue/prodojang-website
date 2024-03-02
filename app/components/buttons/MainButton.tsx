import React from 'react'

interface ButtonProps<T> {
  type: "submit" | "button" | "reset";
  buttonText: T;
}

const MainButton = ({type , buttonText} : ButtonProps<string>) => {
  return (
    <button
      type={type}
      className="btn font-BaiJamjuree btn-sm sm:btn-sm md:btn-md lg:btn-lg hover:bg-blue-800 bg-navy text-basebg w-full my-2.5"
    >
      {buttonText}
    </button>
  )
}

export default MainButton