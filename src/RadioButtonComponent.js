const RadioButtonComponent = ({
  label,
  className,
  keyVal,
  val,
  flag,
  onChange,
  onClick
}) => {
  return (
    <div>
      <label className={className}>
        <input
          // key={keyVal}
          type="radio"
          checked={flag}
          onChange={onChange}
          value={val}
          name={val}
          onClick={onClick}
        />
        {" " + label}
      </label>
    </div>
  );
};

export default RadioButtonComponent;
