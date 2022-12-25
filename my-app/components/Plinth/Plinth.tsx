import Image from 'next/image'
const Plinth = () => {
    return (

        <div style={{ display: 'flex', alignContent: "center", marginTop: "8vh" }}>
            <div style={{ margin: 'auto' }}>
                <Image
                    src="/plinth.jpg" alt={'image'}
                    width={400}
                    height={100}
                ></Image>
            </div>

        </div>


    )
}
export default Plinth;