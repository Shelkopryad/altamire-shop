import React, { Component } from 'react';
import Label from 'arui-feather/label';
import RadioGroup from 'arui-feather/radio-group';
import Radio from 'arui-feather/radio';

class Price extends Component {
  constructor(props) {
    super(props)
    this.state = {
      format: '',
      persons: '',
      price: '',
      formatIsChecked: false,
      personsIsChecked: false,
      priceMap: {
        'А4 (30 x 21 см)': {
          '1 чел.': '900-1500₽',
          '2 чел.': '1200-1700₽',
          '3 чел.': 'Цена отсутствует'
        },
        'А3 (30 x 40 см)': {
          '1 чел.': '1300-2000₽',
          '2 чел.': '1800-2400₽',
          '3 чел.': '2200-3000₽'
        },
        'А2 (40 х 60 см)': {
          '1 чел.': '1900-2700₽',
          '2 чел.': '2400-3300₽',
          '3 чел.': '2900-4000₽'
        },
        'А1 (60 x 80 см)': {
          '1 чел.': '2800-4000₽',
          '2 чел.': '3400-5000₽',
          '3 чел.': '4000-6000₽'
        }
      }
    }
    this.setFormat = this.setFormat.bind(this)
    this.setPersons = this.setPersons.bind(this)
    this.setAmount = this.setAmount.bind(this)
  }

  async setFormat(event) {
    await this.setState({
      formatIsChecked: true,
      format: event
    });
    if (this.state.personsIsChecked === true) {
      this.setAmount()
    }
  }

  async setPersons(event) {
    await this.setState({
      personsIsChecked: true,
      persons: event
    })
    if (this.state.formatIsChecked === true) {
      this.setAmount()
    }
  }

  setAmount() {
    console.log(this.state.format, this.state.persons)
    this.setState({
      price: this.state.priceMap[this.state.format][this.state.persons]
    })

    console.log(this.state.price)
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Label size='l' isNoWrap={ true }>
            Рассчитать стоимость:
          </Label>
        </div>
        <div className='row'>
          <div className='col-6'>
            <RadioGroup onChange={ this.setFormat }>
              {
                ['А4 (30 x 21 см)', 'А3 (30 x 40 см)', 'А2 (40 х 60 см)', 'А1 (60 x 80 см)'].map(text => (
                  <Radio
                    text={ text }
                    key={ text }
                    value={ text }
                  />
                ))
              }
            </RadioGroup>
          </div>
          <div className='col-6'>
            <RadioGroup onChange={ this.setPersons }>
              {
                ['1 чел.', '2 чел.', '3 чел.'].map(text => (
                  <Radio
                    text={ text }
                    key={ text }
                    value={ text }
                  />
                ))
              }
            </RadioGroup>
          </div>
        </div>
        <div id='result' className='row'>
          <Label size='l' isNoWrap={ true }>
            { this.state.price }
          </Label>
        </div>
      </div>
    )
  }
}

export default Price;
