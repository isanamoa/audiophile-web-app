
const SeeButton = ({ butTitle, bgColors, colors, padd, wid, hig, bordered, hoveredColor, hoveredBg, handleClick}) => {
  return (
    <>
        <button className={`${wid} ${hig} ${padd} ${bordered} border-black uppercase ${bgColors} ${colors} ${hoveredBg} ${hoveredColor}`}
            onClick={handleClick}
        >
            {butTitle}
        </button>
    </>
  )
}


const ShopButton = ({ butTitle, bgColors, colors,  hoveredColor, hoveredBg, handleClick}) => {
    return (
      <>
          <button className={`uppercase ${bgColors} 
            ${colors} ${hoveredBg} ${hoveredColor} flex justify-between items-center gap-3 text-[13px] font-bold`}
              onClick={handleClick}
          >
              {butTitle}
              <span className="text-[#D87D4A]">&gt;</span>

          </button>
      </>
    )
  }

export { SeeButton, ShopButton }
