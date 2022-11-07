import {Header, Button} from 'semantic-ui-react'

type HeaderContainerProps = {
    func: () => Promise<void>
}
function HeaderContainer ({func}: HeaderContainerProps) {
    const handleClickButton = () => {
        func()
    }

return (
    <>
        <Header as="h1">Hacker news</Header>
        <Button onClick={handleClickButton}>Обновить</Button>
    </>
)
}

export default HeaderContainer;