type Props = {
  type?: 'text' | 'number' | 'email' | 'select';
  state: string | number;
  placeholder?: string;
  setState: (value: string) => void;
  className: string;
  options?: string[];
};

const Input = ({ type, state, placeholder, setState, className, options }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newValue = event.target.value;
    if (typeof setState === 'function') {
      setState(newValue);
    } else {
      console.error('Invalid onChange prop.');
    }
  };

  if (type === 'select') {
    return (
      <select
        className={className ? className : 'rounded-lg p-2 text-black focus:outline-0'}
        value={state}
        onChange={handleChange}
      >
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return (
    <>
      <input
        type={type || 'text'}
        placeholder={placeholder}
        required
        value={state}
        className={className ? className : 'rounded-lg p-2 text-black focus:outline-0'}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
