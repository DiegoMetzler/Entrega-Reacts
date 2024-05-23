import { Button } from 'antd'
import CartWidget from '../cartwidget/cartwidget'

const Navbar = () => {
    return (
        <div>
            <p>MATE A MATE</p>
            <Button>COMBOS</Button>
            <Button>MATES</Button>
            <Button>TERMOS</Button>
            <Button>BOMBILLAS</Button>
            <CartWidget />
        </div>
    )
}

export default Navbar