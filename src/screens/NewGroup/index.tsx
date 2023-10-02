import {Container, Content, Icon} from './styles';
import { HighLight } from '@components/HighLight';
import { Input } from '@components/Input';
import { Button } from '@components/Button';


export function NewGroup(){
    return(
        <Container>
            <Content>
                <Icon/>

                <HighLight
                    title="Nova Turma"
                    subtitle="crie a turma para adicionar as pessoas"
                />

                <Input/>

                <Button
                     title="Criar"
                     style={{ marginTop: 20}}
                />

            </Content>
        </Container>
    )
}