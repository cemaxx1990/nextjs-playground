const TextSection = (props) => {
    return (
        <section className={'max-w-screen-md mx-auto px-4 py-20 md:py-40 text-white text-center'} id={props.data.id}>
            {props.h1
                ? <h1 className={'mb-6'}>{props.data.headline}</h1>
                : <h2 className={'mb-4'}>{props.data.headline}</h2>
            }
            <p>{props.data.content}</p>
        </section>
    )
}

export default TextSection