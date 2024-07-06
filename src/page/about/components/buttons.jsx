import { Icon } from "/src/assets/icon"
import { Button } from "/src/components/btn/button"

export const Buttons = () => {
    return <div className="button_block">
        <Button className="btn" startIcon={<Icon />} variant="primary" type="submit">
            Click
        </Button>
      <Button className="btn" endIcon={<Icon/>} variant="secondary">
        Click
      </Button>
      <Button className="btn" startIcon={<Icon />} endIcon={<Icon />} variant="danger">
        Click
      </Button> 
    </div>
}