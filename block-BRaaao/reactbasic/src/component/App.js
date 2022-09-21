import data from '../data.json';
import Header from './Header';

let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
];

function Button(props) {
    return <>
        <button onClick={() => alert(`this is, ${props.binfo.value}`)}>{props.binfo.value}</button>
    </>
}

function CreateButtons() {
    return fruits.map((fruits) => <Button binfo={fruits} />)
}

function HandleClick(name) {
    alert(`hello there... ${name}`);
}

function App() {
    return (
        <>
            <CreateButtons />
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
            <button onClick={() => HandleClick(props.Info.author)}>Click me</button>
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