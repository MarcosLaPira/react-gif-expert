
export const getGifs = async (category) =>{

    console.log('hola mundo');

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Vg6NsR0XMHfd81Pk0uvn5S20LHPmtYyX&q=${category}&limit=20`
    const resp = await fetch(url);
    const{data} = await resp.json();

    const gifs = data.map( value => ({
        id:value.id,
        title: value.title,
        url:value.images.downsized_medium.url
    }));
    
    return gifs;
    
}