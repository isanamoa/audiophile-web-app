
const SpecialTextbox = ({ inputType, textValue, placeValue, inptPadd, alignTextValue, bgColors, colors, wid, hig, bordered, borderedColor, hoveredColor, hoveredBg, hoveredBorderColor, outlin, focusColor, handleChange}) => {
    return (
      <>
          <input 
            type={inputType}
            placeholder={placeValue}
            value={textValue}
            onChange={handleChange}
            className={`${wid} ${hig} ${inptPadd} ${alignTextValue} ${bordered} ${borderedColor} ${bgColors} ${colors} ${hoveredBg} ${hoveredColor} ${hoveredBorderColor} ${outlin} ${focusColor}`}
          />
      </>
    )
  }


  export { SpecialTextbox }