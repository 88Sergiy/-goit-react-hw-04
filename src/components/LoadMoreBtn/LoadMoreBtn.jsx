import PropTypes from 'prop-types';

import styles from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onLoading, setPage }) {
    return (
        <button
            type="button"
            className={styles.btn}
            onClik={() => setPage(prevPage => prevPage + 1)}
            disabled={onLoading}
        >
            Load more
        </button>
    );
}

LoadMoreBtn.PropTypes = {
    onLoadMore: PropTypes.func,
    onLoadding: PropTypes.bool,
    setPage: PropTypes.func,
};

export default LoadMoreBtn;
