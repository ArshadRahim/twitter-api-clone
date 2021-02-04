import { newElement } from '../Twitter/index';
import { footer, footerpostSecondary, footerSecondary } from './footer';



export const Start = () => {

    return newElement('h1', {class:"home-page-main-container"},

    newElement('div', {class:"Model-main-container"},
    newElement('div', {class:"Model-container-inner"},
    newElement('i', {class:"fab fa-twitter"}),
    newElement('a', {class:"btn btn-primary btn-next"}, "next"),
    newElement('h5', {class:"create"}, "Create your account"),

    newElement('input', { class:"signup-input name-input", placeholder:"Name "}),
    newElement('input', { class:"signup-input phone-input",placeholder:"Phone"}),

    newElement('a', {class:"use-email"}, "Use email instead"),

    newElement('h6', {class:"DOB"}, "Date of birth"),
    newElement('p', null, "This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else."),

    newElement('div', {class:"grid-items"},
    newElement('input', {placeholder:"Month"}),
    newElement('input', {placeholder:"Day"}),
    newElement('input', {placeholder:"Year"}),
    )
    

    )),


    newElement('div', {class:"home-page-main-flex-container"},
    newElement('div', {class:"left-main-container"},
    
    newElement('div', {class:"row-flex-container"},
    newElement('i', {class:"fa fa-search"}),
    newElement('h6', null, "Follow your interests.")
    ),
    newElement('div', {class:"row-flex-container different"},
    newElement('i', {class:"fa fa-users"}),
    newElement('h6', null, "Hear what people are talking about.")
    ),
    newElement('div', {class:"row-flex-container"},
    newElement('i', {class:"far fa-comment"}),
    newElement('h6', null, "Join the conversation.")
    )
    ),


    newElement('div', {class:"right-main-container"},
    newElement('div', {class:"right-secondary-container"},
    newElement('i', {class:"fab fa-twitter"}),
    newElement('h3', null, "See what's happening in the world right now"),
    newElement('h6', {class:"join-twitter"}, "Join Twitter today."),
    newElement('a', {class:"btn btn-primary",

    onclick:()=>{
        let a = document.querySelector(".Model-main-container")

        a.style.display = "block";


    }

}, "Sign up"),

    newElement('a', {class:"btn btn-secondary", href:"http://localhost:9090/login"}, "Log in"))
    )
    ),footer(), footerpostSecondary(),
    );
    
}