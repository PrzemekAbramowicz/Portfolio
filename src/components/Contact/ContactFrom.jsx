import { useState } from 'react';
import Swal from 'sweetalert2';
import ContactDetails from './ContactDetails';
import Input from './Input';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();

		const { name, email, phone, message } = formData;

		const bodyMessage = `Imię: ${name}, <br> Email: ${email},<br> Telefon: ${phone},<br> Wiadomość: ${message}`;

		// Sending the email using smtp.js
		window.Email.send({
			Host: 'smtp.elasticemail.com',
			Username: 'p9738887@gmail.com',
			Password: '3E0218BE9717808F8FA69EA0E74FD2C41B1B',
			To: 'p9738887@gmail.com',
			From: 'p9738887@gmail.com',
			Subject: 'This is the subject',
			Body: bodyMessage,
		}).then(message => {
			if (message === 'OK') {
				Swal.fire({
					title: 'Dziękuję za wiadomość!',
					text: 'Wkrótce skontaktuję się z Tobą.',
					icon: 'success',
				});
			}
		});

		setFormData({
			name: '',
			email: '',
			phone: '',
			message: '',
		});
	};

	return (
		<div className='contact-form__wrapper container'>
			<form id='contactForm' className='form' onSubmit={handleSubmit} autoComplete='off'>
				<h2 className='form__title text-gradient'>Pracujmy razem!</h2>
				<p className='form__subtitle'>
					Jeżeli chcesz nawiązać współpracę lub masz jakiekolwiek pytania, ten formularz jest dla Ciebie!
				</p>
				<Input type='text' name='name' id='name' label='Imię' value={formData.name} onChange={handleChange} />
				<Input
					type='email'
					name='email'
					id='email'
					label='Email'
					value={formData.email}
					onChange={handleChange}
				/>
				<Input
					type='tel'
					name='phone'
					id='phone'
					label='Telefon'
					value={formData.phone}
					onChange={handleChange}
				/>
				<Input
					type='textarea'
					name='message'
					id='message'
					label='Wiadomość'
					value={formData.message}
					onChange={handleChange}
				/>
				<input type='submit' value='Wyślij' className='form__btn' />
			</form>
            <ContactDetails />
		</div>
	);
};


export default ContactForm;
