import React, { Component } from 'react';
import Label from 'arui-feather/label';

class Price extends Component {

  render() {
    return (
      <div>
        <div>
          <Label size='l' isNoWrap={ true }>
            Рассчитать стоимость
          </Label>
        </div>
        <div>
          <Label size='l' isNoWrap={ true }>
            А4 (30 x 21 см) 1 чел:&nbsp;
          </Label>
          900-1500₽
        </div>
        <div>
          <Label size='l' isNoWrap={ true }>
            А4 (30 x 21 см) 2 чел:&nbsp;
          </Label>
          1200-1700₽
        </div>
        <div>
          <Label size='l' isNoWrap={ true }>
            А3 (30 x 40 см) 1 чел:&nbsp;
          </Label>
          1300-2000₽
        </div>
        <div>
          <Label size='l' isNoWrap={ true }>
            А3 (30 x 40 см) 2 чел:&nbsp;
          </Label>
          1800-2400₽
        </div>
        <div>
          <Label size='l' isNoWrap={ true }>
            А3 (30 x 40 см) 3 чел:&nbsp;
          </Label>
          2200-3000₽
        </div>
        <div>
          <Label size='l' isNoWrap={ true }>
            А2 (40 х 60 см) 1 чел:&nbsp;
          </Label>
          1900-2700₽
        </div>
        <div>
          <Label size='l' isNoWrap={ true }>
            А2 (40 х 60 см) 2 чел:&nbsp;
          </Label>
          2400-3300₽
        </div>
        <div>
          <Label size='l' isNoWrap={ true }>
            А2 (40 х 60 см) 3 чел:&nbsp;
          </Label>
          2900-4000₽
        </div>
        <div>
          <Label size='l' isNoWrap={ true }>
            А1 (60 x 80 см) 1 чел:&nbsp;
          </Label>
          2800-4000₽
        </div>
        <div>
          <Label size='l' isNoWrap={ true }>
            А1 (60 x 80 см) 2 чел:&nbsp;
          </Label>
          3400-5000₽
        </div>
        <div>
          <Label size='l' isNoWrap={ true }>
            А1 (60 x 80 см) 3 чел:&nbsp;
          </Label>
          4000-6000₽
        </div>
      </div>
    )
  }
}

export default Price;
