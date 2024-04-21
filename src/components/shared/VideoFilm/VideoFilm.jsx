export default function VideoFilm({src}){
    return (
        <iframe width="100%" height="100%" src={src} allowFullScreen loading={"lazy"}></iframe>
    )
}