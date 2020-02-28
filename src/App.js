import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import './App.css';


const Q1 = [
  { value: 1, label: 'Chocolate' },
  { value: 2, label: 'Strawberry' },
  { value: 3, label: 'Vanilla' },
  { value: 4, label: 'Vanilla' },
];

const Q2 = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      miasto: "",
      goraczka: false,
      wynik: 0,

    };
  }

  handleChange1 = miasto => {
    this.setState({ miasto });
    console.log(`Option selected:`, this.state.miasto);
  };



  render(){
  return (
      <div className="App">
        <div>
          <h1>Test na koronawirusa</h1>
          <p>
            tutaj jakies pierdolenie ze nie warto sie tym przejmowac
          </p>
        </div>
        <div className="testCard">
        <div class="shadow p-3 mb-5 bg-white rounded">
          <div>
            <h1>Wypełnij test i poznaj swój wynik</h1>
          </div>
          <p className="question">W jak duzej miejscowosci mieszkasz</p>
                <Select
              value={this.state.miasto}
              onChange={this.handleChange1}
              options={Q1}
            />

          <p className="question">W jakim jestes wieku</p>
                <Select
              value={this.state.miasto}
              onChange={this.handleChange1}
              options={Q1}
            />

          <p className="question">Czy miałeś styczność z osobą zarazona</p>
                <Select
              value={this.state.miasto}
              onChange={this.handleChange1}
              options={Q1}
            />

          <p className="question">W jak duzej miejscowosci mieszkasz</p>
                <Select
              value={this.state.miasto}
              onChange={this.handleChange1}
              options={Q1}
            />

          <p className="question">W jak duzej miejscowosci mieszkasz</p>
                <Select
              value={this.state.miasto}
              onChange={this.handleChange1}
              options={Q1}
            />

          <p className="question">W jak duzej miejscowosci mieszkasz</p>
                <Select
              value={this.state.miasto}
              onChange={this.handleChange1}
              options={Q1}
            />

          <p className="question">Czy masz aktualnie gorączkę</p>
                <Select
              value={this.state.miasto}
              onChange={this.handleChange1}
              options={Q1}
            />

          <p className="question">Czy masz aktualnie kaszel</p>
                <Select
              value={this.state.miasto}
              onChange={this.handleChange1}
              options={Q1}
            />
          <p className="question">Czy masz aktualnie duszności</p>
          
        
         
         
          <p className="question">Czy masz aktualnie bóle mięśni</p>
          
          <p className="question">Czy masz aktualnie zmęczenie</p>


          <p className="question">W jak duzej miejscowosci mieszkasz</p>
                <Select
              value={this.state.miasto}
              onChange={this.handleChange1}
              options={Q1}
            />

          <button>Sprawdz swój wynik</button>

          
        </div>   

    

        </div>
      </div>
    );
  }
}

export default App;
