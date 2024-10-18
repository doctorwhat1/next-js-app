import React from 'react'

const Dropdown = () => {
  return (
    <details className="dropdown">
  <summary>Действия</summary>
  <ul className="menu dropdown-content bg-base-100 shadow">
    <li><a>Редактировать</a></li>
    <li><a>Удалить</a></li>
  </ul>
</details>
  )
}

export default Dropdown