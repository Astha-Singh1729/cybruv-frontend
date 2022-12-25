
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { beginners_data, placement_data, codelnm_data } from './series_data';
type Contest = { title: string, practice: string, edi: string };
type SeriesItemProps = { title: string, list: Contest[] }

const Series = ({ title, list }: SeriesItemProps) => {
    const styleSummary = {
        color: 'white',
        backgroundColor: 'black'
    };
    const styleDetail = {
        color: 'white',
        backgroundColor: '#FB2576'
    };


    const BigBoi: JSX.Element[] = [];
    list.map((stuff) => {
        const edi = stuff.edi == '-1' ? "Not Available" : <a href={stuff.edi} target="_blank" style={{ color: 'black' }}>Editorial</a>;
        BigBoi.push(<div>
            <AccordionDetails style={styleDetail}>
                <Typography>
                    <a href={stuff.practice} target="_blank">{title} {stuff.title}</a>
                </Typography>
            </AccordionDetails>
            <AccordionDetails>
                <Typography>
                    {edi}
                </Typography>
            </AccordionDetails>
        </div>);
    });
    return (
        <div className='events-dabba' style={{ width: '48vw', margin: 'auto' }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={styleSummary}
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                {BigBoi}
            </Accordion>
        </div>
    );
};

export default function Beginners() {
    return (
        <div style={{ alignContent: 'center', marginTop: '15vh' }}>
            <div className='Beginners' style={{ width: '48vw', margin: 'auto', textAlign: 'center', fontSize: '1.6vw', fontWeight: 'bold' }}>
                Practice and Upsolve
            </div>
            <Series title='Beginners Series' list={beginners_data} />
            {/* <Series title='CodeLNM' list={codelnm_data} /> */}
            <div className='events-dabba' style={{ width: '48vw', margin: 'auto' }}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{ color: 'white', backgroundColor: 'black' }}
                    >
                        <Typography>CodeLNM</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            To be Added
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <Series title='Placement Series' list={placement_data} />
        </div>
    );
}