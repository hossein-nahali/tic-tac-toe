import './css/App.scss';
import Table from "../Table";
import {Col, Container, Row} from "react-bootstrap";
import Box from "../Box";
import {useState} from "react";
import Header from "../Header";
import Turn from "../Turn";
import Status from "../Status";
import Footer from "../Footer";

function App() {
    const [turn, setTurn] = useState('x');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [countClick, setCountClick] = useState(0);
    const [winner, setWinner] = useState('');
    const [menu, setMenu] = useState(false);

    const checkWinner = (item) => {
        const combos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < combos.length; i++) {
            const [a, b, c] = combos[i];

            if (item[a] && item[a] === item[b] && item[a] === item[c]) {
                setWinner(item[c])
            }
        }
    }

    const click = (num) => {
        if (cells[num] !== '') {
            alert('clicked')
            return
        } else {
            setCountClick(countClick + 1);
        }
        let item = [...cells]

        if (turn === 'x') {
            item[num] = 'x'
            setTurn('o')
        } else {
            item[num] = 'o'
            setTurn('x')
        }

        if (countClick === 8 && winner === '') {
            setWinner('n')
        }

        checkWinner(item);

        setCells(item)
    }

    const reset_game = () => {
        // reset all state
        setTurn('x')
        setCells(Array(9).fill(''))
        setCountClick(0)
        setWinner('')
    }

    const toggle_menu = (mode) => {
        // toggle menu

        if (mode) {
            setMenu(mode)
            return;
        }
        setMenu(!menu)
    }
    return (
        <Container className={'h-100'}>
            <Row className={'h-100'}>
                <Col className={'d-flex justify-content-center align-items-center flex-column'}>
                    <Box>
                        <div className={`parent ${winner ? 'end-game' : ''}`}>
                            {<Status player={winner}/>}
                            <Header is_active_menu={menu} toggle_menu={toggle_menu}/>
                            <Table handler={click} turn={cells}/>
                            <Turn turn={turn}/>
                        </div>
                        <Footer winner={winner} reset={reset_game} turn={turn} toggle_menu={toggle_menu}/>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
