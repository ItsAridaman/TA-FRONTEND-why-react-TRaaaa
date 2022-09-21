import data from '../data.json';
import Header from './Header';

function App() {
    return (
    <>
        <Header />
        <Hero />
        <Articles />
        <Footer />
    </>
    )
}



function Hero() {
    return <h1>Hero section</h1>
}

function Article(props) {
    return <>
    <div>
        <h2>{props.Info.author}</h2>
        <img src={props.Info.urlToImage} alt="myimage" />
    </div>
    </>
}

function Articles() {
    return data.map((data) => <Article Info={data} />);
}

function Footer() {
    return <h3>footer here</h3>
}

export default App;