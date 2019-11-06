import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './ScoreBoard.css'

export default function ScoreBoard(props) {
    return (
        <div className="scoreboard">
            <div className="title">SCOREBOARD</div>
            <Paper className='paper'>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Game Id</TableCell>
                            <TableCell>Score [ms]</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.savedScores.map((row, id) => (
                            <TableRow key={row + id}>
                                <TableCell component="th" scope="row">
                                    {id + 1}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}