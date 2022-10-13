import Image from 'next/image'

const Services = (props) => {
    return (
        <section className={'max-w-screen-md mx-auto px-4 py-20 md:py-40 text-white text-center'} id={props.data.id}>
            {Object.keys(props.data.content).map(key => (
                <div className={'py-6'} key={key}>
                    <Image
                        src={`/icons/${props.data.content[key].icon}.png`}
                        width={48}
                        height={48}
                        alt={props.data.content[key].headline}
                    />
                    <h2 className={'mb-3 mt-4'}>{props.data.content[key].headline}</h2>
                    <p>{props.data.content[key].content}</p>
                </div>
            ))}
        </section>
    )
}

export default Services