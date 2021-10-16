import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PureComponent } from 'react';
import { getPictures } from '../servises/pixabayService';
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Modal from '../components/Modal/Modal';
// import loadMoreBtn from '../components/Button/Button';
import './App.css';

class App extends PureComponent {
  state = {
    page: 1,
    images: [],
    searchQuery: '',
    loading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (searchQuery !== prevState.searchQuery) {
      this.searchImage()
        .catch(err => console.log(err))
        .finally(() => this.setState({ loading: false }));
    }
  }
  searchImage = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });

    return getPictures(searchQuery, page).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      }));
    });
  };

  handleSearchSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1, images: [] });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onClickImage = largeImage => {
    this.setState({ largeImage });
    this.toggleModal();
  };

  render() {
    const { images, searchQuery, largeImage, showModal } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {searchQuery && <div>{searchQuery}</div>}
        {/* <button type="button" onClick={toggleModal}>
          Open
        </button> */}

        <ImageGallery images={images} onClick={this.onClickImage} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage.largeImageURL} alt={largeImage.tag} />
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
