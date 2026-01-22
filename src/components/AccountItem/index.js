import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Image from '../Images';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.lastName}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.image}
                alt={data.lastName}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.firstName}</span>
                    {data.gender === 'Female' && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    )}
                </h4>
                <p className={cx('username')}>{data.lastName}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
