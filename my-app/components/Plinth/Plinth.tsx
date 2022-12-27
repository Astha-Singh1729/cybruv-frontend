import Image from 'next/image'
const Plinth = () => {
    return (

        <div style={{ display: 'flex', alignContent: "center", marginTop: "8vh" }}>
            <div style={{ margin: 'auto' }}>
                <Image
                    src="/plinth.jpg" alt={'image'}
                    width={300}
                    height={80}
                ></Image>
            </div>

        </div>


    )
}
export default Plinth;