import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const ContactDetails = () => {
	const contactDetails = [
		{
			href: 'tel:+48511003345',
			icon: faPhone,
			label: '+48 511 003 345',
		},
		{
			href: 'mailto:abramowicz.dev@gmail.com',
			icon: faEnvelope,
			label: 'abramowicz.dev@gmail.com',
		},
		{
			href: '#',
			icon: faLocationDot,
			label: 'Warszawa',
		},
	];

	return (
		<div className='contact'>
			{contactDetails.map(({ href, icon, label }, index) => (
				<div key={index} className='contact__icon'>
					<a className='contact__icon-link' href={href}></a>
					<span className='contact__icon-link-wrapper'>
						<FontAwesomeIcon icon={icon} />
					</span>
					<p>{label}</p>
				</div>
			))}
		</div>
	);
};

export default ContactDetails;
