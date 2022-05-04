import './reset.css'
import './App.scss';
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header';
import Head from './components/Head';
import MainSection from './components/MainSection';


function App() {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const fetchData = async () => {
        try {
            const response = await axios.get('https://deliveroo-back-moha.herokuapp.com/')

            setData(response.data)

            setIsLoading(false)

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return < div className="App" >
        <Header />
        {isLoading ? <p>Loading ... </p> : <Head data={data} />}

        {isLoading ? <p>Loading....</p> : <MainSection data={data} />}

    </div >

}

export default App;