import { Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';
import eliminarGaussiana from '../utils/GausJordan';

const MatrizInicial = ({ matrix, handleChangeCell }) => {

    const handleBtnCalcular = () => {
        // Realizar eliminación gaussiana
        const soluciones = eliminarGaussiana(matrix);
        console.log(soluciones)
        alert('Las soluciones son ' + soluciones)
        //setSolution(soluciones);
    }

    return (
        <div>
            <table className='matrix'>
                <tbody>
                    {matrix.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => (
                                <td key={j}>
                                    <Input
                                        htmlSize={2}
                                        width='auto'
                                        value={cell}
                                        onChange={(e) => handleChangeCell(i, j, e.target.value)}
                                        type="number"
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button onClick={handleBtnCalcular} colorScheme='linkedin'>
                Calcular
            </Button>
        </div>
    )
}

MatrizInicial.propTypes = {
    matrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    handleChangeCell: PropTypes.func.isRequired,
    setSolution: PropTypes.func.isRequired
};

export default MatrizInicial;