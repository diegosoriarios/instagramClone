import React, { useState, useEffect } from 'react';

import { Container, Name, Avatar, Loading, Header } from './styles';

export default function Profile({ route }) {
  const { id } = route.params;
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      const response = await fetch(`http://localhost:3000/authors/${id}`)

      const data = await response.json()

      setUser(data)
      setLoading(false)
    }

    loadData()
  }, [])

  if (loading) return <Loading />
  
  return (
    <Container>
      <Header>
        <Name>{user.name}</Name>
        <Avatar source={{ uri: user.avatar }} />
      </Header>
    </Container>
  );
}
