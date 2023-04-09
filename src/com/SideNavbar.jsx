import React from "react"
import './Sidenavbar.css'

function SideNavbar(){
    const menu=[
        {to:'/r/popular' ,text : "Popular"},
        {to:'/r/all' ,text : "All"},
        {to:'/r/random' ,text : "Random"}
    ]
    const subList=[
        "askreddit",
        "Worldnews",
        "videos",
        "todayilearned",
        "pics",
        "Gaming",
        "Movies",
        "news",
        "gifs",
        "aww",
        "modlyinteresting",
        "televison",
        "jokes",
        "science",
        "soccer",
        "internetisbeautiful",
        "detaisbeautiful",

    ]

    return(
        <div className="sidenav">
            {/* logo */}
            <div className="sidenav_logo">
                <img src="https://logosmarcas.net/wp-content/uploads/2020/11/Reddit-Emblema.png" alt="" />

            </div>
            {/* search */}
            <div className="sidenav_search">
                <input type="text" name="search" placeholder="Search" />
                <i className="fas fa-search"></i>
            </div>
            {/* sidenav link */}
            <div className="sidenavLink">
                <ul className="sidebar_menu">
                    {menu.map(menu=>(
                        <li><a href={menu.to}>{menu.text}</a></li>
                    ))}

                </ul>
                <hr/>
                <ul className="sidenav_sub">
                    {subList.map(subList=>(
                        <li className="l"><a href={`/r/${subList}`} className="l">{subList}</a></li>
                    ))}
                </ul>

            </div>
        </div>
    )
}
export default SideNavbar;