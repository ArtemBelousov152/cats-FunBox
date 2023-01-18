import cat from '../../assets/img/cat.png';
import { useState } from 'react';
import classNames from 'classnames';

import './card.scss';

const Card = ({ portions, mice, weight, activeText, flavored, disable }) => {
	const [active, setActive] = useState(false);
	const [isHover, setIsHover] = useState(false);
	const [hover, setHover] = useState(false);

	const toggleActive = () => {
		if (disable) {
			return;
		}
		if (active) {
			setIsHover(false);
			setHover(false);
		}

		setActive(!active)
	}

	const hoverHandler = () => {
		if (active) {
			setIsHover(true);
		}

		setHover(false)
	}
	const onHover = () => {
		if (isHover) {
			setHover(true)
		}
	}

	const borderClass = classNames({
		'card__border_active': active,
		'card__border_disable': disable
	})

	const cardDisableClass = classNames({
		'card_disable': disable
	})

	const weightClass = classNames({
		'card__weigth_active': active,
		'card__weigth_disable': disable
	})

	const subTextClass = classNames({
		'card__subtext_disable': disable
	})

	const activeOrDefaultSubText = active ? activeText :
		<>
			Чего сидишь? Порадуй котэ, <span className='card__buy' onClick={toggleActive}><span>купи</span>.</span>
		</>

	const disableSubText = <>Печалька, {flavored} закончились</>

	const headerText = hover ?
		<div className='card__header_hover'>Котэ не одобряет?</div> :
		<div className='card__header_default'>Сказочное заморское явство</div>

	return (
		<div
			className={`card__border ${borderClass}`}
			disable={disable}
			onMouseLeave={hoverHandler}
			onMouseEnter={onHover}>
			<div className="card__wrapper">
				<div
					className={`card ${cardDisableClass}`} 
					onClick={toggleActive}>
					<div className="card__header">
						{headerText}
					</div>
					<h2 className='card__title'>Нямушка</h2>
					<h3 className="card__flavored">{flavored}</h3>
					<div className="card__descr">
						{portions} порций <br />
						{mice}
					</div>
					<img src={cat} alt="cat" className="card__cat" />
					<div className={`card__weigth ${weightClass}`}>
						<span>{weight}</span> <br />
						кг
					</div>
				</div>
				<div className={`card__subtext ${subTextClass}`}>
					{disable ? disableSubText : activeOrDefaultSubText}
				</div>
			</div>

		</div>
	)
}

export default Card;
