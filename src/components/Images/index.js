import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';
const Image = forwardRef(function Image(
    { className, src, alt, ...props },
    ref,
) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            {...props}
            src={fallback || src}
            alt={alt}
            onError={handleError}
        />
    );
});

export default Image;
