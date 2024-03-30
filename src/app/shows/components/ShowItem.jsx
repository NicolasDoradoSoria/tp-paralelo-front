import { Button, Typography } from '@mui/material';

const ShowItem = ({ show }) => {
    const { img, fecha, nombreRecital, instalacion, precioMinimo, precioMaximo } = show
    return (
        <div className='card-item-show'>
                <img src={img} alt="show" style={{ width: '300px' }} />
                <Typography variant='body2' color="text.secondary">
                    {nombreRecital}
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    ubicacion: {instalacion.nombre}
                </Typography>

            <div className='card-item-action'>
            <Typography variant='h6' color="textSecondary">
                desde: ${precioMinimo} hasta ${precioMaximo}
            </Typography>
                <Button variant="contained">agregar al carrito</Button>
            </div>
        </div>

    );
}

export default ShowItem;