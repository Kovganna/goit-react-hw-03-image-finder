// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { PureComponent } from 'react';
import { getPictures } from '../servises/pixabayService';
import Searchbar from '../components/Searchbar/Searchbar';
// import ImageGallery from '../components/ImageGallery/ImageGallery';
// import Modal from '../components/Modal/Modal';
// import loadMoreBtn from '../components/Button/Button';
import './App.css';

getPictures();

class App extends PureComponent {
  state = {
    searchPage: 1,
    images: [],
    searchQuery: '',
    loading: false,
    showModal: false,
  };

  // handleSearchSubmit = searchQuery => {
  //   this.setState({ searchQuery, page: 1, images: [] });
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   const { searchQuery } = this.state;
  //   if (searchQuery !== prevState.searchQuery) {
  //     this.searchPictures()
  //       .catch(error => console.log(error))
  //       .finally(() => this.setState({ loading: false }));
  //   }
  // }

  // searchPictures() {
  //   const { searchQuery, searchPage } = this.state;
  //   this.setState({ loading: true });
  //   return getPictures(searchQuery, searchPage).then(images => {
  //     this.setState(prevState => ({
  //       images: [...prevState.images, ...images],
  //       page: prevState.page + 1,
  //     }));
  //   });
  // }

  // handleOnLoadClick = () => {
  //   this.setState({ loading: true });
  //   this.searchPictures()
  //     .then(() => {
  //       loadMoreBtn();
  //     })
  //     .catch(error => console.log(error))
  //     .finally(() => this.setState({ loading: false }));
  // };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  render() {
    // const { images, largeImage, toggleModal, showModal, searchQuery } =
    //   this.state;

    return (
      <div>
        {/* <Searchbar onSubmit={this.handleSearchSubmit} /> */}
        {/* {searchQuery && <div>{searchQuery}</div>} */}
        {/* <button type="button" onClick={toggleModal}>
          Open
        </button> */}

        {/* <ImageGallery images={images} onOpenModal={this.handleOnLoadClick} /> */}
        {/* {showModal && (
          <Modal onClose={toggleModal}>
            <button type="button" onClick={toggleModal}>
              Close
            </button>
            <img src={largeImage.largeImageURL} alt={largeImage.tag} />
          </Modal>
        )} */}
        {/* <ToastContainer
          autoClose={3000}
          position="top-center"
          hideProgressBar
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
      </div>
    );
  }
}

export default App;
