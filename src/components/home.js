import { newElement } from '../Twitter';

export const Home = () => {
    return newElement('div', {class:'Homepage-main'},
    newElement('div', {class:"home-grid-container"},
    
    newElement('div', {class:"home-sidebar"},
    newElement('div', {class:"home-sidebar-flex"},

    newElement('div', {class:"sidebar-items-container"},
    newElement('i', {class:"fab fa-twitter hellow-twitter"})),

    newElement('div', {class:"sidebar-items-container"},
    newElement('i', {class:"fa fa-home"}),
    newElement('a', null, "Home")),
   
    newElement('div', {class:"sidebar-items-container"},
    newElement('i', {class:"fa fa-hashtag"}),
    newElement('a', null, "Explore")),
   
    newElement('div', {class:"sidebar-items-container"},
    newElement('i', {class:"fa fa-bell"}),
    newElement('a', null, "Notifications")),
   
    newElement('div', {class:"sidebar-items-container"},
    newElement('i', {class:"fa fa-envelope"}),
    newElement('a', null, "Messages")),
   
    newElement('div', {class:"sidebar-items-container"},
    newElement('i', {class:"fa fa-user"}),
    newElement('a', null, "Profile")),
   
    newElement('div', {class:"sidebar-items-container"},
    newElement('i', {class:"fa fa-ellipsis-h"}),
    newElement('a', null, "More")),

    
    ),
    newElement('div', {class:"tweet-btn-container"},
    newElement('a', {class:"btn-primary-tweet",
    onclick:()=> {
        let popupModel = document.querySelector('.tweet-model-container');
        popupModel.style.borderRadius = "8px";
        popupModel.style.backgroundColor = "white";
        popupModel.style.boxShadow = "0px 0px 4px 0px";
        popupModel.style.width = "100%";    
        popupModel.style.height = "200px";
        popupModel.style.marginTop = "1em";
        let main = document.querySelector('.hidden-content');
        main.style.display = "flex";
       

}
}, "Tweet")),

    newElement('div', {class:"sidebar-profile-container", 

    onclick:()=> {
        let x = document.querySelector('.popup-model-container');
        x.style.display = "block";
    }
},
    newElement('div',{class:"pic-container"},
    newElement('img', {src:"https://static-cse.canva.com/image/63430/nip4.jpg"})),
    newElement('div',{class:"name-container"},
    newElement('h6', null, "Arshadgulbasti"),
    newElement('p', null, "@arshadgulbasti")),
    newElement('div',{class:'dots'},
    newElement('i', {class:"fa fa-ellipsis-h"}))),

    newElement('div', {class:"popup-model-container"},
    
    newElement('div', {class:"popup-profile-container"},
    newElement('div',{class:"pic-container"},
    newElement('img', {src:"https://static-cse.canva.com/image/63430/nip4.jpg"})),
    newElement('div',{class:"name-container"},
    newElement('h6', null, "Arshadgulbasti"),
    newElement('p', null, "@arshadgulbasti")),
    newElement('div',{class:'dots'},
    newElement('i', {class:"fa fa-ellipsis-h"}))),

    newElement('a', null, "Add an existing account"),
    newElement('a', null, "Log out @username"),
    
    )
    ),

    newElement('div', {class:"home-centerbar"},
    newElement('div',{class:"home-center-inner"},
    newElement('div', {class:"home-text-container"},
    newElement('h2', null, "Home"),
    newElement('i', {class:"fa fa-star"})
    ),

    newElement('div', {class:"tweet-model-container"},
    newElement('div', {class:"tweet-model-p1"},
    newElement('img', {src:"https://static-cse.canva.com/image/63430/nip4.jpg"}),
    newElement('input', {placeholder:"What's happening?",
    onclick:() =>{
        let hey = document.querySelector('.hidden-content');
        hey.style.display = "flex";
        // hey.style.borderBottom = "solid 1px rgb(224, 223, 223)";

        let btn = document.querySelector('.btn-tweet')
        btn.style.backgroundColor = "rgba(29, 161, 242, 1)";
        btn.style.marginTop = "2.5em";
    }}
    )

    ),
    newElement('div', {class:"hidden-content"},
    newElement('i', {class:"fa fa-globe"}),
    newElement('p', null, "Everyone can reply")),

    newElement('div', {class:"tweet-model-p2"},
    newElement('div', {class:"icons-container"},
    newElement('i', {class:"far fa-images"}),
    newElement('i', {class:"far fa-square"}),
    newElement('i', {class:"far fa-chart-bar"}),
    newElement('i', {class:"far fa-smile"}),
    newElement('i', {class:"far fa-calendar-check"}),
    ),
    newElement('a', {class:"btn-tweet"}, "Tweet")
    )
    )
    )
    ),

    newElement('div', {class:"home-trendsbar"},
    newElement('div', {class:"search-bar"},
    newElement('input', {placeholder:"Search Twitter",
    onclick:()=>{
        let eee = document.querySelector('.hidden-para');
        eee.style.display = "block";
    }
}),
    newElement('div', {class:"hidden-para"},
    newElement('p', null, "Try searching for people, topics, or keywords")) )),

    
    ))
}