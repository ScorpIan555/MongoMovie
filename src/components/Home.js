import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'


class Home extends Component {
  constructor() {
    super()
    this.state = {
      movie: {
        title: '',
        year: '',
        imdb: ''
      }
    }
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(event) {
    event.preventDefault()
    console.log('click handled!', this.state.movie)

    this.props.addMovie(this.state.movie)
  }


  handleFormChange(attr, event) {
    console.log(attr + ' == ' + event.target.value)

    let updated = Object.assign({}, this.state.movie)
    updated[attr] = event.target.value

    this.setState({
      movie: updated
    })
  }


    render() {
      return(

          <div>

            <div className="nav-container">
            </div>

            <div className="main-container">
                <section className="space-sm">
                    <div className="container align-self-start">
                        <div className="row mb-5">
                            <div className="col text-center">
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-7">
                                <div className="card card-lg text-center">
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <h2 className="mb-2">Enter A Movie!</h2>
                                            <span>fill out the form to contribute a film </span>
                                        </div>
                                        <div className="row no-gutters justify-content-center">
                                            <form className="text-left col-lg-8">
                                                <div className="form-group">
                                                    <label for="movieTitle">Title</label>
                                                    <input
                                                          onChange={this.handleFormChange.bind(this, 'title')}
                                                          className="form-control form-control-lg"
                                                          type="text"
                                                          name="title"
                                                          id="movieTitle"
                                                          placeholder="What Movie?" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="movieYear">Year</label>
                                                    <input
                                                          onChange={this.handleFormChange.bind(this, 'year')}
                                                          className="form-control form-control-lg"
                                                          type="text"
                                                          name="year"
                                                          id="movieYear"
                                                          placeholder="What Year?" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="imdbNumber">IMDB</label>
                                                    <input
                                                          onChange={this.handleFormChange.bind(this, 'name')}
                                                          className="form-control form-control-lg"
                                                          type="text"
                                                          name="imdb"
                                                          id="imdbNumber"
                                                          placeholder="What IMDb?" />
                                                </div>
                                                <div className="text-center mb-4">
                                                    <button
                                                            onClick={this.handleClick}
                                                            type="submit"
                                                            className="btn btn-primary btn-lg">Submit!</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

          </div>
      )
  }
}




const stateToProps = (state) => {
  return {

  }
}

const dispatchToProps = (dispatch) => {
  return {
    addMovie: (movie) => dispatch(actions.addMovie(movie))
  }
}

export default connect(stateToProps, dispatchToProps)(Home)
