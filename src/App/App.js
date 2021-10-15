import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PureComponent } from 'react';
import { getPictures } from '../servises/pixabayService';
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Modal from '../components/Modal/Modal';
import './App.css';

class App extends PureComponent {
  state = {
    searchPage: 1,
    images: [],
    searchQuery: '',
    loading: false,
    showModal: false,
  };

  handleSearchSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, searchPage } = this.state;
    if (searchQuery !== prevState.searchQuery) {
      this.getPictures()
        .catch(err => console.log(err))
        .finally(() => this.setState({ loading: false }));
    }
  }

  getPictures() {
    const { searchQuery, searchPage } = this.state;
    this.setState({ loading: true });
    return getPictures(searchQuery, searchPage).then(images => {
      this.setState(prev => ({
        images: [...prev.images, ...images],
        page: prev.page + 1,
      }));
    });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {this.state.searchQuery && <div>{this.state.searchQuery}</div>}
        <button type="button" onClick={this.toggleModal}>
          Open
        </button>

        <ImageGallery searchQ={this.state.searchQuery} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
        <ToastContainer
          autoClose={3000}
          position="top-center"
          hideProgressBar
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default App;
