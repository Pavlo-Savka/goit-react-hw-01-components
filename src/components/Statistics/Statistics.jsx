import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics( props ) {
    const { title, stats } = props;

    return <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css['stat-list']}>
            {stats.map(({ id, label, percentage }) => (
        <li className={css.item}
                key={id}
                style={{
                    backgroundColor: '#' + RandomColor(),
                    width: `calc(100% / ${stats.length})`
                }}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
            </li>
))} 
        </ul>
    </section>
};
Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({percentage: PropTypes.number.isRequired})),
    title: PropTypes.string
};

function RandomColor() {
    return Math.floor(Math.random()*16777215).toString(16)
}
export default Statistics;