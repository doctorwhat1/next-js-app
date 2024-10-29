'use client'
import React from 'react'
import Link from 'next/link'


const Sidebar = () => {
  return (
    <div className="drawer ">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Меню</label>
  </div>
  <div className="drawer-side font-bold">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 z-150">
      {/* Sidebar content here */}
      <li><Link href="/"     >Главная</Link></li>
      <li><Link href="/teams">Мои Команды</Link></li>
      <li><Link href="/users">Пользователи</Link></li>
      <li><Link href="/tasks">API TEST!!!</Link></li>
      <li><Link href="/login">Логин</Link></li>
    </ul>
  </div>
</div>
  )
}

export default Sidebar