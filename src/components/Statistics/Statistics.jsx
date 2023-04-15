import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics( props ) {
    const { title, stats } = props;
    const docx = stats[0].percentage;
    const mp3 = stats[2].percentage;
    const pdf = stats[1].percentage;
    const mp4 = stats[3].percentage;
    return <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css['stat-list']}>
            <li className={css.item}>
                <span className="label">.docx</span>
                <span className="percentage">{docx}%</span>
            </li>
            <li className={css.item}>
                <span className="label">.mp3</span>
                <span className="percentage">{mp3}%</span>
            </li>
            <li className={css.item}>
                <span className="label">.pdf</span>
                <span className="percentage">{pdf}%</span>
            </li>
            <li className={css.item}>
                <span className="label">.mp4</span>
                <span className="percentage">{mp4}%</span>
            </li>
        </ul>
    </section>
};
Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({percentage: PropTypes.number.isRequired})),
    title: PropTypes.string
};
export default Statistics;