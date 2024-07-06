import { Inputs } from "../../../components/input/input"

export const Input = () => {
    return <div className="input_block">  
        <Inputs placeholder="click" className="btn"  variant="primary" type="text"/>
        <Inputs placeholder="onclick" className="btn" variant="secondary" type="search"/>
        <Inputs placeholder="name" className="btn" variant="danger" type="text"/>
    </div>
}