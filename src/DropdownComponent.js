const DropdownComponent = ({ onChange, options }) => {
  return (
    <select onChange={onChange}>
      {options.map((opt, i) => (
        <option value={opt} key={i}>
          {opt}
        </option>
      ))}
    </select>
  );
};

export default DropdownComponent;
