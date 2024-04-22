export default function VideoFilm({src, id}){
    return (
            <iframe width="100%" height="100%" src={src} style={{zIndex: '0'}} id={id}></iframe>
    )
}