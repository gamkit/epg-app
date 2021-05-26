import clsx from 'clsx';
import { v4 } from 'uuid';
import classes from './ChannelsList.module.scss';
import ChannelCard from '../../components/ChannelCard/ChannelCard';
import { IChannelsList } from './types';
import { IChannel } from '../../components/ChannelCard/types';
import { ICategory } from '../../components/CategoryButton/types';

const ChannelsList: React.FC<IChannelsList> = ({ className, channels, categories }) => {
    return (
        <div className={clsx(className, classes['channels-list'])}>
            {categories.length ? (
                <>
                    {categories.map((category: ICategory) => (
                        <>
                            <h4 className={classes['theme-title']}>{category.name}</h4>
                            <ul className={clsx('row', classes['list'])}>
                                {channels.length ? (
                                    channels
                                        .filter((channel: IChannel) => Number(channel.thid) === Number(category.thid))
                                        .map((channel: IChannel) => {
                                            return (
                                                <li key={v4()} className={classes['item']}>
                                                    <ChannelCard title={channel.title} logo={channel.logo} />
                                                </li>
                                            );
                                        })
                                ) : (
                                    <p>Каналы не найдены</p>
                                )}
                            </ul>
                        </>
                    ))}
                </>
            ) : (
                <p>Каналы не доступны</p>
            )}
        </div>
    );
};

export default ChannelsList;
