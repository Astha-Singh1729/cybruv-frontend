type NavItemProps = { event: string, detail: string, link: string }
const Component = ({ event, detail, link }: NavItemProps) => {
    return (
        <>
            <div style={{ display: 'flex', alignContent: "center", marginTop: "12vh", marginBottom: '7vh' }}>

                <div className="events-dabba" style={{ width: '70vw', margin: "auto", textAlign: "center", border: "0.1vw solid grey", borderRadius: '1.5vh' }}>
                    <div style={{ textAlign: 'left', fontSize: 'small' }}>&nbsp; 🔴 &nbsp;  🟡  &nbsp; 🟢</div>
                    <div style={{ padding: '3vh' }}>

                        <div className="event" style={{ fontSize: "3vh" }}>
                            {event}
                        </div>
                        <div className="detail" style={{ paddingTop: "4vh", wordSpacing: "0.5vw", lineHeight: "2.6vh" }}>
                            {detail}
                        </div>
                        <div style={{ paddingTop: "4vh", fontSize: "2.5vh" }}>
                            <div className="register"  >
                                <div style={{ margin: 'auto' }}>
                                    <a className="alink" href={link} target="_blank" rel="noopener noreferrer">Register</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};
import events from "./Content";
const Page = () => {
    const Events: JSX.Element[] = [];
    events.map((cont) => {
        Events.push(<Component event={cont.title} detail={cont.content} link={cont.link} />)
    });
    return (
        <div>
            {Events}
        </div>
    );
};
export default Page;