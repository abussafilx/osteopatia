import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';

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
  Container
} from '@mantine/core';

import classes from './Contacts.module.css';

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];


const MOCKDATA = [
    { title: 'Email', description: 'hello@mantine.dev', icon: IconAt },
    { title: 'Phone', description: '+49 (800) 335 35 35', icon: IconPhone },
    { title: 'Address', description: '844 Morris Park avenue', icon: IconMapPin },
    { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
  ];

export function Contacts() {
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <Container mt={50} mb={30
        
    }>
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

            {MOCKDATA.map((each) => {return (
      <div className={classes.wrapper2}>
        <Box mr="md">
          <each.icon size={24} />
        </Box>
  
        <div>
          <Text size="xs" className={classes.title2}>
            {each.title}
          </Text>
          <Text className={classes.description2}>{each.description}</Text>
        </div>
      </div>
    )})}

          <Group mt="xl">{icons}</Group>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="I want to order your goods"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button className={classes.control}>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
    </Container>
  );
}

export default Contacts