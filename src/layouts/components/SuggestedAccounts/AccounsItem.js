import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://scontent-sin2-1.xx.fbcdn.net/v/t39.30808-1/616835806_1864425127575093_6648666305303039773_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHBXzKA9EqF2_97691g2838SmxxwWzTwb1KbHHBbNPBvaLYY8sykrAF-vwwALIrpoU1xm41TUi8Zb_n2L5bDEop&_nc_ohc=QaWmC0DPU9sQ7kNvwGOb9TT&_nc_oc=AdldNKu2WUfdUenqvKMgcWtHHszxpkaPsY9icztrKWH8-7745puHOm55lindlGiOEqDUn9o47nmo9Gdu62-V6Ydb&_nc_zt=24&_nc_ht=scontent-sin2-1.xx&_nc_gid=UpiGFZqxotUUMBaf0pYc6g&oh=00_AftUuPA4jFKc6V1xNUx2-V5LICfalEWSk3vMvB9546TxHA&oe=69872232"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={cx('check')}
                    />
                </p>
                <p className={cx('name')}>Quốc Nguyễn Phú</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
