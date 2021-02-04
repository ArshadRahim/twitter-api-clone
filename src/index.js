
import { newElement , reactDOM } from './Twitter/index';
import { Layout } from './components/layout';
import './styles/style.css';

const App = () => {
    const main = newElement('div', null);
    const twitterLayout = newElement('div', null, Layout()) 
    main.appendChild(twitterLayout);
    return main;

}
reactDOM.render(App(), document.getElementById('root'));
