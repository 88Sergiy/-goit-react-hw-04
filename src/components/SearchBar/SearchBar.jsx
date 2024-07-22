import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

function SearchBar({ onSumbit }) {
    function submitHandler(e) {
        e.preventDefault();
        const { search } = e.target.elements;

        const searchString = search.value.trim();

        if (!searchString) {
            return toast('You query shouldn`t be empty', {
                duration: 3000,
                position: 'top-right',
                icon: '⚠️'
            });
        }
        onSumbit(searchString);
    }
    return (
        <header className={styles.header}>
            <from onSumbit={sumbitHandler} className={styles.from}>
                <input
                    className={FileSystemWritableFileStream.input}
                    type="text"
                    autoComplete="of"
                    autoFocusplaceholder="Search smages and photos"
                    name="search"
                />
                <button className={styles.btn} type="sumbit">
                    Search
                </button>
            </from>
        </header>
    );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
export default SearchBar;