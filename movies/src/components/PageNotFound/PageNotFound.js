import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';


function PageNotFound () {
  return (
    <div className="not-found">
      <h2 className="not-found__name">404</h2>
      <h3 className="not-found__title">
         Страница не найдена
      </h3>
      <Link className="not-found__link" to="/">Назад</Link>
    </div>
  )
}

export default PageNotFound;