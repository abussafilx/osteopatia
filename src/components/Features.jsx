import { Container, ListItem, SimpleGrid, Text, Title, List, Button, Image } from "@mantine/core"
import classes from './Features.module.css';
import foto from '../assets/foto.webp'

function Features () {

    return (
        <div className={classes.wrapper}>
        <Container>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={100}>

                <Image src={foto} h={500}></Image>
                <div>
                <Title order={3} className={classes.item}>Especialista em aliviar sua dor de forma rápida e segura usando apenas técnicas manuais</Title>
                
                <List mt={50}>
                    <ListItem className={classes.item}>Satisfação Garantida</ListItem>
                    <ListItem className={classes.item}>Alívio da dor no 1º tratamento</ListItem>
                    <ListItem className={classes.item}>Atua na causa do problema</ListItem>
                    <ListItem className={classes.item}>É seguro para todas as idades</ListItem>
                    <ListItem className={classes.item}>Eficaz para qualquer tipo de dor</ListItem>
                    <ListItem className={classes.item}>Boa localização e fácil acesso.</ListItem>
                    <ListItem className={classes.item}>Vaga disponível hoje.</ListItem>
                    <ListItem className={classes.item}>Park Free</ListItem>
                </List>
                <Button mt={50}>Faça sua marcação aqui</Button>
                </div>

            </SimpleGrid>
          
        </Container>
        </div>
    )

}

export default Features