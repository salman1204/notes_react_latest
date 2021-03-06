const ColorPicker = ({handleChange}) => {
    let colors = [
      '#01D4FF',
      '#FF9B73',
      '#B692FE',
      '#E4EE90',
      '#FFC971',
    ]
  
    return (
        <div>
          {colors.map((color) => (
            <div
              key={color}
              className="color border"
              style={{ backgroundColor: `${color}` }}
            >
              <input
                // required
                type="radio"
                name="color"
                value={color}
                onChange={handleChange}
              />
              <i className="checkbox-icon"></i>
            </div>
          ))}
        </div>
    )
  }
  
  export default ColorPicker