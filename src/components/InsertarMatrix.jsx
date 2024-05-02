import { Input, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const InsertarMatrix = ({columns, rows, setColumns, setRows, handleBtn}) => {
    return (
        <div>
            <div className='title'>
                <h1>Elige el tamaño de la matriz: </h1>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <p>Columnas</p>
                    <Input
                        htmlSize={4}
                        width='auto'
                        value={columns}
                        onChange={(e) => setColumns(e.target.value)}
                    />
                </div>
                <div className='input'>
                    <p>Filas</p>
                    <Input
                        htmlSize={4}
                        width='auto'
                        value={rows}
                        onChange={(e) => setRows(e.target.value)}
                    />
                </div>
                <div className='input'>
                    <p className='eliminar'>p</p>
                    <Button onClick={handleBtn} colorScheme='linkedin'>
                        Cargar Matriz
                    </Button>
                </div>
            </div>
        </div>
    )
}

InsertarMatrix.propTypes = {
    columns: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired,
    setColumns: PropTypes.func.isRequired,
    setRows: PropTypes.func.isRequired,
    handleBtn: PropTypes.func.isRequired
};


export default InsertarMatrix