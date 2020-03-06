import React, { useState, useEffect } from 'react';

import { 
  Container, 
  Name, 
  Avatar, 
  Loading, 
  Header, 
  AvatarContainer, 
  NameContainer, 
  GridImage, 
  Grid,
  Info,
  InfoHeader,
  InfoText,
  InfoBlock
} from './styles';

export default function Profile({ route }) {
  const { id } = route.params;
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})
  const [feed, setFeed] = useState({})

  async function loadPosts() {
    const response = await fetch(`http://localhost:3000/feed?_expand=author`)

    const data = await response.json()

    setFeed(data.filter(posts => posts.authorId == id))
    setLoading(false)
  }

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      const response = await fetch(`http://localhost:3000/authors/${id}`)

      const data = await response.json()

      setUser(data)
      loadPosts()
    }

    loadData()
  }, [])

  if (loading) return <Loading />
  
  return (
    <Container>
      <Header>
        <NameContainer>
          <Name>{user.name}</Name>
        </NameContainer>
        <AvatarContainer>
          <Avatar source={{ uri: user.avatar }} />
        </AvatarContainer>
      </Header>
      <Info>
        <InfoBlock>
          <InfoHeader>Posts</InfoHeader>
          <InfoText>{feed.length}</InfoText>
        </InfoBlock>
        <InfoBlock>
          <InfoHeader>Seguidores</InfoHeader>
          <InfoText>0</InfoText>
        </InfoBlock>
        <InfoBlock>
          <InfoHeader>Seguindo</InfoHeader>
          <InfoText>0</InfoText>
        </InfoBlock>
      </Info>
      <Grid>
      {
        feed.map((post, i) => (
          <GridImage key={i} ratio={0.834} source={{ uri: post.image }} width={100} height={100} />          
        ))
      }
      </Grid>
    </Container>
  );
}
