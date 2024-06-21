import React from 'react';
import Navbar from './Navbar';
import { Progress, Group, Title, Text, Container, Paper, Tooltip } from '@mantine/core';

const Skills = () => {
  const skills = [
    { name: 'Python', level: 5 },
    { name: 'SQL', level: 5 },
    { name: 'HTML', level: 5 },
    { name: 'JavaScript', level: 4 },
    { name: 'TypeScript', level: 4 },
    { name: 'Machine Learning', level: 4 },
    { name: 'Data Analytics', level: 4 },
    { name: 'Java', level: 3 },
    { name: 'React', level: 3 },
    { name: 'Django', level: 3 },
    { name: 'Node.js', level: 3 },
    { name: 'CSS', level: 2 },
    { name: 'C++', level: 2 },
    { name: 'MongoDB', level: 2 },
    { name: 'AWS', level: 2 },
    { name: 'C', level: 1 },
  ];
  
  const getProgressColor = (level) => {
    switch (level) {
      case 1:
        return 'red'
      case 2:
        return 'orange';
      case 3:
        return 'yellow';
      case 4:
        return 'blue';
      case 5:
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    <>
        <Navbar/>
        <Container size="md" my={40}>
            <Title order={2} mb="lg">Skills</Title>
            <Paper withBorder p="md" radius="md" shadow="xs">
                {skills.map((skill, index) => (
                <Group key={index} position="apart" align="center" mb="md">
                    <Text weight={500}>{skill.name}</Text>
                    <Tooltip label={`Proficiency: ${skill.level}/5`} position="top">
                    <Progress 
                        value={(skill.level / 5) * 100} 
                        color={getProgressColor(skill.level)} 
                        size="md" 
                        radius="xl"
                        style={{ width: '60%' }}
                    />
                    </Tooltip>
                </Group>
                ))}
            </Paper>
        </Container>
    </>
  );
};

export default Skills;
