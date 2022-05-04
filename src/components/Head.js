const Head = ({ data }) => {
    return <div className="main-head">
        <div className="container">
            <div >
                <h1 > {data.restaurant.name} </h1>
                <p >
                    {data.restaurant.description}
                </p>
            </div >

            <img src={data.restaurant.picture} alt="" />
        </div>
    </div>
}

export default Head