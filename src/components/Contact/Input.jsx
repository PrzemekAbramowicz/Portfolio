import { useState } from 'react';

const Input = ({ type, name, id, label, value, onChange }) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => setIsFocused(true);
	const handleBlur = e => {
		if (e.target.value === '') {
			setIsFocused(false);
		}
	};

	return (
		<div className={`input-container ${isFocused || value ? 'focus' : ''}`}>
			{type === 'textarea' ? (
				<textarea
					name={name}
					id={id}
					className='input'
					value={value}
					onChange={onChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
				></textarea>
			) : (
				<input
					type={type}
					name={name}
					id={id}
					className='input'
					value={value}
					onChange={onChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
			)}
			<label htmlFor={id}>{label}</label>
			<span>{label}</span>
		</div>
	);
};

export default Input;
