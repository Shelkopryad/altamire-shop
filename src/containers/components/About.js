import React, { Component } from 'react';
import Paragraph from 'arui-feather/paragraph';

class About extends Component {
  render() {
    return (
      <div className='container'>
        <Paragraph view='normal'>
          Компания Google проанализировала поисковые запросы и выяснила, какие банковские услуги и продукты наиболее востребованы среди пользователей Рунета, а также как менялись маркетинговые стратегии банков за последние 2 года. Исследование отражает сравнительные данные за 2014 – 2015 год, а также тенденции начала 2016 года.
        </Paragraph>
      </div>
    )
  }
}

export default About;
