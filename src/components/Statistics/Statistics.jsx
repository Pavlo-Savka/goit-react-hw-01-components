import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics(props) {
    const {docx, mp3, pdf, mp4} = props;  
    return <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>

        <ul className={css['stat-list']}>
            <li className={css.item}>
                <span className="label">.docx</span>
                <span className="percentage">{docx}</span>
            </li>
            <li className={css.item}>
                <span className="label">.mp3</span>
                <span className="percentage">{mp3}</span>
            </li>
            <li className={css.item}>
                <span className="label">.pdf</span>
                <span className="percentage">{pdf}</span>
            </li>
            <li className={css.item}>
                <span className="label">.mp4</span>
                <span className="percentage">{mp4}</span>
            </li>
        </ul>
    </section>
};
Statistics.propTypes = {
    docx: PropTypes.number.isRequired,
    mp3: PropTypes.number.isRequired,
    pdf: PropTypes.number.isRequired,
    mp4: PropTypes.number.isRequired,
};
export default Statistics;