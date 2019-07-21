import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import UsersNames from './components/UsersNames/UsersNames';
import UserCard from './components/UserCard/UserCard';

class App extends React.Component {
  state = {
    data: [],
    userCard: [],
    loading: false,
    dataIsLoaded: false,
    userCardIsLoaded: false,
    error: '',
  };
  getData = () => {
    const url = 'http://uinames.com/api/?ext&amount=5';
    this.setState({ loading: true });
    fetch(url)
      .then(data => data.json())
      .then(data => this.setState({ data, dataIsLoaded: true, loading: false }))
      .catch(error => this.setState({ error: error.message, loading: false }));
  };

  getUserCard = index =>
    this.setState({ userCard: this.state.data[index], userCardIsLoaded: true });

  render() {
    const { data, userCard, loading, dataIsLoaded, userCardIsLoaded, error } = this.state;
    return (
      <React.Fragment>
        <Button getData={this.getData} />
        <div className="container">
          <UsersNames
            data={data}
            dataIsLoaded={dataIsLoaded}
            getUserCard={this.getUserCard}
            loading={loading}
            error={error}
          />
          <UserCard userCard={userCard} userCardIsLoaded={userCardIsLoaded} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
