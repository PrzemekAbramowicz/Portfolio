import ContactForm from './ContactFrom';
// import ContactDetails from './ContactDetails';

const Contact = () => {
	return (
		<section className='contact-form' id='contact'>
			<div className='contact-form__wrapper container'>
				<ContactForm />
				{/* <ContactDetails /> */}
			</div>
		</section>
	);
};

export default Contact;
