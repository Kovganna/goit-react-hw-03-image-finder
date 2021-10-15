import { Component } from 'react';
import './App.css';
import Modal from '../components/Modal/Modal';

class App extends Component {
  state = {
    pictures: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {}

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
        <button type="button" onClick={this.toggleModal}>
          Open
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello</h1>
            <p>Lorem 50*3</p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
