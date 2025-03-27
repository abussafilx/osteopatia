import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import {
  ActionIcon,
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
  Box,
  Container,
  List,
  ListItem
} from '@mantine/core';

import classes from './Contacts.module.css';

const social = [{icon: IconBrandYoutube, link: "https://www.youtube.com/@osteopatiapro."}, {icon: IconBrandInstagram, link: "https://www.instagram.com/osteopatiapro"}];


const MOCKDATA = [
    { title: 'Email', description: 'contato@osteopatiapro.com', icon: IconAt },
    { title: 'Telefone', description: '+351 913 384 222', icon: IconPhone },
    { title: 'Morada', description: 'Rua da Bela Vista 53, 4b, Monte da Caparica 2825-004', icon: IconMapPin },
    { title: 'Horários', description: 'Seg - Sex : 9h as 21h | Sab : 9h as 18h', icon: IconSun },
  ];

export function Contacts() {
  const icons = social.map((Icon, index) => (
    <Link to={Icon.link}>
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent" color='white'>
      <Icon.icon size={22} stroke={1.5} />
    </ActionIcon></Link>
  ));

  return (
    <Container mt={50} mb={0}>
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={100}>
        <div>
          <Title className={classes.title}>Contatos</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Entre em contato por whatsapp
          </Text>

            {MOCKDATA.map((each) => {return (
      <div className={classes.wrapper2} key={each.title}>
        <Box mr="md">
          <each.icon size={24} />
        </Box>
  
        <div>
          <Text size="xs" className={classes.title2}>
            {each.title}
          </Text>
          <Text className={classes.description2}>{each.description}</Text>
        </div>
        <br></br><br></br>
      </div>
    )})}

          <Group mt="xl">{icons}</Group>
        </div>
        {/* <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Nome"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Mensagem"
            placeholder="Escreva sua mensagem"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button className={classes.control}>Send message</Button>
          </Group>
        </div> */}
        <div>
          <Title className={classes.title}>Especialidades</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Estamos aqui para ajudar
          </Text>
          <List>
            <ListItem className={classes.description2}>Osteopatia</ListItem>
            <ListItem className={classes.description2}>Massagem Terapeutica</ListItem>
            <ListItem className={classes.description2}>Massagem Relaxamento</ListItem>
            <ListItem className={classes.description2}>Deep Tissue Massage</ListItem>
            <ListItem className={classes.description2}>Shiatsu</ListItem>
            <ListItem className={classes.description2}>Personal Pilates</ListItem>


          </List>
          </div>
      </SimpleGrid>
    </div>
    </Container>
  );
}

export default Contacts