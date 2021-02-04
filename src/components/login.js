import { newElement } from '../Twitter';

export const Login = () => {
    return newElement('div', {class:"login-page-main-container"},

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

    newElement('form', {class:"login-form"},
    newElement('i', {class:"fab fa-twitter"}),
    newElement('h2', null, "Log in to twitter"),
    newElement('input', {placeholder:"Phone, email or username"}),
    newElement('input', {placeholder:"Password"}),
    newElement('a', {class:"btn btn-primary", href:"http://localhost:9090/home"}, "Log in"),
    
    newElement('div', {class:"flex-center"},
    newElement('a', {class:"forgot", href:"https://twitter.com/account/begin_password_reset"}, "Forgot password?"),
    newElement('p', {class:"dot"}, "."),
    newElement('a', {class:"sign-up-twitter",

    onclick:()=>{
        let a = document.querySelector(".Model-main-container")

        a.style.display = "block";
        a.style.height = "80vh";
        a.style.marginTop = "10px"

        let b = document.querySelector(".login-form")
        b.style.display = "none"
    }


}, "Sign up with Twitter"),
    ))
    )
}