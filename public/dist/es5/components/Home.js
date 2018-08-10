"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../actions"));

var Home = (function (Component) {
    function Home() {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this);
        this.state = {
            movie: {
                title: "",
                year: "",
                imdb: ""
            }
        };
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    _inherits(Home, Component);

    _prototypeProperties(Home, null, {
        handleClick: {
            value: function handleClick(event) {
                event.preventDefault();
                console.log("click handled!", this.state.movie);

                this.props.addMovie(this.state.movie);
            },
            writable: true,
            configurable: true
        },
        handleFormChange: {
            value: function handleFormChange(attr, event) {
                console.log(attr + " == " + event.target.value);

                var updated = Object.assign({}, this.state.movie);
                updated[attr] = event.target.value;

                this.setState({
                    movie: updated
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement("div", { className: "nav-container" }),
                    React.createElement(
                        "div",
                        { className: "main-container" },
                        React.createElement(
                            "section",
                            { className: "space-sm" },
                            React.createElement(
                                "div",
                                { className: "container align-self-start" },
                                React.createElement(
                                    "div",
                                    { className: "row mb-5" },
                                    React.createElement("div", { className: "col text-center" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "row justify-content-center" },
                                    React.createElement(
                                        "div",
                                        { className: "col-12 col-md-8 col-lg-7" },
                                        React.createElement(
                                            "div",
                                            { className: "card card-lg text-center" },
                                            React.createElement(
                                                "div",
                                                { className: "card-body" },
                                                React.createElement(
                                                    "div",
                                                    { className: "mb-4" },
                                                    React.createElement(
                                                        "h2",
                                                        { className: "mb-2" },
                                                        "Enter A Movie!"
                                                    ),
                                                    React.createElement(
                                                        "span",
                                                        null,
                                                        "fill out the form to contribute a film "
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "row no-gutters justify-content-center" },
                                                    React.createElement(
                                                        "form",
                                                        { className: "text-left col-lg-8" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { "for": "movieTitle" },
                                                                "Title"
                                                            ),
                                                            React.createElement("input", {
                                                                onChange: this.handleFormChange.bind(this, "title"),
                                                                className: "form-control form-control-lg",
                                                                type: "text",
                                                                name: "title",
                                                                id: "movieTitle",
                                                                placeholder: "What Movie?" })
                                                        ),
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { "for": "movieYear" },
                                                                "Year"
                                                            ),
                                                            React.createElement("input", {
                                                                onChange: this.handleFormChange.bind(this, "year"),
                                                                className: "form-control form-control-lg",
                                                                type: "text",
                                                                name: "year",
                                                                id: "movieYear",
                                                                placeholder: "What Year?" })
                                                        ),
                                                        React.createElement(
                                                            "div",
                                                            { className: "form-group" },
                                                            React.createElement(
                                                                "label",
                                                                { "for": "imdbNumber" },
                                                                "IMDB"
                                                            ),
                                                            React.createElement("input", {
                                                                onChange: this.handleFormChange.bind(this, "name"),
                                                                className: "form-control form-control-lg",
                                                                type: "text",
                                                                name: "imdb",
                                                                id: "imdbNumber",
                                                                placeholder: "What IMDb?" })
                                                        ),
                                                        React.createElement(
                                                            "div",
                                                            { className: "text-center mb-4" },
                                                            React.createElement(
                                                                "button",
                                                                {
                                                                    onClick: this.handleClick,
                                                                    type: "submit",
                                                                    className: "btn btn-primary btn-lg" },
                                                                "Submit!"
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Home;
})(Component);






var stateToProps = function (state) {
    return {};
};

var dispatchToProps = function (dispatch) {
    return {
        addMovie: function (movie) {
            return dispatch(actions.addMovie(movie));
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(Home);