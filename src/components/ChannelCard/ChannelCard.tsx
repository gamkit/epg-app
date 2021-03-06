import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import classes from './ChannelCard.module.scss';
import { IChannelCard } from './types';

const ChannelCard: React.FC<IChannelCard> = ({ className, title, logo, chid, xvid }) => {
    return (
        <div className={clsx(className, classes['channel'])}>
            <span className={classes['logo']}>
                <img src={`https://epg.domru.ru/${logo}`} alt={`${title} logo`} />
            </span>
            <p className={classes['title']}>
                {/* <NavLink to={`/channel/program?chid=${chid}&xvid=${xvid}`}>{title}</NavLink> */}
                <NavLink to={`/program/list?chid=${chid}&xvid=${xvid}`}>{title}</NavLink>
            </p>
        </div>
    );
};

export default ChannelCard;
