import React, { Component } from 'react';
import { Form, Segment } from 'semantic-ui-react';
import { InputField } from './components/InputField';
import { TextAreaField } from './components/TextAreaField';
import { RadioField } from './components/RadioField';
import { CheckboxField } from './components/CheckboxField';
import { SelectField } from './components/SelectField';
import { FileField } from './components/FileField';
import { DateField } from './components/DateField';
import { TimeField } from './components/TimeField';
import { Grid } from 'semantic-ui-react';
import { PowerSelect } from 'react-power-select';

class App extends Component {

  state = {};
  handleChange = ({ option }) => {
    this.setState({
      selectedOption: option
    }),
  };
  render() {
  console.log(this.state)
    let field = ['Input','Dropdown','Radio','File','Checkbox','Date','Text Area'];
    return (
        <Segment.Group>
         <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Segment className="text-center" id='form'>
                  <h2>Form</h2>
                </Segment>
                <Form>
                  <div className="ui grid equal width stackable">
                  <div className="row">
                    <div className="column">
                      <InputField properties={this.input}/>
                    </div>
                    <div className="column">
                      <InputField />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column">
                      <TextAreaField />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column field ">
                      <label>Radio Container</label>
                      <div className="inline fields">
                        <Form.Group inline>
                          <RadioField />
                          <RadioField />
                        </Form.Group>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column field ">
                      <label>Checkbox Container</label>
                      <div className="inline fields">
                        <CheckboxField />
                        <CheckboxField />
                        <CheckboxField />
                        <CheckboxField />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className='column'>
                      <Form.Field>
                        <SelectField />
                      </Form.Field>
                      <Form.Field>
                      <label>Searchable</label>
                        <SelectField />
                      </Form.Field>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column field">
                      <FileField />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column field">
                      <DateField />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column field">
                      <TimeField />
                    </div>
                  </div>
                  <Form.Button>Submit</Form.Button>          
                  </div>
                </Form>
              </Grid.Column>
              <Grid.Column>
              <Segment>
                Fill Your Requirment
              </Segment>
              <Segment>
              <PowerSelect
                options={field}
                selected={this.state.selectedOption}
                onChange={this.handleChange}
              />
              </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment.Group>
    );
  }
}

export default App;
