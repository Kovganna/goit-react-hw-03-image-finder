import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Modal from '../components/Modal/Modal';
import getPictures from '../components/servises/pixabayService';
import Searchbar from '../components/Searchbar/Searchbar';

class App extends Component {
  state = {
    pictures: [],
    searchQ: '',
    searchPage: 1,
    loading: false,
    showModal: false,
  };

  componentDidMount() {
    console.log('componentDidMount');
    this.setState({ loading: true });

    getPictures()
      .then(pictures => this.setState({ pictures }))
      .finally(() => this.setState({ loading: false }))
      .catch(error => console.log(error.message));

    // const { query, page } = this.state;
    // return getPictures(query, page)
    //   .then(res => res.json())
    //   .then(pictures =>
    //     this.setState(prev => ({
    //       pictures: [...prev.pictures, ...pictures],
    //       page: prev.page + 1,
    //     })),
    //   );
  }

  handleSearchSubmit = searchQ => {
    this.setState({ searchQ });
  };

  searchPictures() {
    const { searchQ, searchPage } = this.state;
    return getPictures(searchQ, searchPage).then(pictures => {
      this.setState(prev => ({
        pictures: [...prev.picture, ...pictures],
        page: prev.page + 1,
      }));
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const { showModal } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {this.state.loading && <h1>Loading...</h1>}
        {this.state.pictures && <div>{this.state.searchQ}</div>}
        <button type="button" onClick={this.toggleModal}>
          Open
        </button>

        <ImageGallery />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello</h1>
            <p>Lorem 50*3</p>
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
