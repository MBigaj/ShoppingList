const Homepage = () => {
    return (
        <div class="homepage">
            <h1>This is a homepage</h1>
            <h2>{ process.env.REACT_APP_DOTNET_API }</h2>
        </div>
    );
}

export default Homepage;