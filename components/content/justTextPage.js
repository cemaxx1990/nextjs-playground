const justTextPage = (props) => {
    return (
        <section className={'w-screen text-white max-w-screen-xl mx-auto px-4 py-20 md:py-40'}>
            <h1>{props.data.headline}</h1>
            {/* Loop through JSON and show headlines and content if they are available */}
            {Object.keys(props.data.content).map(key => (
                <div key={key}>
                    {props.data.content[key].headline && <h2 className={'mb-5 mt-8'}>{props.data.content[key].headline}</h2>}
                    {props.data.content[key].content && <p
                        className={props.data.content[key].contentClasses && props.data.content[key].contentClasses}
                        dangerouslySetInnerHTML={ {__html: props.data.content[key].content} }
                    />}
                </div>
            ))}
        </section>
    )
}

export default justTextPage