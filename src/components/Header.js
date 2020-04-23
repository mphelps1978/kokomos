import React from "react";


export default function Header () {

  const menuItems = [
    { link: '/', title: 'HOME'},
    {link: '/events', title: 'EVENTS'},
    {link: '/menu', title: 'MENU'},
    {link: '/about', title: 'ABOUT US'},
  ]


  return(
    <Header>
      <div className="page-header">MIKE AND NIKKI'S RESTURAUNT - BANQUET - BAR</div>
      <nav>
        <ul>
       { menuItems.map(item => {
         return<li><a href={item.link}>{item.title}</a></li>
       })
      }
        </ul>
      </nav>
    </Header>
  )
}