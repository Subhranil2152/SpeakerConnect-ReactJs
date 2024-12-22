import React, { Component } from 'react';
import Card from './Card';
import Spinner from './Spinner';
import './App.css';

export class Home extends Component {
  state={
    articles: [],
    loading: false,
    page: 1
  };

  expertiseTopics=[
    "Artificial Intelligence", "Machine Learning", "Blockchain", "Cybersecurity", 
    "Data Science", "Cloud Computing", "Internet of Things", "Quantum Computing", 
    "Augmented Reality", "Virtual Reality", "5G Technology", "Edge Computing", 
    "DevOps", "Big Data", "Digital Transformation"
  ];

  months=[
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  getRandomExpertise=() => {
    const randomIndex=Math.floor(Math.random() * this.expertiseTopics.length);
    return this.expertiseTopics[randomIndex];
  };

  async fetchArticles(page) {
    this.setState({ loading: true });
    const url=`https://randomuser.me/api/?results=12&page=${page}`;
    const data=await fetch(url);
    const parsedData=await data.json();
    this.setState({ articles: parsedData.results, loading: false });
  }

  componentDidMount() {
    this.fetchArticles(this.state.page);
  }

  handlePageChange=async (direction) => {
    const newPage=this.state.page + direction;
    this.setState({ page: newPage });
    this.fetchArticles(newPage);
    window.scrollTo(0, 0);
  };

  render() {
    const { articles, loading, page }=this.state;
    const month=this.months[page - 1];

    return (
      <div className="home-container">
        <h2 className="text-center">Speakers for {month}</h2>
        {loading && <Spinner />}
        <div className="row">
          {!loading && articles.map((element) => (
            <div className="col-md-4" key={element.login.uuid}>
              <Card 
                title={<><span style={{ color: '#FFFFFF' }}>{`${element.name.title} ${element.name.first} ${element.name.last}`} </span></>}
                description={
                  <>
                    <span style={{ color: '#ADD8E6' }}>Expertise: {this.getRandomExpertise()}</span><br />
                    <span style={{ color: '#D3D3D3' }}>{element.location.city}, {element.location.state}, {element.location.country}</span>
                  </>
                }  
                imgUrl={element.picture.large} 
                email={element.email} 
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={() => this.handlePageChange(-1)}>Previous</button>
          <button disabled={page >= 12} type="button" className="btn btn-dark" onClick={() => this.handlePageChange(1)}>Next</button>
        </div>
      </div>
    );
  }
}

export default Home;