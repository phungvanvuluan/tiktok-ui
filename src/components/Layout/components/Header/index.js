import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';

import routesConfig from '~/config/routers';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Images';
import Search from '../Search';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English', type: 'language' },
                { code: 'vi', title: 'Tiếng Việt', type: 'language' },
                { code: 'jp', title: 'Tiếng Nhật', type: 'language' },
                { code: 'kr', title: 'Tiếng Hàn', type: 'language' },
                { code: 'cn', title: 'Tiếng Trung', type: 'language' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                console.log(menuItem);
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="TikTok Logo" />
                </Link>

                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content="Message"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/542742588_4295524057435787_1954443061518114506_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGut-iZ4Vtrg6pkgcaEHXK0oBi5uE25_lKgGLm4Tbn-UpYDX7Oz5bz2M-MU7r1pLHV8OZwUFO7fIstuLSd7khXu&_nc_ohc=jkoiyowSzuMQ7kNvwFxarRR&_nc_oc=Adn2Sq3ML0-0Woi_71z0vcX5f5O6R4NLCOT87JooOvMcD2HLF_KCd5braRhfL5WVusC7Y4aaonKssk7F_R-TG4v1&_nc_zt=24&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=8_T2-iw084Wi1Bdhc7-vCw&oh=00_AfpeGy6qRPQDO2OAbTPnUS2q_dfG_fXE8XbT1vh1kF1v-g&oe=6979FAF7"
                                alt="User Avatar"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
